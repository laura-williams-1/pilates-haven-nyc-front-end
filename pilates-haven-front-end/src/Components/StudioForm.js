import { useState } from "react";

const StudioForm = () => {
  const [studio, setStudio] = useState([]);
  return (
    <div>
      <h1>{studio}</h1>
    </div>
  );
};

export default StudioForm;
