const Products = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {[...Array(10)].map(() => (
        <div
          style={{
            width: "300px",
            height: "300px",
            backgroundColor: "#eee",
            margin: "20px",
          }}
        ></div>
      ))}
    </div>
  );
};

export default Products;
