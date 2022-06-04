import { Container } from "react-bootstrap";

type Props = {
  children: React.ReactNode;
  gray?: boolean;
  style?: React.CSSProperties;
};

const Section = ({ children, gray, style }: Props) => (
  <section style={style} className={gray ? "bg-gray" : ""}>
    <Container>{children}</Container>
  </section>
);

export default Section;
