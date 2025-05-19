import { useState } from "react";

function Person() {
  const [person, setPerson] = useState({
    firstName: "John",
    lastName: "Smith",
    age: 100,
  });
  const [firstName, setFirstName] = useState(person.firstName);
  const [lastName, setLastName] = useState(person.lastName);

  const handleIncreaseAge = () => {
    const newPerson = { ...person, age: person.age + 1 };
    setPerson(newPerson);
  };

  const firstNameUpdate = (event) => {
    setFirstName(event.target.value);
  };

  const lastNameUpdate = (event) => {
    setLastName(event.target.value);
  };

  return (
    <>
      <CustomInput
        type="text"
        name="firstName"
        label="First Name"
        placeholder="First Name"
        onChange={firstNameUpdate}
      />
      <CustomInput
        type="text"
        name="lastName"
        label="Last Name"
        placeholder="Last Name"
        onChange={lastNameUpdate}
      />
      <FullName firstName={firstName} lastName={lastName} />
      <button onClick={handleIncreaseAge}>Increase Age</button>
      <p>{person.age} years old</p>
    </>
  );
}

function CustomInput({ type, name, label, placeholder, onChange }) {
  return (
    <>
      <div>
        <label htmlFor={name}>{label}</label>
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          onChange={onChange}
        />
      </div>
    </>
  );
}

function FullName({ firstName, lastName }) {
  return (
    <>
      <h1>
        {firstName} {lastName}
      </h1>
    </>
  );
}

export default Person;
