import React from "react";
import { View, StyleSheet, Text } from "react-native";
import colors from "../colors";

const PriceBadge = ({ secondary, text }) => {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: secondary
            ? colors.SECONDARY_COLOR
            : colors.PRIMARY_COLOR
        }
      ]}
    >
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default PriceBadge;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 30,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    padding: 4,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "#42a195",
    minWidth: 50,
    marginRight: 10,
    opacity: 0.4
  },
  text: {
    color: "white",
    fontSize: 14
  }
});
