const Present = ({ data }: any) => {
  return (
    <div key={data.id} className="mb-14">
      <div className="mt-8 flex flex-col  lg:flex-row items-start justify-between">
        <div className="flex items-center gap-x-5">
          <data.logo className="w-[80px]" />
          <h3 className="max-w-[350px]">
            {data.company} -{" "}
            <span className="text-gray-500">{data.position}</span>
          </h3>
        </div>
        <div className="flex gap-x-2">
          <p>{data.location}</p>
          <strong>&#xB7;</strong>
          <p>{data.duration}</p>
        </div>
      </div>
      <ul>
        {data.body.map((item: string) => (
          <>
            <li className="text-[14px]">{item}</li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default Present;
