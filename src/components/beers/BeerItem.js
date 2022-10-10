import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function BeerItem({ id, name, food_pairings }) {
  return (
    <Link to={`detail/${id}`}>
      <h5>{name}</h5>
      <p>{food_pairings}</p>
    </Link>
  );
}

/* BookItem.propTypes = {
 id: PropTypes.number.isRequired,
 title: PropTypes.string.isRequired,
 published: PropTypes.string.isRequired,
}; */

export default BeerItem;
