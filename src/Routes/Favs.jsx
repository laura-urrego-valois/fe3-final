import React from "react";
import { useContextGlobal } from "../Components/utils/global.context";

const Favs = () => {
  const { favState } = useContextGlobal();
  return (
    <div className="fav-dentists">
      <h1>Favorite dentists❤️</h1>
      <div className="card-grid">
        {favState.length > 0 ? (
          favState.map((dentist, index) => (
            <div key={index}>
              <img src="/images/doctor.jpg" alt="" />
              <div>
                <h4>{dentist.name}</h4>
                <h5>{dentist.username}</h5>
              </div>
            </div>
          ))
        ) : (
          <p>Oops.. this list is empty</p>
        )}
      </div>
    </div>
  );
};

export default Favs;

