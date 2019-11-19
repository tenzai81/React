import React from "react";
import { connect } from "react-redux";
import { increment as incrementAction } from "../redux/actions";

function IncrementButton({ increment }) {
  return (
    <button type="button" onClick={increment}>
      Increment
    </button>
  );
}
const mapDispatchtoProps = { increment: incrementAction };

export default connect(null, mapDispatchtoProps)(IncrementButton);
