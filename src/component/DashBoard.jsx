import React from "react";

const DashBoard = ({ members, deleteMember }) => {
  return (
    <div
      style={{ borderStyle: "solid", width: 512, marginTop: 20, height: 215 }}
    >
      {members.map(member => (
        <div style={{ margin: 10 }} key={member.name}>
          <button
            style={{ marginRight: 10 }}
            className="btn btn-danger btn-sm"
            onClick={() => {
              deleteMember(member.name);
            }}
          >
            Delete
          </button>
          <span style={{ fontWeight: "bold" }}>
            {member.name}: $ {member.amount}
          </span>
        </div>
      ))}
    </div>
  );
};

export default DashBoard;
