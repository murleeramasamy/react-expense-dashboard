import React from "react";

const InputBoard = ({ addMember, addExpense, members }) => {
  return (
    <div style={{ borderStyle: "solid", width: 512 }}>
      <form style={{ padding: 10, paddingBottom: 20 }}>
        <fieldset>
          <legend>Add a new member</legend>
          <input
            id="add-member"
            type="text"
            placeholder="Enter new member's name"
            style={{
              verticalAlign: "middle",
              width: 300,
              marginRight: 20
            }}
          />
          <button
            className="btn btn-primary btn-sm"
            onClick={event => {
              event.preventDefault();
              const memberElm = document.getElementById("add-member");
              addMember(memberElm.value);
              memberElm.value = "";
            }}
            style={{ fontWeight: "bold" }}
          >
            Add Member
          </button>
        </fieldset>
      </form>
      <form style={{ padding: 10, paddingBottom: 20 }}>
        <fieldset>
          <legend>Add a new expense</legend>
          <span style={{ marginRight: 10, display: "block", marginBottom: 5 }}>
            Select the payee
          </span>
          <select
            id="selected-user"
            style={{ display: "block", marginBlockEnd: 20 }}
          >
            {members.map(member => (
              <option key={member.name}>{member.name}</option>
            ))}
          </select>
          <input
            style={{
              width: 300,
              marginRight: 20,
              display: "block",
              float: "left"
            }}
            id="add-expense"
            type="text"
            placeholder="Enter new expense"
          />
          <button
            className="btn btn-primary btn-sm"
            style={{ float: "left", display: "block", fontWeight: "bold" }}
            onClick={event => {
              event.preventDefault();
              const expenseElm = document.getElementById("add-expense");
              addExpense(
                expenseElm.value,
                document.getElementById("selected-user").value
              );
              expenseElm.value = "";
            }}
          >
            Split expense equally
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default InputBoard;
