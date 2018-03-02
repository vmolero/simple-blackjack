import * as React from 'react';
import BoardComponent from './components/BoardComponent';

class SimpleBlackJack extends React.Component {
  render() {
    return (
      <div className="container">
        <header id="header">
          <h1>
            <span>simple</span>BlackJack
          </h1>
        </header>
        <aside id="subheader">
          <div id="localstoragebuttons">
            <input type="button" id="btnSave" value="Save globals" />
            <input type="button" id="btnReset" value="Reset Counters" />
          </div>
          <div id="globalinfopanel">
            <p><span id="globalhand">Hand: <span id="dealnumber">-</span></span> <br />
            <span id="globalscores">You <span id="playerscore">-</span> :: <span id="bankscore">-</span> Bank</span></p>
          </div>
        </aside>
        <div id="gamebuttons">
            <span id="playeramount"><span id="player">0</span> </span>
            <input type="button" id="btnDealer" value="Deal !" />
            <input type="button" id="btnHit" value="Hit" />
            <input type="button" id="btnStand" value="Stand" />
            <span id="bankamount"> <span id="bank">0</span></span>
        </div>
        <BoardComponent />
        <footer id="footer">
          <div id="gameinfo">
            <p id="txtMessage">
              Wellcome to the Víctor Molero's BlackJack Game. Press 'Deal!' to start playing.
            </p>
          </div>
        </footer>
      </div>
    );
  }
}

export default SimpleBlackJack;
