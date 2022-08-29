
import React from "react"

import { PlayerData } from "./PlayerData"

import { Data } from "./poker_engine"

interface Props {
  data: Data
}

export const PlayersData = (props: Props) => {

  var data = props.data;

  return (
    <div>
      {Object.keys(data.players).map((name, i) =>
        <PlayerData name   ={name}
                    budget ={data.players[name].budget}
                    hand   ={data.players[name].hand}
                    key    ={name}
                    inTurn ={data.turn == i}
          />
      )}
    </div>
  );
}
