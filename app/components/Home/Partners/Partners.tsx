const partners = ["gwp.png", "cpp.png", "kampus.png", "pkn.png", "wuj.png"];

const Partners = () => (
  <aside className="d-flex justify-content-around align-items-center my-5">
    {partners.map((partner, i) => (
      <img key={i} src={`/img/partners/${partner}`} alt="" />
    ))}
  </aside>
);

export default Partners;
