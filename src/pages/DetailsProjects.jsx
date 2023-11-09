import { useParams } from "react-router-dom";
import Title from "../components/Title";
import { useEffect, useState } from "react";
import Subtitle from "../components/Subtitle";
import {NavLink} from 'react-router-dom'

function DetailsProjects() {
  const { id } = useParams();

  const [Projects, setProjects] = useState({}); // Cambiado de [] a {}

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:8000/projects/${id}/`);
        const json = await res.json();
        setProjects(json);
      } catch (error) {
        console.error("Error fetching project details:", error);
      }
    };
    fetchData();
  }, [id]);


  return (
    <div className="bg-black text-white h-screen container mx-auto p-2">
      <div className="container  ">
        <Title content={`Details of ${Projects.name}`} />
        <p className="mt-4">{Projects.descriptions}</p>
      </div>

      <br /><br /><br /><br /><br />

      <div className="flex justify-center">
        <Title content="Stack" />
      </div>

      <div className="container mx-auto rounded   mt-8">
        <div className="bg-slate-995 p-4 mx-auto rounded ">
          <ul className="  flex flex-wrap justify-around">
            {Projects.language &&
              Array.isArray(Projects.language) &&
              Projects.language.map((el, index) => (
                <div
                  key={index}
                  className="bg-white flex rounded-full items-center content-center  "
                >
                  <img className="w-[80px] h-auto p-4" src={el.image} alt="" />
                </div>
              ))}
          </ul>
        </div>

        {/* back-end */}

        <div className="flex flex-wrap justify-around p-4 bg-black ">
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="flex justify-center">
              <Subtitle content="Back-End" />
            </div>
            <NavLink target="_blank" to={Projects.url}><img
              className="w-full h-[300px] object-contain"
              src={Projects.bImage}
              alt="Sunset in the mountains"
            /></NavLink>
            <div className="px-6 py-4">
              <div className="text-center font-bold text-xl mb-2">
                Libraries
              </div>
              <hr className="my-4" />
              <ul className="text-white text-base">
                {Projects.backend &&
                  Projects.backend.map((el, index) => (
                    <ul className="flex justify-between" key={index}>
                      <li className="mr-2">{el.name}</li>{" "}
                      <i className={el.icon}></i>
                    </ul>
                  ))}
              </ul>
            </div>
            <div className="text-center font-bold text-xl mb-2">Status</div>
            <hr className="my-4 w-4/5 mx-auto" />

            <div className="flex justify-between content-center items-center">
              <p className="p-4 ">{Projects.status}</p>
              <i className="fa fa-check"></i>
            </div>

            <div className="px-6 pt-4 pb-2 flex justify-between">
              <NavLink target="_blank" to={Projects.github} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                <i className="fa fa-github"></i>
              </NavLink>
              <NavLink target="_blank" to={Projects.url} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                <i className="fa fa-globe"></i>
              </NavLink>
            </div>
          </div>

          {/* front-end */}

          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="flex justify-center">
              <Subtitle content="Front-End" />
            </div>
            <NavLink target="_blank" to={Projects.url}><img
              className="w-full h-[300px] object-contain"
              src={Projects.fImage}
              alt="Sunset in the mountains"
            /></NavLink>
            <div className="px-6 py-4">
              <div className="text-center font-bold text-xl mb-2">
                Libraries
              </div>
              <hr className="my-4" />
              <ul className="text-white text-base">
                {Projects.frontend &&
                  Projects.frontend.map((el, index) => (
                    <ul className="flex justify-between" key={index}>
                      <li className="mr-2">{el.name}</li>{" "}
                      <i className={el.icon}></i>
                    </ul>
                  ))}
              </ul>
            </div>
            <div className="text-center font-bold text-xl mb-2">Status</div>
            <hr className="my-4 w-4/5 mx-auto" />

            <div className="flex justify-between content-center items-center">
              <p className="p-4 ">{Projects.status}</p>
              <i className="fa fa-check"></i>
            </div>

            <div className="px-6 pt-4 pb-2 flex justify-between">
              <NavLink target="_blank" to={Projects.github} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                <i className="fa fa-github"></i>
              </NavLink>
              <NavLink target="_blank" to={Projects.url} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                <i className="fa fa-globe"></i>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsProjects;
