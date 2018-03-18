import CardJsonInterface from './../interfaces/CardJsonInterface';

interface BlackJackStateInterface {
  playerGlobalScore: number;
  houseGlobalScore: number;
  handNumber: number;
  playerHand: Array<CardJsonInterface>;
  houseHand: Array<CardJsonInterface>;
  deck: Array<CardJsonInterface>;
}

export default BlackJackStateInterface;