import { Card } from "./card.model";

export class SimpleDataSource {
    private data: Card[];

    constructor() {
        this.data = new Array<Card>(
            // HEARTS
            new Card(1, "Hearts", "Two of Hearts", 1, "The Two of Hearts is a low-value card often associated with partnership and harmony.", "Low"),
            new Card(2, "Hearts", "Three of Hearts", 2, "The Three of Hearts symbolizes creativity and emotional expression.", "Low"),
            new Card(3, "Hearts", "Four of Hearts", 3, "The Four of Hearts suggests stability and contentment in personal relationships.", "Moderate"),
            new Card(4, "Hearts", "Five of Hearts", 4, "The Five of Hearts often implies changes in relationships.", "Moderate"),
            new Card(5, "Hearts", "Six of Hearts", 5, "The Six of Hearts is known for peace and harmony within partnerships.", "Moderate"),
            new Card(6, "Hearts", "Seven of Hearts", 6, "The Seven of Hearts is associated with mystery and emotional exploration.", "High"),
            new Card(7, "Hearts", "Eight of Hearts", 7, "The Eight of Hearts represents balance in relationships.", "High"),
            new Card(8, "Hearts", "Nine of Hearts", 8, "The Nine of Hearts often implies dreams and emotional fulfillment.", "High"),
            new Card(9, "Hearts", "Ten of Hearts", 9, "The Ten of Hearts is a card of success and emotional completion.", "Very High"),
            new Card(10, "Hearts", "Jack of Hearts", 10, "The Jack of Hearts is a card of romance and charm.", "Special"),
            new Card(11, "Hearts", "Queen of Hearts", 11, "The Queen of Hearts symbolizes kindness and nurturing qualities.", "Special"),
            new Card(12, "Hearts", "King of Hearts", 12, "The King of Hearts represents authority and wisdom in emotional matters.", "Special"),
            new Card(13, "Hearts", "Ace of Hearts", 13, "The Ace of Hearts symbolizes the highest level of love and emotion.", "Top"),

            // CLUBS
            new Card(14, "Clubs", "Two of Clubs", 1, "The Two of Clubs suggests teamwork and collaboration.", "Low"),
            new Card(15, "Clubs", "Three of Clubs", 2, "The Three of Clubs is a card of growth and creativity.", "Low"),
            new Card(16, "Clubs", "Four of Clubs", 3, "The Four of Clubs represents stability and security in work and ideas.", "Moderate"),
            new Card(17, "Clubs", "Five of Clubs", 4, "The Five of Clubs often implies challenges or competition.", "Moderate"),
            new Card(18, "Clubs", "Six of Clubs", 5, "The Six of Clubs symbolizes victory after struggles.", "Moderate"),
            new Card(19, "Clubs", "Seven of Clubs", 6, "The Seven of Clubs represents endurance and persistence.", "High"),
            new Card(20, "Clubs", "Eight of Clubs", 7, "The Eight of Clubs suggests progress and movement.", "High"),
            new Card(21, "Clubs", "Nine of Clubs", 8, "The Nine of Clubs implies resilience and hard work.", "High"),
            new Card(22, "Clubs", "Ten of Clubs", 9, "The Ten of Clubs is a card of success and completion in work.", "Very High"),
            new Card(23, "Clubs", "Jack of Clubs", 10, "The Jack of Clubs is associated with ambition and resourcefulness.", "Special"),
            new Card(24, "Clubs", "Queen of Clubs", 11, "The Queen of Clubs symbolizes generosity and strength.", "Special"),
            new Card(25, "Clubs", "King of Clubs", 12, "The King of Clubs represents leadership and authority.", "Special"),
            new Card(26, "Clubs", "Ace of Clubs", 13, "The Ace of Clubs is a powerful card symbolizing achievement.", "Top"),

            // DIAMONDS
            new Card(27, "Diamonds", "Two of Diamonds", 1, "The Two of Diamonds indicates balance in financial matters.", "Low"),
            new Card(28, "Diamonds", "Three of Diamonds", 2, "The Three of Diamonds represents creativity and progress in work.", "Low"),
            new Card(29, "Diamonds", "Four of Diamonds", 3, "The Four of Diamonds suggests stability in finances.", "Moderate"),
            new Card(30, "Diamonds", "Five of Diamonds", 4, "The Five of Diamonds can indicate financial challenges.", "Moderate"),
            new Card(31, "Diamonds", "Six of Diamonds", 5, "The Six of Diamonds represents growth and prosperity.", "Moderate"),
            new Card(32, "Diamonds", "Seven of Diamonds", 6, "The Seven of Diamonds symbolizes patience in achieving financial goals.", "High"),
            new Card(33, "Diamonds", "Eight of Diamonds", 7, "The Eight of Diamonds is a card of ambition and diligence.", "High"),
            new Card(34, "Diamonds", "Nine of Diamonds", 8, "The Nine of Diamonds implies success in financial endeavors.", "High"),
            new Card(35, "Diamonds", "Ten of Diamonds", 9, "The Ten of Diamonds is a card of financial achievement.", "Very High"),
            new Card(36, "Diamonds", "Jack of Diamonds", 10, "The Jack of Diamonds is associated with entrepreneurship.", "Special"),
            new Card(37, "Diamonds", "Queen of Diamonds", 11, "The Queen of Diamonds symbolizes luxury and generosity.", "Special"),
            new Card(38, "Diamonds", "King of Diamonds", 12, "The King of Diamonds represents financial authority.", "Special"),
            new Card(39, "Diamonds", "Ace of Diamonds", 13, "The Ace of Diamonds symbolizes the highest financial success.", "Top"),

            // SPADES
            new Card(40, "Spades", "Two of Spades", 1, "The Two of Spades suggests conflict or decisions to be made.", "Low"),
            new Card(41, "Spades", "Three of Spades", 2, "The Three of Spades indicates challenges in communication.", "Low"),
            new Card(42, "Spades", "Four of Spades", 3, "The Four of Spades represents rest and recovery.", "Moderate"),
            new Card(43, "Spades", "Five of Spades", 4, "The Five of Spades implies struggles or conflicts.", "Moderate"),
            new Card(44, "Spades", "Six of Spades", 5, "The Six of Spades symbolizes a journey or transition.", "Moderate"),
            new Card(45, "Spades", "Seven of Spades", 6, "The Seven of Spades is associated with wisdom gained through hardship.", "High"),
            new Card(46, "Spades", "Eight of Spades", 7, "The Eight of Spades represents challenges and persistence.", "High"),
            new Card(47, "Spades", "Nine of Spades", 8, "The Nine of Spades implies near completion of a difficult journey.", "High"),
            new Card(48, "Spades", "Ten of Spades", 9, "The Ten of Spades is a card of endings and closure.", "Very High"),
            new Card(49, "Spades", "Jack of Spades", 10, "The Jack of Spades is clever and strategic.", "Special"),
            new Card(50, "Spades", "Queen of Spades", 11, "The Queen of Spades is known for her independence.", "Special"),
            new Card(51, "Spades", "King of Spades", 12, "The King of Spades represents authority and clarity.", "Special"),
            new Card(52, "Spades", "Ace of Spades", 13, "The Ace of Spades symbolizes transformation.", "Top")
        );
    }

    getData(): Card[] {
        return this.data;
    }
}
