import * as React from 'react';
import DealComponent from './DealComponent';
import Board, { BoardJsonInterface } from '../Board';

export interface BoardStateInterface {
  board: Board;
  handNumber: number;
  playerScore: number;
  houseScore: number;
  btnDealerClass: string;
  btnHitClass: string;
  btnStandClass: string;
  message: string;
}

interface BoardPropsInterface {
  jsonState: JsonStateInterface;
  onSaveGameClick: Function;
  onResetGameClick: Function;
}

export interface JsonStateInterface {
  board: BoardJsonInterface;
  handNumber: number;
  playerScore: number;
  houseScore: number;
}

export class BoardComponent extends React.Component<BoardPropsInterface, BoardStateInterface> {
  
  constructor(props: BoardPropsInterface) {
    super(props);
    this.state = this.resetState();
    if (Object.keys(this.props.jsonState).length > 0 && 
       this.props.jsonState.constructor === Object) {
      try {
        this.state = this.fromSavedState(this.props.jsonState);
      } catch (invalidJson) {
        alert('Cannot parse json');
      }
    }
  }

  public fromSavedState(stateObject: JsonStateInterface): BoardStateInterface {
    let state: BoardStateInterface = {
      board: Board.fromJSON(stateObject.board),
      handNumber: stateObject.handNumber,
      playerScore: stateObject.playerScore,
      houseScore: stateObject.houseScore,
      btnDealerClass: '',
      btnHitClass: 'invisible',
      btnStandClass: 'invisible',
      message: 'Welcome to vmolero\'s BlackJack Game. Press \'Deal!\' to start playing.'
    };

    return state;
  }

  public resetState(): BoardStateInterface {
    return {
      board: Board.newGame(),
      handNumber: 0,
      playerScore: 0,
      houseScore: 0,
      btnDealerClass: '',
      btnHitClass: 'invisible',
      btnStandClass: 'invisible',
      message: 'Welcome to vmolero\'s BlackJack Game. Press \'Deal!\' to start playing.'
    };
  }

  public handleDealClick() {
    this.setState(
      { 
        board: this.state.board.newDeal(),
        handNumber: this.state.handNumber + 1,
        btnDealerClass: 'invisible',
        btnHitClass: '',
        btnStandClass: '',
        message: 'Game ON!'
      }
    );
  }

  public handleHitClick() {
    let newState: BoardStateInterface = this.state;
    newState.board = this.state.board.dealPlayer();
    this.setNewState(newState);
  }

  public sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  public async handleStandClick() {
    let newState: BoardStateInterface = this.state;
    let board: Board = this.state.board;
    newState.btnHitClass = 'invisible';
    this.setNewState(newState);
    while (!board.isGameOver()) {
      board = board.dealHouse();
      newState.board = board;
      this.setNewState(newState);
      await this.sleep(1000);
    }
  }

  public handleSaveGame() {
    return this.props.onSaveGameClick(this.state);
  }

  public handleResetGame() {
    if (confirm('Are you sure?')) {
      this.setState(this.resetState());
      return this.props.onResetGameClick();
    }
  }

  public render() {
    return (
      <div id="table">
        <aside id="subheader">
          <div id="localstoragebuttons">
            <input 
                    type="button" 
                    id="btnSave" 
                    value="Save globals" 
                    onClick={() => this.handleSaveGame()} 
            />
            <input 
                    type="button" 
                    id="btnReset" 
                    value="Reset Counters"
                    onClick={() => this.handleResetGame()}
            />
          </div>
          <div id="globalinfopanel">
            <p>
              <span id="globalhand">Hand: <span id="dealnumber">{this.state.handNumber}</span></span> 
              <br />
              <span id="globalscores"> You <span id="playerscore">
                {this.state.playerScore}</span> :: <span id="bankscore">
                {this.state.houseScore}
              </span> House</span>
            </p>
          </div>
        </aside>
        <DealComponent 
                       board={this.state.board}
                       btnDealerClass={this.state.btnDealerClass}
                       btnHitClass={this.state.btnHitClass}
                       btnStandClass={this.state.btnStandClass}
                       onDealClick={() => this.handleDealClick()} 
                       onHitClick={() => this.handleHitClick()} 
                       onStandClick={() => this.handleStandClick()} 
        />
        <footer id="footer">
          <div id="gameinfo">
            <p id="txtMessage">
              {this.state.message}
            </p>
          </div>
        </footer>        
      </div>
      );
    }

    private setNewState(newState: BoardStateInterface) {
      if (newState.board.isGameOver()) {
        if (newState.board.isHouseWinning()) {
          newState.houseScore += 1;
          newState.message = 'Aww, you lose, press \'Deal!\' to play another hand.';
        } else {
          newState.playerScore += 1;
          newState.message = 'YOU WIN !! Press \'Deal!\' to play another hand.';
        }
        newState.btnDealerClass = '';
        newState.btnHitClass = 'invisible';
        newState.btnStandClass = 'invisible';
      }
      this.setState(newState);
    }
}