import React from "react";
import Header from "./Header.js";
import renderer from "react-test-renderer";

test('renders Header.js correctly', () => {
  const tree = renderer
    .create(<Header />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});