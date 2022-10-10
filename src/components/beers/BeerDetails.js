import { useState, useEffect } from "react";
import { singleApi } from "../../constants/singleResultApi";
import { useParams, useNavigate } from "react-router-dom";

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
  console.log(url);

  useEffect(
    function () {
      async function fetchDetails() {
        try {
          const response = await fetch(url);

          if (response.ok) {
            const json = await response.json();
            console.log(json);
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
    return <p>loading...</p>;
  }

  if (error) {
    return <p>Error!</p>;
  }

  return (
    <div className="beerDetails">
      <h3>{beer[0].name}</h3>
      <p>{beer[0].description}</p>
      <p>{beer[0].food_pairing}</p>
      <img src={beer[0].image_url} />
    </div>
  );
}

export default CreateBeerDetails;
