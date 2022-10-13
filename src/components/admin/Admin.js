import React from "react";
import Introduction from "../layout/Introduction";
import { PageTitle } from "../layout/PageTitle";

export default function Admin() {
  PageTitle("Beerio - Admin Page");
  return (
    <>
      <Introduction title="Welcome, @ user" />
      <div className="adminContent">
        <p>In the future there will be more content on this page. </p>
        <p>Possibly a feature to add, edit and remove beers.</p>
      </div>
    </>
  );
}
