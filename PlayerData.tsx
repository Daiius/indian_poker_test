
import React from "react"

interface Props {
  name: string;
  budget: number;
  hand: number;
  turn: number;
  index: number;
}

export const PlayerData = (props: Props) => {

  return (
    <div className={props.turn == props.index ? "playerData inturn" : "playerData"}>
      <div>{props.name}</div>
      <div>Budget: {props.budget}</div>
      <div>Hand: {props.hand}</div>
      <div> (index: {props.index})</div>
      <div> (turn: {props.turn}) </div>
    </div>
  )
}
