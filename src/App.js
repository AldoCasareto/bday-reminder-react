import data from './data';
import { useState } from 'react';
import People from './People';

function App() {
  const [people, setPeople] = useState(data);

  const deleteOne = (id) => {
    const filterPerson = people.filter((person) => person.id !== id);
    setPeople(filterPerson);
  };
  return (
    <main>
      <section className='container'>
        <h3>{people.length} birthdays today</h3>
        <People people={people} deleteOne={deleteOne} />
        <button onClick={() => setPeople([])}>Delete All</button>
      </section>
    </main>
  );
}

export default App;
