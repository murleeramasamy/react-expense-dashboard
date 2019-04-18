import React, { Component } from "react";
import "./App.css";
import TotalExpenses from "./component/TotalExpenses";
import InputBoard from "./component/InputBoard";
import DashBoard from "./component/DashBoard";
import MessageBoard from "./component/MessageBoard";

class App extends Component {
  state = {
    total: 100,
    messages: [
      {
        text: "Any information will appear here",
        type: "info"
      }
    ],
    members: [{ name: "Murali", amount: 100 }]
  };

  handleReset = () => {
    const state = {
      total: 0,
      messages: [
        {
          text: "All values have been reset!",
          type: "warning"
        }
      ],
      members: this.state.members.map(member => {
        return { name: member.name, amount: 0 };
      })
    };

    this.setState(state);
  };

  deleteMembers = name => {
    const state = { ...this.state };
    state.members = state.members.filter(member => member.name !== name);
    state.messages.unshift({
      text: `${name} deleted!`,
      type: "warning"
    });

    this.setState(state);
  };

  addMember = name => {
    const state = { ...this.state };
    const index = this.state.members.findIndex(member => member.name === name);
    if (index === -1) {
      state.members.push({ name: name, amount: 0 });
      state.messages.unshift({
        text: `Added ${name} as new member!`,
        type: "warning"
      });
    }

    this.setState(state);
  };

  addExpense = (amount, memberName) => {
    const state = { ...this.state };
    let messages = [];

    state.total += parseInt(amount, 10);
    messages.unshift({
      text: `Updated total to: $${state.total}`,
      type: "info"
    });

    const splitAmount = parseFloat(
      (amount / state.members.length).toFixed(2),
      10
    );
    state.members = state.members.map(member => {
      if (member.name === memberName) {
        let newAmt = splitAmount * (state.members.length - 1);
        member.amount += newAmt;
        messages.unshift({
          text: `${member.name} gets back $${newAmt}`,
          type: "info"
        });
      } else {
        member.amount -= splitAmount;
        messages.unshift({
          text: `${member.name} needs to pay $${splitAmount} to ${memberName}`,
          type: "info"
        });
      }
      return member;
    });

    state.messages = messages;
    this.setState(state);
  };

  notify = (message, type) => {
    const state = { ...this.state };
    state.message.text = message;
    state.message.type = type;

    this.setState(state);
  };

  render() {
    return (
      <div style={{ marginLeft: 20, width: 512 }}>
        <h1 style={{ textAlign: "center" }}>Group Bill</h1>
        <TotalExpenses
          total={this.state.total}
          handleReset={this.handleReset}
        />
        <InputBoard
          addMember={this.addMember}
          addExpense={this.addExpense}
          members={this.state.members}
        />
        <DashBoard
          members={this.state.members}
          deleteMember={this.deleteMembers}
        />
        <MessageBoard messages={this.state.messages} />
      </div>
    );
  }
}

export default App;
