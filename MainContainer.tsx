
import React, { useState, useEffect } from "react"

import { PlayerData } from "./PlayerData"
import { ButtonsContainer } from "./ButtonsContainer"

import { PokerEngine } from "./poker_engine"

export const MainContainer = () => {

  const [engine, _] = useState(new PokerEngine);

  return (
    <div>
      {Object.keys(engine.players).map((name, i) =>
        <PlayerData name   ={name}
                    budget ={engine.players[name].budget}
                    hand   ={engine.players[name].hand}
                    key    ={name}
                    inTurn ={i == engine.getTurn()}
          />
      )}
      <ButtonsContainer checkClicked={engine.advance}/>
    </div>
  )
}

