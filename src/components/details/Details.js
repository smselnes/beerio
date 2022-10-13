import React from "react";
import CreateBeerDetails from "../beers/BeerDetails";
import { PageTitle } from "../layout/PageTitle";

export default function () {
  PageTitle("Beerio - Beer Details");
  return (
    <>
      <CreateBeerDetails />
    </>
  );
}
