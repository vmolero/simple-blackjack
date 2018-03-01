import * as React from 'react';
import Card from './components/Card';

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
        <div id="table">
          <div id="gamezone">
            <section id="playerside">
              <fieldset id="playerfieldset">
                <legend>Your cards</legend>
                  <div className="desk" id="playertable">
                    <div className="card no-background" id="playeremptycard" />
                    <Card name="Ace" suite="Hearts" x="0" y="0" />
                  </div>
              </fieldset>
            </section>
            <section id="bankside">
              <fieldset id="bankfieldset">
                <legend>Dealer</legend>
                  <div className="desk" id="banktable">
                    <div className="card no-background" id="bankemptycard" />
                    <Card name="Ace" suite="Spades" x="0" y="0" />
                  </div>
              </fieldset>
            </section>
          </div>
        </div>
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
