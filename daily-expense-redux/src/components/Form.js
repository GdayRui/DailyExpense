import React from "react";
import { data } from "../data";

const { categories } = data;

const Form = () => (
  <form>
    <input type="date"></input>
    <input type="text" placeholder="Item name"></input>
    <input type="text" placeholder="Amount"></input>
    <select type="text">
      {categories.map((c) => (
        <option>{c.name}</option>
      ))}
    </select>
    <input type="text" placeholder="Some notes"></input>
    <input type="submit" value="Submit"></input>
  </form>
);

export default Form;
