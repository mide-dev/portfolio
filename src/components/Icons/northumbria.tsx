import northumbria from "../../assets/northumbria.png";

type DaLogoProp = { className?: string };

const Northumbria = ({ className }: DaLogoProp) => {
  return <img className={className} src={northumbria} alt="infiniti logo" />;
};

export default Northumbria;
