import * as React from 'react';
import DealComponent from './DealComponent';
import Board from '../Board';

export default class BoardComponent extends React.Component<{}, Board> {
  
  constructor(props: {}) {
    super(props);
    this.state = new Board();
  }

  public handleDealClick() {
    alert('jelou');
    this.state.newDeal();
  }

  public render() {
    return (
      <div id="table">
        <aside id="subheader">
          <div id="localstoragebuttons">
            <input type="button" id="btnSave" value="Save globals" />
            <input type="button" id="btnReset" value="Reset Counters" />
          </div>
          <div id="globalinfopanel">
            <p>
              <span id="globalhand">Hand: <span id="dealnumber">{this.state.getDealCount()}</span></span> 
              <br />
              <span id="globalscores"> You <span id="playerscore">
                {this.state.getPlayerWins()}</span> :: <span id="bankscore">
                {this.state.getHouseWins()}
              </span> House</span>
            </p>
          </div>
        </aside>
        <DealComponent deal={this.state.getDeal()} onClick={() => this.handleDealClick()} />        
      </div>
      );
    }
}