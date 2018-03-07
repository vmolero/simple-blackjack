import * as React from 'react';
import DealComponent from './DealComponent';
import Board from '../Board';

interface BoardStateInterface {
  board: Board;
  handNumber: number;
  playerScore: number;
  houseScore: number;
  btnDealerClass: string;
  btnPlayerClass: string;
}

interface BoardPropsInterface {
  board: string;
  onSaveBoardClick: Function;
}

export default class BoardComponent extends React.Component<BoardPropsInterface, BoardStateInterface> {
  
  constructor(props: BoardPropsInterface) {
    super(props);
    let board: Board = Board.newGame();
    if (this.props.board.length > 0) {
      try {
        board = JSON.parse(this.props.board);
      } catch (invalidJson) {
        alert('Cannot parse Board json');
      }
    }
    this.state = {
      board: board,
      handNumber: 0,
      playerScore: 0,
      houseScore: 0,
      btnDealerClass: '',
      btnPlayerClass: 'invisible'
    };
  }

  public handleDealClick() {
    this.setState(
      { 
        board: this.state.board.newDeal(),
        handNumber: this.state.handNumber + 1,
        btnDealerClass: 'invisible',
        btnPlayerClass: ''
      }
    );
  }

  public handleHitClick() {
    let newState: BoardStateInterface = this.state;
    newState.board = this.state.board.dealPlayer();
    this.setNewState(newState);
  }

  public handleStandClick() {
    let newState: BoardStateInterface = this.state;
    let board: Board = this.state.board;
    while (!board.isGameOver()) {
      board = board.dealHouse();
    }
    newState.board = board;
    this.setNewState(newState);
  }

  public handleSaveBoard() {
    let jsonBoard: string = JSON.stringify(this.state.board);
    return this.props.onSaveBoardClick(jsonBoard);
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
                    onClick={() => this.handleSaveBoard()} 
            />
            <input type="button" id="btnReset" value="Reset Counters" />
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
                       btnPlayerClass={this.state.btnPlayerClass}
                       onDealClick={() => this.handleDealClick()} 
                       onHitClick={() => this.handleHitClick()} 
                       onStandClick={() => this.handleStandClick()} 
        />        
      </div>
      );
    }

    private setNewState(newState: BoardStateInterface) {
      if (newState.board.isGameOver()) {
        if (newState.board.isHouseWinning()) {
          newState.houseScore += 1;
        } else {
          newState.playerScore += 1;
        }
        newState.btnDealerClass = '';
        newState.btnPlayerClass = 'invisible';
      }
      this.setState(newState);
    }
}