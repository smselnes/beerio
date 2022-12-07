import { useState, useEffect } from "react";
import { singleApi } from "../../constants/singleResultApi";
import { useParams, useNavigate } from "react-router-dom";
import Loader from "../utils/Loader";

function CreateBeerDetails() {
  const [beer, setBeer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let navigate = useNavigate();
  const { id } = useParams();

  if (!id) {
    navigate("/");
  }

  const url = singleApi + "/" + id;

  const navigateBack = useNavigate();
  function goBack() {
    navigateBack("/");
  }

  useEffect(
    function () {
      async function fetchDetails() {
        try {
          const response = await fetch(url);

          if (response.ok) {
            const json = await response.json();
            setBeer(json);
          } else {
            setError("There was an error");
          }
        } catch (error) {
          setError(error.toString());
        } finally {
          setLoading(false);
        }
      }
      fetchDetails();
    },
    [url]
  );

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div className="errorMessage">
        <p>Error: There was an unexpected error.</p>
        <p>Advanced: {error}</p>
      </div>
    );
  }

  const foodPairs = beer[0].food_pairing;
  const food = foodPairs.map((foods, index) => <li key={index}>{foods}</li>);

  return (
    <div className="beerDetails">
      <h3>{beer[0].name}</h3>
      <p>
        Description: <br />
        {beer[0].description}
      </p>
      <p className="foodPairingsContainer">
        Food pairings: <br />
        {food}
      </p>
      <img
        src={beer[0].image_url}
        alt={`${beer[0].name}'packaging seen from the front. `}
      />

      <button onClick={goBack} className="backToCollectionBtn">
        Back to collection
      </button>
    </div>
  );
}

export default CreateBeerDetails;
