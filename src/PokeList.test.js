import React from "react";
import PokeList from "./PokeList.js";
import renderer from "react-test-renderer";

test('renders PokeList.js correctly', () => {
  const tree = renderer
    .create(<PokeList />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});