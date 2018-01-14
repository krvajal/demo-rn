import React, { Component } from "react";
import { View } from "react-native";

class WithDimension extends Component {
  state = {
    width: undefined,
    height: undefined,
    layoutDefined: false
  };
  onLayout = event => {
    var { x, y, width, height } = event.nativeEvent.layout;
    console.log({ width, height });
    this.setState({ width, height, layoutDefined: true });
  };
  render() {
    const { children } = this.props;
    const { width, height, layoutDefined } = this.state;
    return (
      <View onLayout={this.onLayout} {...this.props}>
        {layoutDefined && children(width, height)}
      </View>
    );
  }
}
export default WithDimension;
