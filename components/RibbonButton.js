import React, { cloneElement } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Vibration,
  TouchableWithoutFeedback
} from "react-native";
import ClipedImage from "./ClipedImage";
import WithDimension from "./WithDimension";

const greenPattern = require("../assets/images/pattern_celeste.jpg");

const RibbonButton = ({
  icon,
  iconBackgroundColor,
  textBackgroundColor,
  onPress,
  ...props
}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress} style={styles.container}>
      <View style={styles.container}>
        <WithDimension style={styles.iconContainer}>
          {(width, height) => (
            <View height={60}>
              <ClipedImage
                image={greenPattern}
                width={width}
                height={60}
                color={iconBackgroundColor || "#a64046"}
                //   }
              />
              <View
                style={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  top: 0,
                  bottom: 0,
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 10
                }}
              >
                {cloneElement(icon, {
                  ...icon.props,
                  width: 25,
                  height: 25,
                  fill: "white"
                })}
              </View>
            </View>
          )}
        </WithDimension>
        <View style={styles.textContainer}>
          <View style={styles.textContainer}>
            <WithDimension style={{ flex: 1 }}>
              {(width, height) => (
                <ClipedImage
                  image={greenPattern}
                  width={width}
                  height={60}
                  color={textBackgroundColor || "#bb4e55"}
                  //   style={{ position: "absolute" }}
                />
              )}
            </WithDimension>
            <View
              style={[
                styles.textContainer,
                { position: "absolute", left: 0, right: 0 }
              ]}
            >
              <Text style={[styles.text]}>{props.title}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 80,
    flexDirection: "row",
    padding: 2,
    flex: 1
  },
  iconContainer: {
    marginRight: 4,
    width: 50
  },
  textContainer: {
    // padding: 14,
    height: 60,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
  },
  text: {
    // position: "absolute",
    color: "white",
    fontFamily: "ubuntuLight",
    flexWrap: "wrap",
    flex: 1,
    textAlign: "center",
    backgroundColor: "rgba(0,0,0,0)"
  }
});

export default RibbonButton;
