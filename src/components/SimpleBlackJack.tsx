import * as React from 'react';
import BoardComponent from './BoardComponent';

class SimpleBlackJack extends React.Component {
  private readonly KEY: string = 'board';

  setItem(key: string, data: string) {
    localStorage.setItem(key, data);
  }
  getItem(key: string): string {
    const jsonBoard: string | null = localStorage.getItem(key);
    if (jsonBoard !== null) {
      return jsonBoard;
    }
    return '';
  }
  handleSaveBoard(board: string): boolean {
    try {
      this.setItem(this.KEY, board);
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
                        board={this.getItem('board')}  
                        onSaveBoardClick={(board: string) => this.handleSaveBoard(board)}
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
