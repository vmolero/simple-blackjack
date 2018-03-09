import * as React from 'react';
import { BoardComponent, BoardStateInterface, JsonStateInterface } from './BoardComponent';

class SimpleBlackJack extends React.Component {
  private readonly KEY: string = 'blackjack';

  setItem(key: string, data: string) {
    localStorage.setItem(key, data);
  }
  
  getItem(key: string): JsonStateInterface {
    const jsonState: string | null = localStorage.getItem(key);
    if (jsonState !== null) {
      return JSON.parse(jsonState);
    }
    return {
      handNumber: 0,
      playerScore: 0,
      houseScore: 0,
    };
  }

  saveGame(state: BoardStateInterface) {
    let jsonSate: JsonStateInterface = {
      handNumber: state.handNumber,
      playerScore: state.playerScore,
      houseScore: state.houseScore,
    };
    this.setItem(this.KEY, JSON.stringify(jsonSate));
  }

  loadGame(): JsonStateInterface {
    return this.getItem(this.KEY);
  }

  handleSaveGame(state: BoardStateInterface): boolean {
    try {
      this.saveGame(state);
    } catch (errorOnSave) {
      return false;
    }
    return true;
  }
  
  handleResetGame(): boolean {
    try {
      localStorage.clear();
    } catch (errorOnSave) {
      return false;
    }
    return true;
  }

  render() {
    return (
      <div className="container">
        <header id="header">
          <h1>
            <span>simple</span>BlackJack
          </h1>
        </header>
        <BoardComponent 
                        jsonState={this.loadGame()}  
                        onSaveGameClick={(state: BoardStateInterface) => this.handleSaveGame(state)}
                        onResetGameClick={() => this.handleResetGame()}
        />
        <footer id="footer">
          <div id="gameinfo">
            <p id="txtMessage">
              Welcome to vmolero's BlackJack Game. Press 'Deal!' to start playing.
            </p>
          </div>
        </footer>
      </div>
    );
  }
}

export default SimpleBlackJack;
