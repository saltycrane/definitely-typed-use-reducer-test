import React, { useReducer } from "react";

type State = {
  age: number;
  name: string;
};

const reducer = (state: State, action: any) => {
  return state;
};

const Home = () => {
  useReducer(reducer, { age: 10, name: "Phil" });
  return <div>Home</div>;
};

export default Home;
