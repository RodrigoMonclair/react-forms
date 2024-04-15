import { useState } from "react";

export default function FormIdade() {
  const [age, setAge] = useState(0);

  function handleChange(event) {
    setAge(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    {
      age ? alert(`sua idade é ${age}`) : alert(`não digitou nada`);
    }
  }
  return (
    <div>
      <form action="post">
        <label htmlFor="age">Idade: </label>
        <input type="number" name="age" onChange={handleChange} />
        <button onClick={handleSubmit}>Salvar</button>
      </form>
    </div>
  );
}
