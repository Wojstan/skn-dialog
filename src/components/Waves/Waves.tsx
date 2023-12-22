import { FC } from "react";

type WavesProps = {
  rotate?: boolean;
  src: string;
};

const Waves: FC<WavesProps> = ({ rotate, src }) => (
  <aside>
    <img
      className="d-none d-md-block w-100"
      src={src}
      style={{ transform: rotate ? "rotate(-180deg)" : "" }}
      alt="waves"
    />
  </aside>
);

export default Waves;
