import React, { Component } from "react";
import { View, Button, StyleSheet, Image, Text } from "react-native";
import { Icon } from "react-native-elements";
import NavHeader from "../components/NavHeader";
import WithDimension from "../components/WithDimension";

class Contact extends Component {
  constructor() {
    super();
  }
  styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      justifyContent: "space-between",
      backgroundColor: "peru",
      marginTop: -1
    },
    card: {
      margin: 10,
      padding: 10,
      flex: 1,
      alignItems: "center",
      backgroundColor: "white",
      borderRadius: 4
    },
    contactItem: {
      alignSelf: "stretch",
      flexWrap: "wrap",
      flexDirection: "row",
      borderBottomWidth: 1,
      borderColor: "#c3c3c3",
      alignItems: "center",
      padding: 4,
      marginBottom: 10
    },
    contactItemIcon: {
      width: 60
      //   borderWidth: 2
    }
  });
  render() {
    const { styles } = this;
    return (
      <View style={{ flex: 1 }}>
        <NavHeader
          title={"Contacto"}
          onBackPress={() => this.props.navigation.goBack()}
        />
        <View style={styles.mainContainer}>
          <View style={styles.card}>
            <Image
              source={require("../assets/images/icon.png")}
              style={{
                width: 300,
                height: 300,
                padding: 10,
                alignSelf: "center"
              }}
            />
            <Text style={{ margin: 10 }}>Version 2.0.0</Text>
            <View style={{ flex: 1, alignSelf: "stretch" }}>
              <View style={styles.contactItem}>
                <View style={styles.contactItemIcon}>
                  <Icon name="business" />
                </View>
                <Text>Mitr 216, San Carlos de Bariloche</Text>
              </View>
              <View style={styles.contactItem}>
                <View style={styles.contactItemIcon}>
                  <Icon name="business" />
                </View>
                <Text>Mitr 216, San Carlos de Bariloche</Text>
              </View>
              <View style={styles.contactItem}>
                <View style={styles.contactItemIcon}>
                  <Icon name="phone" />
                </View>
                <Text>Mitr 216, San Carlos de Bariloche</Text>
              </View>
              <View style={styles.contactItem}>
                <View style={styles.contactItemIcon}>
                  <Icon name="mail" />
                </View>
                <Text>Mitr 216, San Carlos de Bariloche</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default Contact;
