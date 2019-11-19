import React from "react";
import { connect } from "react-redux";
import { reset } from "../redux/actions";

function ResetButton({ reset }) {
  return (
    <button type="submit" onClick={reset}>
      Reset
    </button>
  );
}

const mapDispatchToProps = { reset };

export default connect(null, mapDispatchToProps)(ResetButton);
