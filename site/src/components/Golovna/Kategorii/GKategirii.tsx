function Kategorii() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingLeft: "100px",
          paddingRight: "100px",
        }}
      >
        <div
          style={{
            flex: 1,
            height: "2px",
            backgroundColor: "black",
            margin: "0 10px",
          }}
        ></div>
        <h3 style={{ fontWeight: "bold", whiteSpace: "nowrap" }}>
          Популярні категорії
        </h3>
        <div
          style={{
            flex: 1,
            height: "2px",
            backgroundColor: "black",
            margin: "0 10px",
          }}
        ></div>
      </div>
    </div>
  );
}

export default Kategorii;
