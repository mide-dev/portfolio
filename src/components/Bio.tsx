import { useState } from "react";

type BioProps = { text: string };

const Bio = ({ text }: BioProps) => {
  const [showMore, setShowMore] = useState(false);
  return (
    <p className="max-w-[450px] font-medium pt-5 lg:pt-0 text-[16px]">
      {showMore ? text : `${text.substring(0, 250)}`}
      <button className="text-red-400" onClick={() => setShowMore(!showMore)}>
        {showMore ? " {Show less}" : "...{Show more}"}
      </button>
    </p>
  );
};

export default Bio;
