import { useState } from "react";

const dictionary = 
[

    { word: "React", meaning: "A JavaScript library for building user interfaces." },

    { word: "Component", meaning: "A reusable building block in React." },

    { word: "State", meaning: "An object that stores data for a component." }

]

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [meaning, setMeaning] = useState("");

  const handleSearch = () => {
    const result = dictionary.filter((word) => word.word.toLowerCase() == searchTerm.toLowerCase());
    if(result.length == 0) {
      setMeaning("Word not found in the dictionary.")
    } else {
      setMeaning(result[0].meaning);
    }    
  }
  return (
    <div>
      <h1>Dictionary App</h1>
      <input type="text" placeholder="Search for a word" onChange={(e) => setSearchTerm(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      <h3>Definition:</h3> <p>{meaning}</p>
    </div>
  );
}

export default App;
