import { StackNavigator } from "react-navigation";
import ProductsSelection from "./ProductsSelection";

const OrderRouteStack = StackNavigator(
  {
    ProductsSelection: {
      screen: ProductsSelection
    }
  },
  {
    initialRouteName: "ProductsSelection",
    headerMode: "none"
  }
);
export default OrderRouteStack;
