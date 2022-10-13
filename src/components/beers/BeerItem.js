import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function BeerItem({ id, name }) {
  return (
    <div className="beer">
      <Link to={`detail/${id}`}>
        <h5>{name}</h5>
      </Link>
    </div>
  );
}

BeerItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default BeerItem;
