import Link from "next/link";

type Props = {
  label: React.ReactNode;
  link?: string;
  exLink?: string;
  active: boolean;
};

const MenuLink = ({ link, exLink, label, active }: Props) => (
  <li className={`${active ? "active" : ""}`}>
    {link ? <Link href={link}>{label}</Link> : <a href={exLink}>{label}</a>}
  </li>
);

export default MenuLink;
