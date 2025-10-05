import Header from "./dashboard/header/page";
import Statistcs from "./dashboard/Statistics/page";
import ContentType from "./dashboard/ContentType/page";
import PromptField from "./dashboard/PromptField/page";
const page = () => {
  return (
    <>
      <Header />
      <div className="w-[95%] mx-auto">
        <Statistcs />
        <ContentType />
        <PromptField />
      </div>
    </>
  );
};

export default page;
