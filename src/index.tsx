import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import * as _ from 'lodash'


// const root = ReactDOM.createRoot(
//   document.getElementById("root") as HTMLElement
// );
// root.hydrate(
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
// );

ReactDOM.hydrate(
      <Router>
        <App />
      </Router>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
