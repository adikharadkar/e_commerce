const Categories = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "12px",
        maxWidth: "100vw",
        width: "99vw",
        margin: "auto",
        borderBottom: "1px solid #eee",
        padding: "0px 0px 20px 0px",
        textAlign: "center",
      }}
    >
      {[...Array(7)].map(() => (
        <div
          style={{
            flex: "0 0 auto", // Prevents shrinking
            padding: "8px 16px",
            backgroundColor: "#f3f9fb",
            borderRadius: "20px",
            minWidth: "150px",
            height: "20px",
          }}
        ></div>
      ))}
    </div>
  );
};

export default Categories;
