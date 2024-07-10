import kwasu from "../../assets/kwasu.png";

type DaLogoProp = { className?: string };

const Kwasu = ({ className }: DaLogoProp) => {
  return <img className={className} src={kwasu} alt="infiniti logo" />;
};

export default Kwasu;
