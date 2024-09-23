interface TitleProps {
  title: string;
  description1?: string;
  description2?: string;
}

export const Title = ({title, description1, description2}: TitleProps) => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col max-w-[850px] gap-5">
        <h1 className="font-medium text-4xl text-primary">{title}</h1>
        <div className="flex flex-col gap-2">
          <p className="font-regular text-sm  text-gray">{description1}</p>
          <p className="font-regular text-sm  text-gray">{description2}</p>
        </div>
      </div>
    </div>
  );
};
