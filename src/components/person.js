import moment from "moment/moment";

const Person = ({ person, idx }) => {
  return (
    <tr style={{ backgroundColor: `${idx % 2 === 0 ? "#eeeeee" : "white"}` }}>
      <td>{person.name}</td>
      <td>{person.birth_year}</td>
      <td>{person.gender}</td>
      <td>{`${person.height} cm`}</td>
      <td>{`${person.mass} kg`}</td>
      <td>{person.hair_color}</td>
      <td>{person.skin_color}</td>
      <td>{moment(person.created).format("MM/DD/YY")}</td>
      <td>{moment(person.edited).format("MM/DD/YY")}</td>
      <td>{person.films.length}</td>
      <td>{person.vehicles.length}</td>
      <td>{person.starships.length}</td>
      <td>{person.species.length}</td>
    </tr>
  );
};

export default Person;

// birth_year
// :
// "19BBY"
// created
// :
// "2014-12-09T13:50:51.644000Z"
// edited
// :
// "2014-12-20T21:17:56.891000Z"
// eye_color
// :
// "blue"
// films
// :
// ["https://swapi.dev/api/films/1/", "https://swapi.dev/api/films/2/", "https://swapi.dev/api/films/3/",…]
// gender
// :
// "male"
// hair_color
// :
// "blond"
// height
// :
// "172"
// homeworld
// :
// "https://swapi.dev/api/planets/1/"
// mass
// :
// "77"
// name
// :
// "Luke Skywalker"
// skin_color
// :
// "fair"
// species
// :
// []
// starships
// :
// ["https://sw
