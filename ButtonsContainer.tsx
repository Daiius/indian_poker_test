
import React from "react"

interface Props {
  checkClicked: (e: React.MouseEvent<HTMLInputElement>)=>void;
}

export const ButtonsContainer = (props: Props) => {
  
  return (
    <div className="buttons">
      <input type="button" value="Check" onClick={props.checkClicked}/>
      <input type="button" value="Raise to {}"/>
      <input type="button" value="Fold"/>
    </div>
  )
}
