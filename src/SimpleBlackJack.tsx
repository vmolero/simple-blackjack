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
