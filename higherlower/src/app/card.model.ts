export class Card {
  constructor(
    public id: number,
    public suit: string,
    public name: string,
    public rank: number,
    public history: string,  
    public value: string     
  ) {}
}
