import React from "react";
import { connect } from "react-redux";
import { ListItem } from "react-native-elements";
import Counter from "./Counter";
import PriceBadge from "./PriceBadge";
import colors from "../colors";
import { getAdditionalCount } from "../reducers";

const AdditionalItem = ({ name, unitPrice, amount, id, onAdd, onRemove }) => (
  <ListItem
    title={name}
    titleStyle={{ color: colors.PRIMARY_COLOR, fontFamily: "ubuntuMedium" }}
    // leftIcon={{ name: item.icon }}
    badge={{
      element: <PriceBadge text={`${unitPrice.toFixed(2)} c/u`} />
    }}
    rightIcon={
      <Counter
        value={amount}
        primary={true}
        onAddPress={onAdd}
        onRemovePress={onRemove}
      />
    }
  />
);

const mapStateToProps = (state, ownProps) => ({
  amount: getAdditionalCount(state, ownProps.id)
});
const mapDispatchToProps = (dispatch, ownProps) => ({
  onAdd: () => {
    dispatch({
      type: "ADD_ADDITIONAL",
      id: ownProps.id
    });
  },
  onRemove: () => {
    dispatch({
      type: "REMOVE_ADDITIONAL",
      id: ownProps.id
    });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AdditionalItem);
