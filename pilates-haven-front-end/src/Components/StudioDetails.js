import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./StudioDetails.css";
const API = process.env.REACT_APP_API_URL;
const StudioDetails = () => {
  const [studio, setStudio] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  console.log(API);
  useEffect(() => {
    axios
      .get(`${API}/studios/${id}`)
      .then((res) => {
        console.log(res.data);
        setStudio(res.data);
      })
      .catch((e) => {
        console.warn("error", e);
      });
  }, [id]);

  const deleteStudio = () => {
    axios
      .delete(`${API}/studios/${id}`)
      .then(() => navigate(`/studios`))
      .catch((e) => console.warn("error", e));
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete?")) {
      deleteStudio();
    }
  };

  return (
    <>
      <div className="studio">
        <h1>{studio.name}</h1>
        <h5> "{studio.description}"</h5>
        <p>{studio.address}</p>
        <p>
          {studio.city}, {studio.state} {studio.zipcode}
        </p>
        <p>Phone: {studio.phone_number}</p>
        <p>Email: {studio.email}</p>
        <p>
          <a
            href={studio.website_url}
            onClick={(e) => {
              if (
                !window.confirm("Are you sure you want to leave this page?")
              ) {
                e.preventDefault();
              }
            }}
          >
            <a href={studio.website_url}>Website</a>
          </a>
        </p>
        <p>
          {studio.instagram_handle
            ? `Instagram: ${studio.instagram_handle} `
            : null}
        </p>

        <p>Specilization: {studio.specialization}</p>

        <div className="Offers">
          <h3>Offers</h3>
          <ul>
            {studio.offers_group && (
              <li>
                <span className="checkmark">✓</span>
                Group Classes
              </li>
            )}
            {studio.offers_mat && (
              <li>
                <span className="checkmark">✓</span>
                Mat Classes
              </li>
            )}
            {studio.offers_reformer && (
              <li>
                <span className="checkmark">✓</span>
                Reformer Classes:
              </li>
            )}
            {studio.offers_duets && (
              <li>
                <span className="checkmark">✓</span>
                Duet Classes:
              </li>
            )}
            {studio.offers_privates && (
              <li>
                <span className="checkmark">✓</span>
                Private Classes
              </li>
            )}
            {studio.offers_membership && (
              <li>
                <span className="checkmark">✓</span>
                Membership
              </li>
            )}
            {studio.offers_new_culent_deal && (
              <li>
                <span className="checkmark">✓</span>
                New Client Deal
              </li>
            )}
            {studio.is_black_owned && (
              <li>
                <span className="checkmark">✓</span>
                Black-owned
              </li>
            )}
          </ul>
        </div>
        <div className="edit-button">
          <Link to={`/products/${id}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <div className="delete-button">
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </>
  );
};

export default StudioDetails;
