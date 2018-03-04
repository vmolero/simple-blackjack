import * as React from 'react';
import HandComponent from './HandComponent';
import Deal from '../Deal';

interface DealPropsInterface {
  deal: Deal;
  onClick: Function;
}

export default class DealComponent extends React.Component<DealPropsInterface, {}> {
  public render() {
    let deal: Deal = this.props.deal;
    return (
      <div id="gamezone">
          <div id="gamebuttons">
              <span id="playeramount"><span id="player">{deal.getPlayerScore()}</span> </span>
              <input type="button" id="btnDealer" value="Deal !" onClick={() => this.props.onClick()} />
              <input type="button" id="btnHit" value="Hit" />
              <input type="button" id="btnStand" value="Stand" />
              <span id="bankamount"> <span id="bank">{deal.getHouseScore()}</span></span>
          </div>
          <HandComponent hand={deal.getPlayerHand()} caption="Your cards" prefix="player" />
          <HandComponent hand={deal.getHouseHand()} caption="House" prefix="bank" />
        </div>
      );
    }
}