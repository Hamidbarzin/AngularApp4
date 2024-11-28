import { Card } from "./card.model";
import { SimpleDataSource } from "./datasource.model";

export class Model {
    private dataSource: SimpleDataSource;
    private cards: Card[];
    private locator = (p: Card, id: number | any) => p.id == id;

    constructor() {
        this.dataSource = new SimpleDataSource();
        this.cards = this.dataSource.getData(); 
    }

    getCards(): Card[] {
        return this.cards;
    }

    getCard(id: number): Card | undefined {
        return this.cards.find(p => this.locator(p, id));
    }

    // return random card
    getRandomCardById(): Card | undefined {
        if (this.cards.length === 0) {
            return undefined;
        }
        const randomIndex = Math.floor(Math.random() * this.cards.length);
        return this.cards[randomIndex];
    }
}
