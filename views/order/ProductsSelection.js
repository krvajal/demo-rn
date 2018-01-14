import React, { Component } from "react";
import { View, StyleSheet, Image, Text, ScrollView } from "react-native";
import NavHeader from "../../components/NavHeader";
import IcecreamBasket from "../../components/IcecreamBasket";
import WithDimension from "../../components/WithDimension";
import Counter from "../../components/Counter";
import AdditionalsList from "../../components/AdditionalsList";
import { fetchProducts } from "../../api";
import products from "../../reducers/products";
import ResumeBar from "../../components/ResumeBar";

class ProductsSelection extends Component {
  state = {
    productsLoaded: false
  };
  componentDidMount() {
    fetchProducts().then(products => {
      this.setState({ productsLoaded: true, products });
    });
  }
  render() {
    const { navigation } = this.props;
    const { productsLoaded, products } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <NavHeader title="Order" onBackPress={() => navigation.goBack(null)} />

        <View style={styles.mainContainer}>
          <View style={{ padding: 10 }}>
            <WithDimension
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
              }}
            >
              {(width, height) => (
                <Image
                  source={require("../../assets/images/pattern_celeste.jpg")}
                  style={{
                    width,
                    height
                  }}
                  resizeMode="cover"
                />
              )}
            </WithDimension>
            <Text style={styles.headerText}> Armá tu pedido </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                backgroundColor: "#55baad",
                borderRadius: 10,
                padding: 10
              }}
            >
              <IcecreamBasket
                size={"1000"}
                price={300.0}
                style={{ borderRightWidth: 1, borderColor: "#3b897f" }}
              />
              <IcecreamBasket
                size={"500"}
                price={300.0}
                style={{ borderRightWidth: 1, borderColor: "#3b897f" }}
              />
              <IcecreamBasket size={"250"} price={300.0} />
            </View>
            {/* <Counter value={0} /> */}
            {/* <Counter value={0} /> */}
          </View>
          {productsLoaded && <AdditionalsList items={products} />}
        </View>
        <ResumeBar
          style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    backgroundColor: "white",
    marginTop: -1
  },
  headerText: {
    backgroundColor: "transparent",
    fontSize: 20,
    color: "white",
    marginTop: 10,
    marginBottom: 10
  }
});

export default ProductsSelection;
