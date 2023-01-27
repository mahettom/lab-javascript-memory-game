class MemoryGame {
  constructor(cards, pickedCards, pairsClicked, pairsGuessed) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards(array) {

    if (!this.cards) {
      return undefined;
    }

    let shuffleArray = [];

    this.cards.forEach((card, i) => {

      const randomI = Math.floor(Math.random() * (this.cards.length));

      this.cards[i] = this.cards[randomI];
      shuffleArray += this.cards[i]

      // => the code below was working but i try to do it in a way i will understand a little more :D 
      // console.log(shuffle)
      // this.cards[i] = this.cards[randomI];
      // this.cards[randomI] = shuffle

    });

    //this.cards += shuffleArray

    // return shuffleArray;
  }

  checkIfPair(nameCard1, nameCard2) {

    
    this.pairsClicked += 1;

    if (nameCard1 === nameCard2) {
      this.pairsGuessed += 1;
      return true;
    }

    else { return false }
  }


  // when i check |||| if (this.pairsGuessed === this.cards.length / 2)  return true \\\\ it doesn't work dont know why
  checkIfFinished() {
    if (this.pairsGuessed !== this.cards.length / 2) {
      return false;
    }
    else { return true; }
  }
}


