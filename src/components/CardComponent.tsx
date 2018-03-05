import * as React from 'react';
import Card from './../Card';

interface CardPropsInterface {
  card: Card;
}

export default class CardComponent extends React.Component<CardPropsInterface> {
  private readonly CARD_WIDTH: number = 60;
  private readonly CARD_HEIGHT: number = 80;
  private id: string;
  private card: Card;
  
  getBackgroundPositionX(column: number) {
    return  -1 * (column - 1) * this.CARD_WIDTH;
  }

  getBackgroundPositionY(row: number) {
    return  -1 * (row - 1) * this.CARD_HEIGHT;
  }

  render() {
    this.card = this.props.card;
    this.id = this.card.getFullName();
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