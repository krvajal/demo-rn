import React from "react";
import {
  View,
  TouchableHighlight,
  Text,
  StyleSheet,
  Image
} from "react-native";
import Counter from "./Counter";

import { connect } from "react-redux";

const BUCKET_SIZE = {
  "1000": 90,
  "500": 70,
  "250": 60
};

const IcecreamBasket = ({ size, value, price, onAdd, onRemove, ...props }) => (
  <View style={[styles.container, props.style]}>
    <View style={[styles.basketContainer]}>
      <Image
        source={require("../assets/images/ic_weight_bg.png")}
        style={{
          width: BUCKET_SIZE[size],
          height: BUCKET_SIZE[size]
        }}
        resizeMode="contain"
      />
      <Text
        style={[
          styles.basketText,
          { position: "absolute", bottom: BUCKET_SIZE[size] / 4 }
        ]}
      >
        1 kg
      </Text>
    </View>
    <Counter
      value={value}
      secondary={true}
      onAddPress={onAdd}
      onRemovePress={onRemove}
    />
    <Text style={styles.bottomText}>
      {value} x {price.toFixed(2)}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 5,
    margin: 2
  },
  button: {
    height: 20,
    width: 20,
    borderRadius: 10,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center"
  },
  basketText: {
    marginLeft: 10,
    marginRight: 10,
    color: "white",
    textAlign: "center",
    fontSize: 18,
    backgroundColor: "transparent"
  },
  basketContainer: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "flex-end",
    margin: 10,
    height: 80,
    width: 80
  },
  bottomText: {
    textAlign: "center",
    color: "#3b897f",
    fontSize: 16,
    marginTop: 10
  }
});

const mapStateToProps = (state, { size }) => ({
  value: state.order.icecreams[size].length
});
const mapDispatchToProps = (dispatch, ownProps) => ({
  onAdd: () => {
    dispatch({
      type: "ADD_ICECREAM",
      size: ownProps.size
    });
  },
  onRemove: () => {
    dispatch({
      type: "REMOVE_ICECREAM",
      size: ownProps.size
    });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(IcecreamBasket);
