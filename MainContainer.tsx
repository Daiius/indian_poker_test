
import React, { useState, useEffect } from "react"

import { PlayersData } from "./PlayersData"
import { ButtonsContainer } from "./ButtonsContainer"

import { Data, PokerEngine } from "./poker_engine"

export const MainContainer = () => {

  const [engine, _] = useState(new PokerEngine);
  const [data, setData] = useState(engine.getData());
  const [turn, setTurn] = useState(engine.getData().turn);
  
  return (
    <div>
      <PlayersData data={data} />
      <ButtonsContainer checkClicked={()=>{
        engine.advance();
        setData(engine.getData());
        setTurn(engine.getData().turn);
        console.log(engine.getData());
      }}/>
      <div>{turn}</div>
    </div>
  )
}

