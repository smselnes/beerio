import { useState, useEffect } from "react";
import { json } from "react-router-dom";
import { beersApi } from "../../constants/api";
import { Link } from "react-router-dom";
import BeerItem from "./BeerItem";

function BeerList() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [beers, setBeers] = useState([]);

  useEffect(function () {
    async function grabSomeBeers() {
      try {
        const response = await fetch(beersApi);
        if (response.ok) {
          const json = await response.json();
          console.log(json);
          setBeers(json);
        } else {
          setError("Error occured");
        }
      } catch (error) {
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    }
    grabSomeBeers();
  }, []);

  if (loading) {
    return <p>loading...</p>;
  }

  if (error) {
    return <p>Error: {json.error}</p>;
  }

  return (
    <>
      {beers.map(function (beer) {
        console.log(beer);
        const { id, name, food_pairing } = beer;
        return (
          <BeerItem key={id} id={id} name={name} food_pairing={food_pairing} />
        );
        {
          /* <div key={beer.id}>
            <h3>{beer.name}</h3>
            <p>{beer.tagline}</p>
          </div> */
        }
      })}
    </>
  );
}
export default BeerList;
