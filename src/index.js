import React from "react"
import ReactDOM from "react-dom"
import App from "../src/components/App"
import registerServiceWorker from "./registerServiceWorker"
import store from "./store/"
import { Provider } from "react-redux"
import "./assets/global.css"
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)
registerServiceWorker()
