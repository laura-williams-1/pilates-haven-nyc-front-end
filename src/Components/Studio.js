import { Link } from "react-router-dom";
const Studio = ({ studio }) => {
  return (
    <div className="studio">
      <Link to={`/studios/${studio.id}`}>
        <div className="studio-details">
          <h1>{studio.name}</h1>
          <p>{studio.address}</p>
          <p>
            {studio.city}, {studio.state} {studio.zipcode}
          </p>
          <p>Phone: {studio.phone_number}</p>
        </div>
      </Link>
    </div>
  );
};

export default Studio;
