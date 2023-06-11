import { Component } from '@angular/core';

@Component({
  selector: 'app-memory-game',
  templateUrl: './memory-game.component.html',
  styleUrls: ['./memory-game.component.scss']
})
export class MemoryGameComponent {
  cards = [
    { id: 1, value: 'A', flipped: false, matched: false },
    { id: 2, value: 'B', flipped: false, matched: false },
    { id: 3, value: 'C', flipped: false, matched: false },
    { id: 4, value: 'D', flipped: false, matched: false },
    { id: 5, value: 'E', flipped: false, matched: false },
    { id: 6, value: 'F', flipped: false, matched: false },
    { id: 7, value: 'G', flipped: false, matched: false },
    { id: 8, value: 'H', flipped: false, matched: false },
    { id: 9, value: 'I', flipped: false, matched: false },
    { id: 10, value: 'J', flipped: false, matched: false },
    { id: 11, value: 'A', flipped: false, matched: false },
    { id: 12, value: 'B', flipped: false, matched: false },
    { id: 13, value: 'C', flipped: false, matched: false },
    { id: 14, value: 'D', flipped: false, matched: false },
    { id: 15, value: 'E', flipped: false, matched: false },
    { id: 16, value: 'F', flipped: false, matched: false },
    { id: 17, value: 'G', flipped: false, matched: false },
    { id: 18, value: 'H', flipped: false, matched: false },
    { id: 19, value: 'I', flipped: false, matched: false },
    { id: 20, value: 'J', flipped: false, matched: false }
  ];
  

  flippedCards: any[] = [];
  matchedCount = 0;
  player =  Math.floor(Math.random() * 2) + 1

  player1pts = 0;
  player2pts = 0;

  flipCard(card: any) {
    console.log("card flipped");
    if (!card.flipped && this.flippedCards.length < 2) {
      card.flipped = true;
      this.flippedCards.push(card);

      if (this.flippedCards.length === 2) {
        setTimeout(() => {
          this.checkForMatch();
        }, 1000);
      }
    }
  }

  checkForMatch() {
    const card1 = this.flippedCards[0];
    const card2 = this.flippedCards[1];

    if (card1.value === card2.value) {
      console.log("correct match")
      card1.matched = true;
      card2.matched = true;
      this.matchedCount += 2;

      if(this.player == 1){
        this.player1pts+=1;
      }
      else{
        this.player2pts+=1;
      }
      

      if (this.matchedCount === this.cards.length) {
        alert('Congratulations! You have matched all the cards.');
      }
    } else {
      console.log("no match");
      card1.flipped = false;
      card2.flipped = false;
    }

    this.flippedCards = [];
    if(this.player == 1){
      this.player=2;
    }
    else{
      this.player=1;
    }
  }

  resetGame() {
    this.cards.forEach(card => {
      card.flipped = false;
      card.matched = false;
    });

    this.matchedCount = 0;
  }
}
