import Title from "../components/Title";
import ReactFlow, { useNodesState, useEdgesState, addEdge } from "reactflow";
import "reactflow/dist/style.css";
import { useCallback } from "react";

const initialNodes = [
  // head
  { id: "2", position: { x: 400, y: 0 }, data: { label: "Python" } },
  // dependencies
  { id: "3", position: { x: 600, y: 200 }, data: { label: "Django" } },
  { id: "4", position: { x: 200, y: 200 }, data: { label: "Flask" } },
  {
    id: "5",
    position: { x: 700, y: 100 },
    data: { label: "Django Rest Framework" },
  },
  { id: "6", position: { x: 75, y: 100 }, data: { label: "Flask" } },

  // head
  { id: "1", position: { x: 300, y: 400 }, data: { label: "JavaScript" } },
  // dependencies
  { id: "7", position: { x: 300, y: 500 }, data: { label: "React" } },

  // head
  { id: "9", position: { x: 500, y: 400 }, data: { label: "CSS" } },
  // dependencies
  { id: "8", position: { x: 500, y: 500 }, data: { label: "Tailwind" } },
    // head
    { id: "10", position: { x: 200, y: 600 }, data: { label: "MySQL" } },
    { id: "11", position: { x: 400, y: 600 }, data: { label: "Notions" } },
    { id: "12", position: { x: 600, y: 600 }, data: { label: "Insomnia" } },
];
const initialEdges = [
  // flirts item
  { id: "e1-3", source: "2", target: "3" },
  // second item
  { id: "e2-4", source: "2", target: "4" },
  { id: "e3-4", source: "2", target: "5" },
  { id: "e4-4", source: "2", target: "6" },

  { id: "e5-4", source: "1", target: "7" },
  { id: "e6-4", source: "9", target: "8" },
];



function About() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
    );
    const styles = {
      background: 'red',
      width: '100%',
      height: 300,
    };

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
                styles={styles}
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

      {/* charts */}
    </div>
  );
}

export default About;
