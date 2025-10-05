import Header from "./dashboard/header/page";
import Statistcs from "./dashboard/Statistics/page";
import ContentType from "./dashboard/ContentType/page";
const page = () => {
  return (
    <>
      <Header />

      <div className="w-[95%] mx-auto">
        <Statistcs />
        <ContentType />
      </div>
    </>
  );
};

export default page;
