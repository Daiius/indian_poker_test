
import React from "react"

import { PlayerData } from "./PlayerData"

import { Data } from "./poker_engine"

interface Props {
  data: Data
}

export const PlayersData = (props: Props) => {
  return (
    <div>
      {Object.keys(props.data.players).map((name, i) =>
        <PlayerData name   ={name}
                    budget ={props.data.players[name].budget}
                    hand   ={props.data.players[name].hand}
                    key    ={name}
                    turn ={props.data.turn}
                    index={i}
          />
      )}
    </div>
  );
}
