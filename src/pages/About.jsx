import Title from "../components/Title";
import ReactFlow, { useNodesState, useEdgesState, addEdge } from "reactflow";
import "reactflow/dist/style.css";
import { useCallback, useEffect, useState } from "react";
import { getItems } from '../utils/crud';

function About() {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [languages, setLanguages] = useState([]);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await getItems('/language/');
        setLanguages(res);
  
        // Crear nodos y dependencias desde la respuesta de la API
        const apiNodes = res.map((language) => {
          const mainNode = {
            id: language.id.toString(),
            position: { x: 200, y: 100 * language.id },
            data: { label: language.name },
          };
  
          // Añadir subnodos desde el campo 'libraries'
          const subNodes = language.libraries.map((library) => ({
            id: `sub-${language.id}-${library.id}`,
            position: { x: 200, y: 100 * language.id + 50 },
            data: { label: library.name },
          }));
  
          return [mainNode, ...subNodes];
        });
  
        const flattenedNodes = [].concat(...apiNodes);
  
        const apiEdges = flattenedNodes.reduce((acc, node) => {
          const dependencies = node.data.label === languages.name
            ? languages.libraries.map((library) => ({
                id: `e${node.id}-${library.id}`,
                source: node.id,
                target: `sub-${languages.id}-${library.id}`,
              }))
            : [];
          return acc.concat(dependencies);
        }, []);
  
        setNodes(flattenedNodes);
        setEdges(apiEdges);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    getData();
  }, []);
  console.log(languages);


  return (
    <div className="bg-black h-screen text-white animate-in fade-in">
      <Title content="About me" />
      <div className="w-3/4">
        <div className="flex justify-around mt-4">
          {/* titles */}
          <div className="text-4xl w-1/2 text-center ">About myself</div>
          {/* content */}
          <div className="w-1/2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            explicabo tempora deserunt, unde iste nihil cumque ipsum ullam quo
            autem voluptates commodi excepturi eos eligendi impedit quam non
            dolorem obcaecati!
          </div>
        </div>
        <div className="flex justify-around mt-4">
          {/* titles */}
          <div className="text-4xl w-1/2 text-center ">Skills</div>
          {/* content */}
          <div className="w-1/2">
            <div style={{ width: "100vw", height: "100vh" }}>
              <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
