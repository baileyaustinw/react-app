function Greeting() {
  const animals = ["Lion", "Snake", "Frog", "Giraffe"];
  const animalsList = animals.map((animal) => <li key={animal}>{animal}</li>);

  return (
    <>
      <h1>My favorite animals</h1>
      <ul>{animalsList}</ul>
    </>
  );
}

export default Greeting;
