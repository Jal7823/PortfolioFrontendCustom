import Title from "../components/Title";

function Contact() {
  return (
    <div className="bg-black h-screen container mx-auto">
      <Title content='Contact me ' />

      <div >
        <form className="w-full max-w-lg mx-auto my-8">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide  text-xs font-bold mb-2 text-white"
                htmlFor="grid-first-name"
              >
                First Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="First Name"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide  text-xs font-bold mb-2 text-white"
                htmlFor="grid-last-name"
              >
                Last Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder=" Last Name"
              />
            </div>
          </div>
          <div className="w-full mb-4 ">
            <label
              className="block uppercase tracking-wide  text-xs font-bold mb-2 text-white"
              htmlFor="grid-last-name"
            >
              Company
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder=" Last Name"
            />
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide  text-xs font-bold mb-2 text-white"
                htmlFor="grid-password"
              >
                Message
              </label>
              <textarea
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                placeholder="Message"
              />
            </div>
          </div>
          <div>
            <button  className="bg-gray-400  p-2 rounded w-full">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
