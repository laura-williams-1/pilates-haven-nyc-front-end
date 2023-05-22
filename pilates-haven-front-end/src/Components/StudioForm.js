import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

const StudioForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [studio, setStudio] = useState({
    name: "",
    address: "",
    zipcode: "",
    city: "",
    state: "NY",
    phone_number: "",
    email: "",
    website_url: "",
    instagram_handle: "",
    description: "",
    specialization: "",
    offers_group: false,
    offers_mat: false,
    offers_reformer: false,
    offers_duets: false,
    offers_privates: false,
    offers_membership: false,
    offers_new_client_deal: false,
    is_black_owned: false,
  });

  useEffect(() => {
    axios.get(`${API}/studios/${id}`).then(
      (res) => {
        setStudio(res.data);
      },
      (error) => navigate("/not-found")
    );
  }, [id, navigate]);

  const handleTextChange = (event) => {
    setStudio({ ...studio, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = (event) => {
    setStudio({ ...studio, [event.target.id]: !studio[event.target.id] });
  };

  const updateStudio = (updatedStudio) => {
    axios
      .put(`${API}/studios/${id}`, updatedStudio)
      .then(() => {
        navigate(`/studios/${id}`);
      })
      .catch((e) => console.warn("error", e));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    updateStudio(studio, id);
  };
  return (
    <div>
      <form className="studio-form" onSubmit={submitHandler}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={studio.name}
          onChange={handleTextChange}
          required
        />

        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          value={studio.address}
          onChange={handleTextChange}
          required
        />

        <label htmlFor="zipcode">Zipcode:</label>
        <input
          type="number"
          id="zipcode"
          value={studio.zipcode}
          onChange={handleTextChange}
          required
        />

        <label htmlFor="city">City:</label>
        <input
          type="text"
          id="city"
          value={studio.city}
          onChange={handleTextChange}
          required
        />

        <label htmlFor="state">State:</label>
        <select id="state" value={studio.state} onChange={handleTextChange}>
          <option value="NY">NY</option>
        </select>
        <label htmlFor="phone_number">Phone Number:</label>
        <input
          type="text"
          id="phone_number"
          value={studio.phone_number}
          onChange={handleTextChange}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          value={studio.email}
          onChange={handleTextChange}
        />
        <label htmlFor="website_url">Website:</label>
        <input
          type="text"
          id="website_url"
          value={studio.website_url}
          onChange={handleTextChange}
        />
        <label htmlFor="instagram_handle">Instagram Handle:</label>
        <input
          type="text"
          id="instagram_handle"
          value={studio.instagram_handle}
          onChange={handleTextChange}
        />
        <label htmlFor="description">description:</label>
        <input
          type="text"
          id="description"
          value={studio.description}
          onChange={handleTextChange}
        />
        <label htmlFor="specialization">specialization:</label>
        <input
          type="text"
          id="specialization"
          value={studio.specialization}
          onChange={handleTextChange}
        />
        <label htmlFor="offers_group">Offers Group Classes:</label>
        <input
          type="checkbox"
          id="offers_group"
          checked={studio.offers_group}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="offers_mat">Offers Mat Classes:</label>
        <input
          type="checkbox"
          id="offers_mat"
          checked={studio.offers_mat}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="offers_reformer">Offers Reformer Classes:</label>
        <input
          type="checkbox"
          id="offers_reformer"
          checked={studio.offers_reformer}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="offers_duets">Offers Duets Classes:</label>
        <input
          type="checkbox"
          id="offers_duets"
          checked={studio.offers_duets}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="offers_membership">Offers Studio Membership:</label>
        <input
          type="checkbox"
          id="offers_membership"
          checked={studio.offers_membership}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="offers_new_client_deal">Offers New Client Deals:</label>
        <input
          type="checkbox"
          id="offers_new_client_deal"
          checked={studio.offers_new_client_deal}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="is_black_owned">Black Owned</label>
        <input
          type="checkbox"
          id="is_black_owned"
          checked={studio.is_black_owned}
          onChange={handleCheckboxChange}
        />
        <input type="submit" className="submit_button" />
      </form>
    </div>
  );
};

export default StudioForm;
