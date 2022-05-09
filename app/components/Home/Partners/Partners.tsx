const partners = ["gwp.png", "cpp.png", "kampus.png", "pkn.png", "wuj.png"];

const Partners = () => (
  <aside className="d-flex flex-column justify-content-around align-items-center my-lg-5 flex-lg-row">
    {partners.map((partner, i) => (
      <img
        className="mb-lg-0 mb-5"
        key={i}
        src={`/img/partners/${partner}`}
        alt=""
      />
    ))}
  </aside>
);

export default Partners;
