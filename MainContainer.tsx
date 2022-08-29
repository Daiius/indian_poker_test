
import React, { useState, useEffect } from "react"

import { PlayersData } from "./PlayersData"
import { ButtonsContainer } from "./ButtonsContainer"

import { Data, PokerEngine } from "./poker_engine"

export const MainContainer = () => {

  const [engine, _] = useState(new PokerEngine);
  const [data, setData] = useState(engine.getData());

  const onCheckClicked = () => {
    engine.advance();
    setData(engine.getData());
  }
  
  return (
    <div>
      <PlayersData data={data} />
      <ButtonsContainer checkClicked={onCheckClicked}/>
    </div>
  )
}

