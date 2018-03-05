import * as React from 'react';
import HandComponent from './HandComponent';
import Deal from '../Deal';

interface DealPropsInterface {
  deal: Deal;
  onDealClick: Function;
  onHitClick: Function;
  onStandClick: Function;
}

interface DealStateInterface {
  deal: Deal;
}

export default class DealComponent extends React.Component<DealPropsInterface, DealStateInterface> {
  public render() {
    let deal: Deal = this.props.deal;
    let btnStandValue = deal.getPlayerScore() > deal.getHouseScore() ? 'Stand' : 'Surrender';
    let invisibleDeal: string = deal.isDealOver() ? 'invisible' : '';
    let invisibleOthers: string = deal.isDealOver() ? '' : 'invisible';
    return (
      <div id="gamezone">
          <div id="gamebuttons">
              <span id="playeramount"><span id="player">{deal.getPlayerScore()}</span> </span>
              <input 
                    className={invisibleDeal} 
                    type="button" 
                    id="btnDealer" 
                    value="Deal !" 
                    onClick={() => this.props.onDealClick()} 
              />
              <input 
                    className={invisibleOthers} 
                    type="button" 
                    id="btnHit" 
                    value="Hit" 
                    onClick={() => this.props.onHitClick()} 
              />
              <input 
                    className={invisibleOthers} 
                    type="button" 
                    id="btnStand" 
                    value={btnStandValue} 
                    onClick={() => this.props.onStandClick()} 
              />
              <span id="bankamount"> <span id="bank">{deal.getHouseScore()}</span></span>
          </div>
          <HandComponent hand={deal.getPlayerHand()} caption="Your cards" prefix="player" />
          <HandComponent hand={deal.getHouseHand()} caption="House" prefix="bank" />
        </div>
      );
    }
}