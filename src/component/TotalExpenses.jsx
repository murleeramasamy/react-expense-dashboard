import React from "react";

const TotalExpenses = ({ total, handleReset }) => {
  return (
    <div style={{ marginBottom: 30 }}>
      <span style={{ fontSize: 25, verticalAlign: "middle" }}>
        Total Expenses so far: ${total}
      </span>
      <button
        style={{
          verticalAlign: "middle",
          marginLeft: 20,
          fontWeight: "bold",
          float: "right"
        }}
        className="btn btn-danger btn-sm"
        onClick={handleReset}
      >
        Reset
      </button>
    </div>
  );
};

export default TotalExpenses;
