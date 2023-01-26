class MemoryGame {
  constructor(cards, pickedCards, pairsClicked, pairsGuessed) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0; 
    this.pairsGuessed = 0;
    }

  shuffleCards(array) {

    if (!this.cards){
      return undefined;
    }

    const shuffleArray = [];

    this.cards.forEach(card => {
    let shuffle = this.cards[Math.floor(Math.random() * (this.cards.length))];
    shuffleArray += shuffle;
    });

    //this.cards += shuffleArray
    console.log(shuffleArray)
    return shuffleArray;
  }

  checkIfPair(nameCard1, nameCard2) {
    
  }

  checkIfFinished() {
    // ... write your code here
  }
}
