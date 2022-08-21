//
// Indian poker engine
//

export interface PlayerParams {
  budget: number;
  hand: number;
}

export class PokerEngine {
  players: { [name: string]: PlayerParams };

  private turn: number;
  
  constructor() {
    this.players = {
      "Alice": {budget: 100, hand: 1},
      "Bob"  : {budget: 100, hand: 2},
      "Candy": {budget: 100, hand: 3},
    }

    this.turn = 0;
  }

  advance = () => {
    this.turn = ((this.turn+1) % Object.keys(this.players).length);
  }

  getTurn = () => {
    return this.turn;
  }
}
