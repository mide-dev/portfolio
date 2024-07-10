import infiniti from "../../assets/infiniti.png";

type DaLogoProp = { className?: string };

const Infiniti = ({ className }: DaLogoProp) => {
  return <img className={className} src={infiniti} alt="infiniti logo" />;
};

export default Infiniti;
