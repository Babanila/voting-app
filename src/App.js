import React from "react";
import { useDispatch } from "react-redux";
import { voteAngular, voteReact, voteVue } from "./actions";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  return (
    <div>
      <div className="container">
        <br />
        <h2>What is the best frontend framework in 2019</h2>
        <h4>Click the logo to vote</h4>
        <br />
        <div className="row col-md-auto">
          <div className="col-sm">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg"
              alt="angular-logo"
              height="96"
              onClick={() => dispatch(voteAngular())}
            />
          </div>
          <div className="col-sm">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
              alt="react-logo"
              height="96"
              onClick={() => dispatch(voteReact())}
            />
          </div>
          <div className="col-sm">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg"
              alt="vue-logo"
              height="75"
              onClick={() => dispatch(voteVue())}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
