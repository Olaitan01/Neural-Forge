interface cardProp {
  title: string;
  icon: React.ReactNode | string;
  count?: number;
  info?: string;
}

const Card = ({ title, icon, count, info }: cardProp) => {
  return (
    <div className="p-0.25 rounded-2xl bg-gradient-to-tr from-blue-500 via-purple-600 to-pink-500">
      <div className="bg-[#18181b] rounded-2xl p-4 flex flex-col">
        <div className="flex justify-between items-center mb-3">
          <h1 className="text-[#a3a3a3] text-[1rem] font-bold">{title}</h1>
          <span className="text-[#3c84f6] h-4 w-4">{icon}</span>
        </div>
        <span className="inline-block text-3xl font-bold">{count}</span>
        <span className="text-xs text-[#16a149]">{info}</span>
      </div>
    </div>
  );
};

const CardColumn = ({ icon, title }: cardProp) => {
  return (
    <>
      <div>
        <div className="w-full text-sm flex flex-col justify-center items-center text-center bg-[#18181b] rounded-2xl p-2 border-2 border-[#23385d] shadow-[#23385d] shadow-2xl">
          <span className="inline-block text-2xl">{icon}</span>
          <span className="inline-block text-xs font-semibold ">{title}</span>
        </div>
      </div>
    </>
  );
};

export { CardColumn, Card };
