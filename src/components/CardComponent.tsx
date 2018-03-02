import * as React from 'react';
import Card from './../Card';

interface CardPropsInterface {
  rank: string;
  suit: string;
}

export default class CardComponent extends React.Component<CardPropsInterface> {
  readonly CARD_WIDTH: number = 60;
  readonly CARD_HEIGHT: number = 80;
  private id: string;
  private card: Card;
  
  constructor(props: CardPropsInterface) {
    super(props);
    this.card = new Card(
      parseInt(props.rank, 10), 
      parseInt(props.suit, 10)
    );
    this.id = this.card.getFullName();
  }

  getBackgroundPositionX(column: number) {
    return  -1 * (column - 1) * this.CARD_WIDTH;
  }

  getBackgroundPositionY(row: number) {
    return  -1 * (row - 1) * this.CARD_HEIGHT;
  }

  render() {
    let background = {
      backgroundImage: `url('../img/mobile-cards.png')`,
      backgroundPositionX: this.getBackgroundPositionX(this.card.getRank()),
      backgroundPositionY: this.getBackgroundPositionY(this.card.getSuit()),
    };
    return (
        <div className="card" id={this.id} style={background} />
      );
    }
}