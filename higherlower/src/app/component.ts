import { Component } from '@angular/core';
import { SimpleDataSource } from './datasource.model';
import { Card } from './card.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'higherlower';
  description = 'This is a sample card description that should be displayed!';
  cards: Card[];
  searchTerm: string = '';
  sortType: string = 'rank'; 
  selectedCard: Card | null = null; 

  constructor() {
    const dataSource = new SimpleDataSource();
    this.cards = dataSource.getData();
  }

  
  filteredCards(): Card[] {
    let filtered = this.cards.filter(card => 
      card.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      card.suit.toLowerCase().includes(this.searchTerm.toLowerCase())
    );

    
    return this.sortType === 'rank' 
      ? filtered.sort((a, b) => a.rank - b.rank)
      : filtered.sort((a, b) => a.suit.localeCompare(b.suit));
  }

  
  sortCards(type: string) {
    this.sortType = type;
  }

  
  showCardDetails(card: Card) {
    this.selectedCard = card;
  }

  
  closeDialog() {
    this.selectedCard = null;
  }
}
