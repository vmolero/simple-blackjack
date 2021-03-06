import * as React from 'react';
import { BoardComponent, BoardStateInterface, JsonStateInterface } from './BoardComponent';
import Board from 'Board';

interface SimpleBlackJackPropsInterface {
  localStorage: Storage | null;
}

class SimpleBlackJack extends React.Component<SimpleBlackJackPropsInterface> {
  private readonly KEY: string = 'blackjack';

  setItem(key: string, data: string) {
    if (this.props.localStorage) {
      this.props.localStorage.setItem(key, data);
    }
  }
  
  getItem(key: string): JsonStateInterface {
    if (this.props.localStorage) {
      const jsonState: string | null = this.props.localStorage.getItem(key);
      if (jsonState !== null) {
        return JSON.parse(jsonState);
      }
    }
    
    return {
      board: Board.newGame().toJSON(),
      handNumber: 0,
      playerScore: 0,
      houseScore: 0,
      btnDealerClass: '',
      btnHitClass: 'invisible',
      btnStandClass: 'invisible',
      message: 'Welcome to vmolero\'s BlackJack Game. Press \'Deal!\' to start playing.'
    };
  }

  saveGame(state: BoardStateInterface) {
    let jsonSate: JsonStateInterface = {
      board: state.board.toJSON(),
      handNumber: state.handNumber,
      playerScore: state.playerScore,
      houseScore: state.houseScore,
      btnDealerClass: state.btnDealerClass,
      btnHitClass: state.btnHitClass,
      btnStandClass: state.btnStandClass,
      message: state.message
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
      if (this.props.localStorage) {
        this.props.localStorage.clear();
      }
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
      </div>
    );
  }
}

export default SimpleBlackJack;
