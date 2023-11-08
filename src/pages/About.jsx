import Title from "../components/Title"

function About() {
  return (
    <div className="bg-black h-screen text-white">
        <Title content='About me'/>
        <div className="w-3/4">
          <div className="flex justify-around mt-4">
            {/* titles */}
            <div className="text-4xl w-1/2 text-center ">
            About myself
            </div>
            {/* content */}
            <div className="w-1/2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos explicabo tempora deserunt, unde iste nihil cumque ipsum ullam quo autem voluptates commodi excepturi eos eligendi impedit quam non dolorem obcaecati!
            </div>
          </div>
          <div className="flex justify-around mt-4">
            {/* titles */}
            <div className="text-4xl w-1/2 text-center ">
            Skills
            </div>
            {/* content */}
            <div className="w-1/2">
              <ul>
                <li>skill</li>
                <li>skill</li>
                <li>skill</li>
                <li>skill</li>
                <li>skill</li>
                <li>skill</li>
              </ul>
            </div>
          </div>
        </div>
    </div>
  )
}

export default About