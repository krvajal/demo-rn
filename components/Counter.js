import React from "react";
import { View, T, Text, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import colors from "../colors";

const Counter = ({ value, secondary, onAddPress, onRemovePress }) => (
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
    <Icon name="remove-circle" color="#fff" onPress={onRemovePress} />
    <Text style={styles.valueText}>{value} </Text>
    <Icon name="add-circle" color="#fff" onPress={onAddPress} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 30,
    borderRadius: 14,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 4,
    backgroundColor: "#42a195"
  },
  valueText: {
    marginLeft: 5,
    marginRight: 5,
    color: "white"
  }
});

export default Counter;
