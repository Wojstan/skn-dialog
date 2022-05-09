type Props = {
  link: string;
  icon: React.ReactNode;
};

const FooterLink = ({ link, icon }: Props) => (
  <li>
    <a href={link}>
      {icon} {link}
    </a>
  </li>
);

export default FooterLink;
