//
// Indian poker engine
//

export interface PlayerParams {
  budget: number;
  hand: number;
};

export interface Data { 
  players : { [name: string]: PlayerParams };
  turn : number;
};


export class PokerEngine {
  private data: Data;
  
  constructor() {
    this.data = {
      players: {
        "Alice": {budget: 100, hand: 1},
        "Bob"  : {budget: 100, hand: 2},
        "Candy": {budget: 100, hand: 3},
      },
      turn: 0
    }
  }

  advance = () => {
    this.data.turn = ((this.data.turn+1) % Object.keys(this.data.players).length);
  }

  getData = (): Data => {
    return {...this.data };
  }
}
