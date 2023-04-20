import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Detail() {
  const [items, setItems] = useState([]);
  const Navigate = useNavigate();
  let { id } = useParams();
  useEffect(() => {
    const fecthItem = async () => {
      const results = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      setItems([results.data]);
    };

    fecthItem();
  }, [id]);

  return (
    <>
      <div className="content-details">
        <button onClick={() => Navigate("/")} className="btn-accueil">Accueil</button>

        {items.map((elt) => (
          <div
            className="robot-grid"
            key={elt.id}
            onClick={() => Navigate(`/details/${elt.id}`)}
          >
            <div className="robot-img">
              <img
                src={`https://robohash.org/${elt.id}`}
                width="150px"
                alt="robot"
              ></img>
              <p>{elt.name}</p>
              <p>{elt.email}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default Detail;
