import Card from './Card';

export default class Hand {
    private cards: Array<Card>;
    public constructor() {
        this.cards = Array<Card>();
    }

    public add(card: Card) {
        this.cards.push(card);
    }

    public getCards(): Array<Card> {
        return this.cards;
    }
    
    public getScore(): number {
        let arrayPossibleScores: Array<number> = this.calculateRecursively(this.cards);
        return this.bestHand(arrayPossibleScores);
    }

    private calculateRecursively(hand: Array<Card>): Array<number> {
        if (hand.length === 0) {
            return [0];
        }
        let handrec: Array<Card> = hand.slice(0);
        const firstCard: Card | undefined = handrec.shift();
        let handScore: Array<number> = [];
        if (firstCard === undefined) {
            return [0];
        }
        let firstCardScore: Array<number> = firstCard.getScore();
        
        for (let i: number = 0; i < firstCardScore.length; i++) {
            let score: number = firstCardScore[i];
            let accumulated: Array<number> = this.arrayAdd(score, this.calculateRecursively(handrec));
            handScore = handScore.concat(accumulated);
        }
        return handScore;
    }
    
    private bestHand (vector: Array<number>): number {
        let best: number = vector[0];
        let candidate: number = 0;
        for (let i: number = 1; i < vector.length; i++) {
            candidate = vector[i];
            if (best > 21) {
                best = Math.min(best, candidate);
            } else {
                best = (candidate > best && candidate <= 21 ? candidate : best);
            }
        }

        return best;
    }

    private arrayAdd(n: number, vector: Array<number>): Array<number> {
        for (let i: number = 0; i < vector.length; i++) {
            vector[i] += n;
        }
        
        return vector;
    }
}