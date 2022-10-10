import React from "react";
import BeerList from "../beers/BeerList";
import Introduction from "../layout/Introduction";

export default function Home() {
  return (
    <>
      <Introduction title="Hello there" />
      <BeerList />
    </>
  );
}
