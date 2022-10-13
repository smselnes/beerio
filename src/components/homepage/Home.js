import React from "react";
import BeerList from "../beers/BeerList";
import Introduction from "../layout/Introduction";
import { PageTitle } from "../layout/PageTitle";

export default function Home() {
  PageTitle("Beerio - Home");
  return (
    <>
      <Introduction title="Welcome - Feel free to check out our beers" />
      <div className="beerList">
        <BeerList />
      </div>
    </>
  );
}
