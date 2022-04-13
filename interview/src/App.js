import React, { useState } from 'react';
import './App.css';


function App() {
  const [workerList, setWorkerList ] = useState([{id: 0, name: 'Jan', lastName: 'Kowalski'}]);
  const [id, setId] = useState(1);
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  
  const addWorker = e => {
    e.preventDefault();
    const newWorkerList = [...workerList, {id: id, name, lastName}];
    setWorkerList(newWorkerList);
    setId(id + 1);
    setName('');
    setLastName('');
  }

  const nameChange = e => {
    setName(e.currentTarget.value);
  }
  const lastNameChange = e => {
    setLastName(e.currentTarget.value);
  }
  const deleteWorker = id => {
    const filteredWorkers = workerList.filter(worker => worker.id !== id);
    setWorkerList(filteredWorkers);
  }

  return (
    <div className="App">
      <header className="A">A</header>
      <main className="B">
        <div className="C">
          <div className="E">E</div>
        </div>
        <div className="F">
          <div className="head">Pracownicy</div>
          {workerList.map(person => (
            <>
              <div key={`name-${person.id}`}>{person.name}</div>
              <div key={`lastName-${person.id}`}>{person.lastName}</div>
              <button key={`remove-${person.id}`} onClick={() => deleteWorker(person.id)}>Usun</button>
            </>
          ))}
        </div>
        <form onSubmit={addWorker}>
          <label>Imie:</label> <input type="text" name="name" value={name} onChange={nameChange} required/>
          <label>Nazwisko:</label> <input type="text" name="lastName" value={lastName} onChange={lastNameChange} required/>
          <button type="submit" disabled={workerList.length >= 5}>Dodaj</button>
        </form>
      </main>
      <footer className="D">D</footer>
    </div>
  );
}

export default App;
