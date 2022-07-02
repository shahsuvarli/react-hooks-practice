import React, { Component } from "react";

export default class Test extends Component {
  constructor() {
    super();
    this.state = {
      value: 0,
    };
  }
  componentWillMount() {
    console.log("test - component will mount");
  }

  componentDidMount() {
    console.log("test - comp did mount");
    // this.setState({ value: 5 });
  }

  componentDidUpdate() {
    console.log("test - comp did update");
  }

  render() {
    console.log("test - render yaradildi");
    console.log("test - ", this.state.value);
    return <div>Test value: {this.state.value} </div>;
    // return <div>Test count :{this.props.count}</div>;
  }
}
