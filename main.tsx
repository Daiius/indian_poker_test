
import * as React from "react"
import { createRoot } from "react-dom/client"

import { MainContainer } from "./MainContainer"
import { PokerEngine } from "./poker_engine"

const container = document.getElementById('root')
const root = createRoot(container!)
root.render(<MainContainer />)

