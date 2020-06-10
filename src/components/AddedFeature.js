import React from "react";
import { connect } from "react-redux";

const AddedFeature = props => {
  const handleClick = () => {
    this.setState({
      // props.name, props.price?
    });
  };

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={handleClick}>
        X
      </button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = state => {
  return {
    name: state.name
  };
};

export default connect(mapStateToProps, {})(AddedFeature);
