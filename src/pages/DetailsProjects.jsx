import { useParams } from "react-router-dom";
import Title from "../components/Title";
import { useEffect, useState } from "react";
import Subtitle from "../components/Subtitle";

function DetailsProjects() {
  const { id } = useParams();

  const [Projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`http://localhost:8000/projects/${id}/`);
      const json = await res.json();
      setProjects(json);
    };
    fetchData();
  }, []);

  console.log(Projects);


  return (
    <div className="bg-black text-white h-screen">
      <Title content={`Details of ${Projects.name}`} />
      <p className="p-4">{Projects.descriptions}</p>
      <div className="flex justify-around">
        <Subtitle content='Back End'/>
        <Subtitle content='Font End'/>
      </div>
      <div className="flex justify-around p-4">
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img className="w-full  h-[300px] object-contain" src={Projects.bImage} alt="Sunset in the mountains" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2"></div>
            <p className="text-gray-400 text-base"></p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              <i className="fa fa-github"></i>
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              <i className="fa fa-globe"></i>
            </span>
          </div>
        </div>

        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          
          <img className="w-full h-[300px] object-contain" src={Projects.fImage} alt="Sunset in the mountains" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2"></div>
            <p className="text-gray-400 text-base"></p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              <i className="fa fa-github"></i>
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              <i className="fa fa-globe"></i>
            </span>
          </div>
        </div>
      </div>

      
    </div>
  );
}

export default DetailsProjects;
