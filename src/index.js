import React from "react";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App/App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// const http = require("http");
// const server = http.createServer((req, res) => {
//   console.log(req.url);
//   console.log(req.method);
//   console.log(req.headers);
//   console.log(req.body);
//   res.write();
//   res.end( , 'utf8')
// });
// server.listen(3000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
