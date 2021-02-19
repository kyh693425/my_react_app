import React from "react";
import PropTypes from "prop-types";

class App extends React.Component {
  state = {
    count: 0,
  };

  add = () => {
    this.setState((current) => ({ count: this.state.count + 1 }));
  };

  minus = () => {
    this.setState((current) => ({ count: this.state.count - 1 }));
  };
  // 업데이트가 있을 때
  componentDidUpdate() {
    console.log("did update");
  }
  // 마운트 될 때
  componentDidMount() {
    console.log("did mount");
  }

  render() {
    console.log("render");
    return (
      <div>
        <h1>The number is : {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
