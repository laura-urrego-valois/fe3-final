import React from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context";
import { Link } from "react-router-dom";

const Home = () => {
  const { apiState } = useContextGlobal();
  console.log(apiState);
  return (
    <main>
      <h1>Home</h1>
      <div className="card-grid">
        {apiState.dentistList.map((dentist) => (
          <Link to={"/dentist/" + dentist.id} key={dentist.id}>
            <Card name={dentist.name} username={dentist.username} />
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Home;
