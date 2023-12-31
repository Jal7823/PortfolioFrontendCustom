import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import Title from "../components/Title";
import { getItems } from "../utils/crud";

function Portfolio() {
  const [Projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getItems("/projects/");
      setProjects(res);
    };
    fetchData();
  }, []);

  return (
    <div className="bg-black text-white h-screen container mx-auto">
      <div className="bg-black text-white h-screen">
        <Title content="Portfolio" />

        <div className="flex justify-around my-8">
          {Projects.length > 0 ? (
            Projects.map((el) => (
              <div className="flex justify-between text-white" key={el.id}>
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                  <NavLink to={`/details/${el.id}`}>
                    <img
                      className="w-full"
                      src={el.pImage}
                      alt="Sunset in the mountains"
                    />
                  </NavLink>
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{el.name}</div>
                    <p className="text-gray-400 text-base">
                      {el.descriptions.length > 100
                        ? el.descriptions.slice(0, 100) + " ..."
                        : el.descriptions}
                    </p>
                  </div>
                  <div className="px-6 pt-4 pb-2">
                    <NavLink to={`/details/${el.id}`}>
                      <div className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 w-[100%] text-center hover:text-white hover:bg-green-900     transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-y-105 hover:bg-green-700 duration-300">
                        <i className="fa fa-eye "></i>
                      </div>
                    </NavLink>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-red-700 font-bold text-4xl flex justify-center items-center h-screen animate-pulse ">
              Revise la conexión a la base de datos
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
