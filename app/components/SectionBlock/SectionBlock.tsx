import { FC, ReactNode } from "react";
import { Container } from "react-bootstrap";

type LayoutProps = {
  children: ReactNode;
  id: string;
  title: string;
  text?: string;
};

const SectionBlock: FC<LayoutProps> = ({ children, id, title, text }) => (
  <section id={id}>
    <Container>
      <article>
        <h2>{title}</h2>
        <h5 className="mb-5">{text}</h5>
        {children}
      </article>
    </Container>
  </section>
);

export default SectionBlock;
