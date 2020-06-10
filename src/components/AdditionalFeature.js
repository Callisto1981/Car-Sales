import React from "react";
import { connect } from "react-redux";
const AdditionalFeature = props => {
  const handleClick = () => {
    this.setState({
      // props.name, props.price?
    });
  };
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={handleClick}>
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = state => {
  return {
    name: state.name,
    price: state.price
  };
};

export default connect(mapStateToProps, {})(AdditionalFeature);
