import React, { Component } from "react";
import {
  View,
  TouchableHighlight,
  Text,
  Image,
  TouchableWithoutFeedback
} from "react-native";
import IconIcecream from "../assets/icons/IconIcecream";
import IconArrowRight from "../assets/icons/IconArrowRight";

const greenPattern = require("../assets/images/pattern_celeste.jpg");
const basketImg = require("../assets/images/icon_icecream.svg");

class StartButton extends Component {
  render() {
    return (
      <TouchableWithoutFeedback
        style={{
          width: 200,
          height: 200,
          justifyContent: "center",
          alignItems: "center",
          borderWidth: 1
        }}
        onPress={this.props.onPress}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: 200,
            height: 270
          }}
        >
          <Image
            source={greenPattern}
            style={[styles.circleContainer, { position: "absolute" }]}
          />
          <View style={[styles.circleContainer, { position: "absolute" }]}>
            <Text style={styles.text}>Realizá tu</Text>
            <Text style={[styles.text, styles.textStrong]}> PEDIDO </Text>
            <IconIcecream fill={"white"} />
          </View>

          <View style={[styles.smallBtn, { position: "absolute", top: 190 }]}>
            <IconArrowRight fill="white" />
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  mainButton: {
    flex: 1
  },
  circleContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 200,
    height: 200,
    borderRadius: 100
  },
  text: {
    color: "white",
    fontSize: 24,
    fontFamily: "ubuntuLight"
  },
  textStrong: {
    fontWeight: "bold",
    fontFamily: "ubuntuBold"
  },
  smallBtn: {
    display: "flex",
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#bb4e55",
    alignItems: "center",
    justifyContent: "center",
    shadowOffset: { width: 10, height: 4 },
    shadowColor: "black",
    shadowOpacity: 0.15
  },
  smallBtnText: {
    color: "white",
    fontSize: 20
  }
};

export default StartButton;
