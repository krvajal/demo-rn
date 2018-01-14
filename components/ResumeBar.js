import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import colors from "../colors";
import WithDimension from "./WithDimension";
import ClipedImage from "./ClipedImage";
import { connect } from "react-redux";
import { getTotalAmount } from "../reducers";

const ResumeBar = ({ totalAmount, style }) => (
  <View style={[style, styles.mainContainer]}>
    <WithDimension
      style={[style, { borderColor: "red", padding: 0, marginBottom: -5 }]}
    >
      {(width, height) => (
        <ClipedImage width={width} height={70} color={"#41a095"} />
      )}
    </WithDimension>
    <View style={styles.infoContainer}>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.text}>Total:</Text>
        <Text style={styles.totalAmountText}>{totalAmount.toFixed(2)}</Text>
      </View>
      <Text style={[styles.text, { fontSize: 14 }]}>Delivery:</Text>
    </View>

    <Icon
      style={{ flex: 1 }}
      name="keyboard-arrow-right"
      raised
      reverse
      color="#41a095"
    />
  </View>
);
const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    height: 70,
    alignItems: "center"
  },
  infoContainer: {
    margin: 10,
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between"
  },
  text: {
    color: "white",
    backgroundColor: "transparent",
    fontFamily: "ubuntuMedium",
    fontSize: 18
  },
  totalAmountText: {
    color: "#81d8d0",
    fontSize: 20,
    fontFamily: "ubuntuBold",
    marginLeft: 10,
    backgroundColor: "transparent"
  }
});

const mapStateToProps = state => ({
  totalAmount: getTotalAmount(state)
});
export default connect(mapStateToProps)(ResumeBar);
