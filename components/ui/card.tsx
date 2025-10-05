interface cardProp {
  title: string;
  icon: React.ReactNode;
  count: number;
  info: string;
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

export default Card;
