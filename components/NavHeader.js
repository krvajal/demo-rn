import React from "react";
import MamuschkaLogo from "../assets/icons/MamuschkaLogo";
import { Text, View, TouchableWithoutFeedback } from "react-native";
import { Header, Icon } from "react-native-elements";

const NavHeader = ({ title, onBackPress }) => (
  <Header
    backgroundColor={"#cb555d"}
    style={{ position: "absolute", top: 0, left: 0, right: 0, flex: 1 }}
    leftComponent={
      <TouchableWithoutFeedback onPress={onBackPress}>
        <View
          style={{ flexDirection: "row", alignItems: "baseline", height: 20 }}
        >
          <Icon name="arrow-left" type="feather" color="#fff" />
          <Text
            style={{
              fontFamily: "ubuntuBold",
              color: "#fff",
              marginLeft: 20,
              fontSize: 20
            }}
          >
            {title}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    }
    rightComponent={<MamuschkaLogo width={100} height={20} />}
  />
);

export default NavHeader;
