import { HomeBlocks } from "interfaces/HomeInterface";
import { FC } from "react";
import { Button, Container } from "react-bootstrap";
import InfoBlock from "../InfoBlock/InfoBlock";

type HeaderProps = HomeBlocks;

const HomeHeader: FC<HeaderProps> = ({ title, text, info }) => (
  <header className="bg-gray">
    <div className="text-center" style={{ background: "#C8E0FF" }}>
      <Container>
        <img
          className="main-image img-fluid"
          src="/img/main.png"
          alt="SKN Dialog"
        />
      </Container>
    </div>

    <aside>
      <img
        className="d-none d-md-block w-100"
        src="/img/waves_blue.svg"
        alt="waves-blue"
      />
    </aside>

    <article>
      <Container>
        <h1>{title}</h1>
        <h5>{text}</h5>
      </Container>
    </article>

    <article>
      <Container>
        <ul>
          {info.map((item, i) => (
            <InfoBlock
              key={i}
              even={Boolean(i % 2)}
              title={item.title}
              text={item.text}
              img={item.img}
            />
          ))}
        </ul>

        <div className="text-center mt-5 ">
          <Button className="p-3">DOŁĄCZ DO NAS!</Button>
        </div>
      </Container>
    </article>
  </header>
);

export default HomeHeader;
