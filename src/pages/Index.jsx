import SSR from "../components/SSR";
import Imagen from "./Imagen";
import Greetings from "./Greetings";

function Index() {
  return (
    <div className=" bg-black text-white ">
      <div className="flex flex-wrap-reverse p-6 ">
        <div className="flex-none md:flex hidden md:flex-none "><SSR/></div>
        <div className="md:flex-auto md:w-36  p-6"><Greetings/></div>
        <div className="md:flex-auto md:w-36  p-6"><Imagen/></div>
      </div>
    </div>
  );
}

export default Index;
