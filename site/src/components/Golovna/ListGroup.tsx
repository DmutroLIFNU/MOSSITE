function ListGroup() {
  const items = ["Shafa", "Dyvan", "Stil"];

  return (
    <>
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
