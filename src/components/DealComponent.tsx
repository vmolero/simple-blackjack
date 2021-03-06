import * as React from 'react';
import HandComponent from './HandComponent';
import Board from '../Board';

interface DealPropsInterface {
  board: Board;
  btnDealerClass: string;
  btnHitClass: string;
  btnStandClass: string;
  onDealClick: Function;
  onHitClick: Function;
  onStandClick: Function;
}

export default class DealComponent extends React.Component<DealPropsInterface> {
  public render() {
    let board: Board = this.props.board;
    return (
      <div id="gamezone">
          <div id="gamebuttons">
              <span id="playeramount"><span id="player">{board.getPlayerScore()}</span> </span>
              <input 
                    className={this.props.btnDealerClass} 
                    type="button" 
                    id="btnDealer" 
                    value="Deal !" 
                    onClick={() => this.props.onDealClick()} 
              />
              <input 
                    className={this.props.btnHitClass} 
                    type="button" 
                    id="btnHit" 
                    value="Hit" 
                    onClick={() => this.props.onHitClick()} 
              />
              <input 
                    className={this.props.btnStandClass}
                    type="button" 
                    id="btnStand" 
                    value="Stand" 
                    onClick={() => this.props.onStandClick()} 
              />
              <span id="bankamount"> <span id="bank">{board.getHouseScore()}</span></span>
          </div>
          <HandComponent hand={board.getPlayerHand()} caption="Your cards" prefix="player" />
          <HandComponent hand={board.getHouseHand()} caption="House" prefix="bank" />
        </div>
      );
    }
}