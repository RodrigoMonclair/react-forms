import { useState } from "react";

export default function MusicsList() {
  const [form, setForm] = useState({
    music: "",
    artist: "",
  });

  const [musics, setMusics] = useState([]);

  const [toggled, setToggled] = useState(true);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setMusics([...musics, form]);
    setForm({
      music: "",
      artist: "",
    });
  }

  function handleToggled(e) {
    setToggled(!toggled)
  }

  return (
    <div>
      <h1>Musics List</h1>

      <button onClick={handleToggled} style={{marginBottom: "20px"}}>Add Música</button>
    {toggled && 
    
      <form action="post">
        <label htmlFor="music">Music: </label>
        <input
          type="text"
          name="music"
          value={form.music}
          onChange={handleChange}
        />
        <label htmlFor="artist">Artist: </label>
        <input
          type="text"
          name="artist"
          value={form.artist}
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Salvar</button>
      </form>
    }

      {musics &&
        musics.map((el) => {
          return (
            <p key={el.music}>
              {el.music} - {el.artist}
            </p>
          );
        })}
    </div>
  );
}
