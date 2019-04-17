import React, { Component } from "react";
import store, { ADD_ITEM_TO_LIST } from "../store";
import Item from "./Item";

export class List extends Component {
  constructor() {
    super();

    this.state = {
      todoItems: store.getState().todoItems
    };
  }

  componentDidMount() {
    store.subscribe(() => {
      this.setState({
        todoItems: store.getState().todoItems
      });
    });
  }

  render() {
    console.log(this.state.todoItems);
    return (
      <div>
        {this.state.todoItems.map(val => {
          return <Item text={val} />;
        })}
      </div>
    );
  }
}

export default List;
