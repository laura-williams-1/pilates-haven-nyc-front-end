const Studio = ({ studio }) => {
  return (
    <div className="studio">
      <h1>{studio.name}</h1>
      <p>{studio.address}</p>
      <p>
        {studio.city}, {studio.state} {studio.zipcode}
      </p>
      <p>Phone: {studio.phone_number}</p>
    </div>
  );
};

export default Studio;
