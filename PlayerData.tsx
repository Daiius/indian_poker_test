
import React from "react"

interface Props {
  name: string;
  budget: number;
  hand: number;
  inTurn: boolean;
}

export const PlayerData = (props: Props) => {

  return (
    <div className={props.inTurn ? "playerData inturn" : "playerData"}>
      <div>{props.name}</div>
      <div>Budget: {props.budget}</div>
      <div>Hand: {props.hand}</div>
    </div>
  )
}
