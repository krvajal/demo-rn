import React from "react";
import { List } from "react-native-elements";
import { ScrollView } from "react-native";
import AdditionalItem from "./AdditionalItem";

const AdditionalsList = ({ items }) => (
  <ScrollView>
    <List>
      {items.map(item => (
        <AdditionalItem
          key={item.id}
          name={item.name}
          id={item.id}
          unitPrice={item.unit_price}
        />
      ))}
    </List>
  </ScrollView>
);

export default AdditionalsList;
