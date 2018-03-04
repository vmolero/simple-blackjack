import * as React from 'react';
import Hand from '../Hand';
import Card from '../Card';
import CardComponent from './CardComponent';

interface HandPropsInterface {
  hand: Hand;
  caption: string;
  prefix: string;
}

export default class HandComponent extends React.Component<HandPropsInterface> {
  
  public renderCards(hand: Hand): JSX.Element {
    const cards: Array<Card> = hand.getCards();
    if (cards.length === 0) {
      return this.renderEmptyCard();
    }

    let cardComponets: Array<JSX.Element> = [];
    for (let i: number = 0; i < cards.length; i++) {
      let card: Card = cards[i];
      cardComponets.push(this.renderCard(card));
    }
    return (
      <div>{cardComponets}</div>
    );
  }

  public renderCard(card: Card): JSX.Element {
    return (
      <CardComponent card={card} />
     );
  }
  
  public renderEmptyCard(): JSX.Element {
    const emptyCardId: string = this.props.prefix + 'emptycard';
    return (
      <div className="card no-background" id={emptyCardId} />
    );        
  }
  
  render() {
    let hand: Hand = this.props.hand;
    const sectionId: string = this.props.prefix + 'side';
    const fieldsetId: string = this.props.prefix + 'fieldset';
    const deskId: string = this.props.prefix + 'table';
    
    return (
      <section id={sectionId}>
        <fieldset id={fieldsetId}>
          <legend>{this.props.caption}</legend>
            <div className="desk" id={deskId}>
              {this.renderCards(hand)}
            </div>
        </fieldset>
      </section>
      );
    }
}