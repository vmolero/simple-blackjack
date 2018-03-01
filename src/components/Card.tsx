import * as React from 'react';

interface CardPropsInterface {
  name: string;
  suite: string;
  x: string;
  y: string;
}

class Card extends React.Component<CardPropsInterface> {
  private id: string;
  private x: number;
  private y: number;
  
  constructor(props: CardPropsInterface) {
    super(props);
    this.id = props.name + props.suite;
    this.x = parseInt(props.x, 10);
    this.y = parseInt(props.y, 10);
  }
  
  render() {
    let background = {
      backgroundImage: `url('../img/mobile-cards.png')`,
      backgroundPositionX: this.x,
      backgroundPositionY: this.y
    };
    return (
        <div className="card" id={this.id} style={background}>
        ({this.x}, {this.y}): {this.id}
        </div>
      );
    }
}

export default Card;
  // card-name={this.props.card-name} card-suite={this.props.data-suite} 
  // x-position={this.props.x} y-position={this.props.y}