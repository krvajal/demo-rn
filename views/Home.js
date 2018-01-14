import React, { Component } from "react";
import { View, Button, StyleSheet, Image, Text } from "react-native";
import StartButton from "../components/StartButton";
import RibbonButton from "../components/RibbonButton";
import ClipedImage from "../components/ClipedImage";
import IconCart from "../assets/icons/IconCart";
import IconWallet from "../assets/icons/IconWallet";
import IconMail from "../assets/icons/IconMail";
import MamuschkaLogo from "../assets/icons/MamuschkaLogo";
import { Header, Icon } from "react-native-elements";

const bgImage = require("../assets/images/bg01.jpg");

class Home extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header
          backgroundColor={"#cb555d"}
          style={{ position: "absolute", top: 0, left: 0, right: 0, flex: 1 }}
          leftComponent={<MamuschkaLogo width={100} height={20} />}
          rightComponent={{ icon: "notifications", color: "#fff" }}
        />
        <View style={styles.mainContainer}>
          <Image source={bgImage} style={{ position: "absolute" }} />
          <View />

          <StartButton onPress={this.newOrder} />
          <View
            style={{
              margin: 10,
              flexDirection: "column",
              maxHeight: 140,
              flex: 1,
              alignSelf: "stretch",
              justifyContent: "space-between"
              // flexWrap: "wrap"
            }}
          >
            <View style={styles.ticketsContainer}>
              <RibbonButton
                title={"COMO ES EL SERVICIO?"}
                icon={<IconCart />}
              />
              <RibbonButton
                title={"MIS PEDIDOS"}
                icon={<IconWallet />}
                onPress={this.showOrders}
              />
            </View>
            <View style={{ flexDirection: "row", flex: 1 }}>
              <RibbonButton
                title={"CONTACTO"}
                icon={<IconMail />}
                iconBackgroundColor="#358177"
                textBackgroundColor="#4bb2a5"
                onPress={this.showContactInfo}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
  showOrders = evt => {
    this.props.navigation.navigate("OrderList");
  };
  showContactInfo = evt => {
    this.props.navigation.navigate("Contact");
  };
  newOrder = evt => {
    this.props.navigation.navigate("Order");
  };
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "lightblue",
    marginTop: -1
  },
  ticketsContainer: {
    flexDirection: "row",
    flex: 1,
    marginBottom: 10
  }
});

export default Home;
