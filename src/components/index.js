import { useEffect, useState } from "react";
import axios from "axios";
import Person from "./person";
import { Spin } from "antd";

export default function People() {
  const [peopleList, setPeopleList] = useState([]);
  const [url, setUrl] = useState(`https://swapi.dev/api/people/`);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then(
        (res) =>
          res.status === 200 &&
          setPeopleList({
            ...res.data,
            page:
              res.data.previous === null
                ? "1"
                : parseInt(res.data.previous.match(/[0-9]/g).join("")) + 1,
          })
      )
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [url]);

  return (
    <Spin spinning={loading}>
      <div
        style={{
          border: "1px solid black",
          borderRadius: "10px",
          width: "100%",
        }}
      >
        <table
          style={{
            width: "100%",
            padding: "10px",
            height: "50vh",
          }}
        >
          <thead style={{ backgroundColor: "#bcbcbc", borderRadius: "10px" }}>
            <tr style={{height:'7vh'}}>
              <td>Name</td>
              <td>Birth year</td>
              <td>Gender</td>
              <td>Height</td>
              <td>Weight</td>
              <td>Hair color</td>
              <td>Skin color</td>
              <td>Created</td>
              <td>Edited</td>
              <td>Films</td>
              <td>Vehicles</td>
              <td>Starships</td>
              <td>Species</td>
            </tr>
          </thead>

          <tbody>
            {peopleList.results?.map((person, idx) => {
              return <Person key={idx} person={person} idx={idx} />;
            })}
          </tbody>
        </table>

        <div
          style={{
            display: "flex",
            width: "20vw",
            justifyContent: "space-around",
            position: "relative",
            left: "80vw",
            bottom: "1vh",
          }}
        >
          <button
            style={{ borderRadius: "5px", padding: "5px", cursor: "pointer" }}
            onClick={() => setUrl(peopleList.previous)}
            disabled={!peopleList.previous}
          >
            Previous Page
          </button>

          <div
            style={{ width: "5vw", display: "flex", justifyContent: "center" }}
          >
            {`Page ${peopleList.page}`}
          </div>
          <button
            style={{ borderRadius: "5px", padding: "5px", cursor: "pointer" }}
            onClick={() => setUrl(peopleList.next)}
            disabled={!peopleList.next}
          >
            Nexp Page
          </button>
        </div>
      </div>
    </Spin>
  );
}
