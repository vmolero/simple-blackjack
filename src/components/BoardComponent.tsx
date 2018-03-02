import * as React from 'react';
import CardComponent from './CardComponent';
import Board from '../Board';
import Card from '../Card';
import Suit from '../Suit';

export default class BoardComponent extends React.Component {
  private board: Board;
  constructor(props: string[]) {
    super(props);
    this.board = new Board();
    this.board.addCard(new Card(1, Suit.Hearts));
    this.board.addCard(new Card(11, Suit.Hearts));
    this.board.getHandScore(); 
  }

  public render() {
    return (
        <div id="table">
          <div id="gamezone">
            <section id="playerside">
              <fieldset id="playerfieldset">
                <legend>Your cards</legend>
                  <div className="desk" id="playertable">
                    <div className="card no-background" id="playeremptycard" />
                    <CardComponent rank="11" suit="4" />
                  </div>
              </fieldset>
            </section>
            <section id="bankside">
              <fieldset id="bankfieldset">
                <legend>Dealer</legend>
                  <div className="desk" id="banktable">
                    <div className="card no-background" id="bankemptycard" />
                    <CardComponent rank="13" suit="1" />
                  </div>
              </fieldset>
            </section>
          </div>
        </div>
      );
    }
}