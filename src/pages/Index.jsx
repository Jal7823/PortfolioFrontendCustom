import SSR from "../components/SSR";
import Imagen from "./Imagen";
import Greetings from "./Greetings";
import TestDiagrams from "../utils/TestDiagrams";

function Index() {
  return (
    <div className=" bg-black text-white ">
      <div className="flex flex-wrap-reverse p-6 ">
        <div className="flex-none md:flex hidden md:flex-6 animate-in zoom-in"><SSR/></div>
        <div className="md:flex-auto md:w-36  p-6 animate-in zoom-in"><Greetings/></div>
        <div className="md:flex-auto md:w-36  p-6 animate-in zoom-in"><Imagen/></div>
        <TestDiagrams/>
      </div>
    </div>
  );
}

export default Index;
