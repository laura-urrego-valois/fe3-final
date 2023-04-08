import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useContextGlobal } from "../Components/utils/global.context";

const Detail = () => {
  const { id } = useParams();
  const { favDispatch, apiState, apiDispatch, getDentist } = useContextGlobal();

  useEffect(() => {
    getDentist(id);
  }, [id]);

  const addFav = (e) => {
    e.preventDefault();
    const savedDentists = JSON.parse(localStorage.getItem("favs")) || [];
    if (savedDentists.some((item) => item.id === apiState.dentistDetail.id)) {
      alert("This dentist already exists in your favorites list!");
    } else {
      favDispatch({ type: "ADD_FAV", payload: apiState.dentistDetail });
    }
  };

  return (
    <>
      <div>
        <h1>Dentist details🪥🦷</h1>
        <div className="card-detail">
          <div>
            <img src="/images/doctor.jpg" alt="" />
          </div>
          <div>
            <h2>{apiState.dentistDetail.name}</h2>
            <h3>{apiState.dentistDetail.email}</h3>
            <h3>{apiState.dentistDetail.phone}</h3>
            <h3>{apiState.dentistDetail.website}</h3>
            <button onClick={addFav} className="favButton">
              Add to favorites ⭐
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
