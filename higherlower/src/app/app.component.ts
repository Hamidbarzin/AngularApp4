import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Card } from './card.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'higherlower';
  description = 'Card Management';
  cards: Card[] = [];
  searchTerm: string = '';
  sortType: string = 'rank';
  selectedCard: Card | null = null;
  showForm: boolean = false;
  newCard: Card = { id: 0, suit: '', name: '', rank: 0, history: '', value: '' };
  isEditMode: boolean = false;
  isLoading: boolean = false;
  baseUrl = 'http://localhost/card_management';

  constructor(private http: HttpClient) {
    this.loadCards();
  }

  private getHeaders() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }

  loadCards() {
    this.isLoading = true;
    this.http.get<Card[]>(`${this.baseUrl}/get_cards.php`)
      .subscribe({
        next: (data) => {
          this.cards = data;
          console.log('Loaded cards:', this.cards);
        },
        error: (error) => {
          console.error('Error loading cards:', error);
          alert('Error loading cards');
        },
        complete: () => {
          this.isLoading = false;
        }
      });
  }

  saveCard() {
    if (!this.validateCard()) {
        alert('Please fill in all required fields');
        return;
    }

    const url = `${this.baseUrl}/${this.isEditMode ? 'edit_card.php' : 'add_card.php'}`;
    const cardData = {
        ...this.newCard,
        id: this.isEditMode ? this.newCard.id : undefined
    };

    console.log('Sending data to server:', cardData);

    this.isLoading = true;
    this.http.post<any>(url, cardData, this.getHeaders())
        .subscribe({
            next: (response) => {
                console.log('Server response:', response);
                if (response.status === 'success') {
                    if (this.isEditMode) {
                        const index = this.cards.findIndex(card => card.id === this.newCard.id);
                        if (index !== -1) {
                            this.cards[index] = { ...this.newCard };
                        }
                        alert('Card successfully updated');
                    } else {
                        this.cards.push({ ...this.newCard });
                        alert('Card successfully added');
                    }
                    this.loadCards();
                    this.closeForm();
                } else {
                    alert('Error: ' + (response.message || 'Operation failed'));
                }
            },
            error: (error) => {
                console.error('Error saving card:', error);
                alert('Error in ' + (this.isEditMode ? 'editing' : 'saving') + ' card');
            },
            complete: () => {
                this.isLoading = false;
            }
        });
  }

  deleteCard(cardId: number) {
    if (!confirm('Are you sure you want to delete this card?')) {
      return;
    }

    this.isLoading = true;
    this.http.post<any>(`${this.baseUrl}/delete_card.php`, 
      JSON.stringify({ id: cardId }),
      this.getHeaders()
    ).subscribe({
      next: (response) => {
        if (response.status === 'success') {
          this.cards = this.cards.filter(card => card.id !== cardId);
          alert('Card successfully deleted');
        } else {
          alert('Error: ' + (response.message || 'Failed to delete card'));
        }
      },
      error: (error) => {
        console.error('Error deleting card:', error);
        alert('Error deleting card');
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }

  private validateCard(): boolean {
    return !!(this.newCard.name && this.newCard.suit && this.newCard.rank > 0);
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

  editCard(card: Card) {
    console.log('Editing card:', card);
    this.newCard = { ...card };
    this.showForm = true;
    this.isEditMode = true;
  }

  showAddCardForm() {
    this.showForm = true;
    this.isEditMode = false;
    this.newCard = { id: 0, suit: '', name: '', rank: 0, history: '', value: '' };
  }

  closeForm() {
    this.showForm = false;
    this.isEditMode = false;
    this.newCard = { id: 0, suit: '', name: '', rank: 0, history: '', value: '' };
  }

  private logRequest(data: any) {
    const logData = JSON.stringify(data);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.http.post<any>(`${this.baseUrl}/log_request.php`, logData, { headers })
      .subscribe({
        next: (response) => {
          console.log('Request logged:', response);
        },
        error: (error) => {
          console.error('Error logging request:', error);
        }
      });
  }
}
