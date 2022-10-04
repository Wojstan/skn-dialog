import { FC } from "react";

type InfoBlockProps = {
  title: string;
  text?: string;
  img: string;
  even?: boolean;
};

const InfoBlock: FC<InfoBlockProps> = ({ title, text, img, even }) => (
  <li
    className={`d-flex flex-column justify-content-center align-items-center m-4 flex-lg-row ${
      even ? "flex-lg-row-reverse" : ""
    }`}
  >
    <div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
    <img className="p-2 img-fluid" src={img} alt={title} />
  </li>
);

export default InfoBlock;
