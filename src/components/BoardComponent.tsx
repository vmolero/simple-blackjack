import * as React from 'react';
import DealComponent from './DealComponent';
import Board from '../Board';
import Player from '../Player';

interface BoardStateInterface {
  board: Board;
  handNumber: number;
  playerScore: number;
  houseScore: number;
}

export default class BoardComponent extends React.Component<{}, BoardStateInterface> {
  
  constructor(props: {}) {
    super(props);
    const board: Board = new Board();
    board.addPlayer(new Player());
    this.state = {
      board: board,
      handNumber: 0,
      playerScore: 0,
      houseScore: 0 
    };
  }

  public handleDealClick() {
    let board: Board = this.state.board;
    board.firstDeal();
    this.setState(
      { 
        board: board,
        handNumber: this.state.handNumber + 1
      }
    );
  }

  public handleHitClick() {
    let board: Board = new Board();
    board = this.state.board;
    board.giveCardToPlayer();
    this.setState({ board: board });
    let playerScore: number = this.state.playerScore;
    let houseScore: number = this.state.houseScore;
    if (board.getDeal().isDealOver()) {
        if (board.isHouseWinning()) {
          houseScore += 1;
        } else {
          playerScore += 1;
        }
    }
    this.setState(
      { 
        board: board,
        houseScore: houseScore,
        playerScore: playerScore,
      }
    );
  }

  public handleStandClick() {
    let board: Board = new Board();
    board = this.state.board;
    while (!board.getDeal().isDealOver()) {
      board.giveCardToHouse();
    }
    let playerScore: number = this.state.playerScore;
    let houseScore: number = this.state.houseScore;
    if (board.isHouseWinning()) {
      houseScore += 1;
    } else {
      playerScore += 1;
    }
    this.setState(
      { 
        board: board,
        houseScore: houseScore,
        playerScore: playerScore,
      }
    );
  }

  public render() {
    const board: Board = this.state.board; 
    
    return (
      <div id="table">
        <aside id="subheader">
          <div id="localstoragebuttons">
            <input type="button" id="btnSave" value="Save globals" />
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
                       deal={board.getDeal()} 
                       onDealClick={() => this.handleDealClick()} 
                       onHitClick={() => this.handleHitClick()} 
                       onStandClick={() => this.handleStandClick()} 
        />        
      </div>
      );
    }
}