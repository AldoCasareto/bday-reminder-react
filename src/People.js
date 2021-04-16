const People = ({ people, deleteOne }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article className='person' key={id}>
            <img src={image} alt={image} />
            <div>
              <h4>{name}</h4>
              <p>{age}</p>
              <button onClick={() => deleteOne(id)}>x</button>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default People;
