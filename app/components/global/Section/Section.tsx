import { Container } from "react-bootstrap";

type Props = {
  children: React.ReactNode;
  gray?: boolean;
};

const Section = ({ children, gray }: Props) => (
  <section className={gray ? "bg-gray" : ""}>
    <Container>{children}</Container>
  </section>
);

export default Section;
