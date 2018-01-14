import React, { Component } from "react";
import { View, Button, StyleSheet, Image, Text } from "react-native";

import NavHeader from "../components/NavHeader";

class OrderList extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <NavHeader
          title={"Mis Pedidos"}
          onBackPress={() => this.props.navigation.goBack()}
        />
        <View style={styles.mainContainer} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#cb555d",
    marginTop: -1
  },
  ticketsContainer: {
    flexDirection: "row",
    flex: 1,
    marginBottom: 10
  }
});

export default OrderList;
