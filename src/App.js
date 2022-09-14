import { useEffect, useState } from "react";
import "./App.css";
import "./main.css";
import axios from "axios";

function App() {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  useEffect(() => {
    const fecthItem = async () => {
      setLoading(true);
      const results = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setItems(results.data);
      setLoading(false);
    };

    fecthItem();
  }, []);
  console.log(searchTitle);
  console.log(
    items.filter((element) =>
      element.name.toLowerCase().includes(searchTitle.toLowerCase())
    )
  );
  return (
    <div className="content">
      <input
        type="text"
        placeholder="recherche par nom"
        onChange={(e) => setSearchTitle(e.target.value)}
      />
      {loading ? (
        <h4>loading...</h4>
      ) : (
        items
          .filter((element) => {
            if (searchTitle.length <= 3) {
              return element;
            } else if (
              element.name.toLowerCase().includes(searchTitle.toLowerCase())
            ) {
              return element;
            }
          })
          .map((elt) => (
            <div className="robot-grid" key={elt.id}>
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
  );
}

export function Title() {
  return <h1>MES AMIS ROBOT</h1>;
}

export default App;
