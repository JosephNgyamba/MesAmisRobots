import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useParams } from "react-router-dom";
import Title from "./Title";
import axios from "axios";
export default function Robots() {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  const Navigate = useNavigate();
  // const { id } = useParams();
  useEffect(() => {
    const fecthItem = async () => {
      setLoading(true);
      const results = await axios.get(
        `https://jsonplaceholder.typicode.com/users`
      );
      setItems(results.data);
      setLoading(false);
    };

    fecthItem();
  }, []);
  // useEffect(() => {
   
  // }, [searchTitle])
  return (
    <>
      <Title />
      <div className="content">
        <input
          type="text"
          placeholder="recherche par nom"
          onChange={(e) => setSearchTitle(e.target.value)}
        />

        {loading ? (
          <h4>loading ?...</h4>
        ) : (
          items
            .filter((element) => {
              if (searchTitle.trim().length <3) 
              {
                return element;
                
              } else  { return (element.name.toLowerCase().includes(searchTitle.trim().toLowerCase()))
                   
                 }
                 
            })
            .map((elt) => (
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
            ))
        )}
      </div>
    </>
  );
}
