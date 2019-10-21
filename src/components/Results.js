import React from "react";
import { useSelector } from "react-redux";

function Results() {
  const allResult = useSelector(state => state);
  const { angular, react, vue } = allResult;
  const totalVote = angular + react + vue;

  const voteAngularInPercent = () =>
    angular ? (angular / totalVote) * 100 : 0;
  const voteReactInPercent = () => (react ? (react / totalVote) * 100 : 0);
  const voteVueInPercent = () => (vue ? (vue / totalVote) * 100 : 0);

  const voteAngularInPercentStyle = () => ({
    width: voteAngularInPercent() + "%"
  });
  const voteReactInPercentStyle = () => ({
    width: voteReactInPercent() + "%"
  });
  const voteVueInPercentStyle = () => ({
    width: voteVueInPercent() + "%"
  });

  return (
    <div>
      <span className="p-3 mb-2 bg-danger text-white">
        Angular: {voteAngularInPercent().toFixed(2) + "%"}
      </span>
      <br />
      <br />
      <div className="progress">
        <div
          className="progress-bar progress-bar-striped bg-danger"
          style={voteAngularInPercentStyle()}
          aria-valuenow={voteAngularInPercent().toFixed(2)}
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <br />
      <span className="p-3 mb-2 bg-primary text-white">
        React: {voteReactInPercent().toFixed(2) + "%"}
      </span>
      <br />
      <br />
      <div className="progress">
        <div
          className="progress-bar progress-bar-striped bg-info"
          style={voteReactInPercentStyle()}
          aria-valuenow={voteReactInPercent().toFixed(2)}
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <br />
      <span className="p-3 mb-2 bg-success text-white">
        Vue: {voteVueInPercent().toFixed(2) + "%"}
      </span>
      <br />
      <br />
      <div className="progress">
        <div
          className="progress-bar progress-bar-striped bg-success"
          style={voteVueInPercentStyle()}
          aria-valuenow={voteVueInPercent().toFixed(2)}
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  );
}

export default Results;
