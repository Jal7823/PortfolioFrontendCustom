import {NavLink} from 'react-router-dom'

function SSR() {
  return (
    <div className="flex justify-center content-center h-screen items-center align-middle">
      <div className="flex flex-col">
        <NavLink to='/'><i className="mt-4 text-2xl fa fa-github"></i></NavLink>
        <NavLink to='/'><i className="mt-4 text-2xl fa fa-envelope"></i></NavLink>
        <NavLink to='/'><i className="mt-4 text-2xl fa fa-linkedin"></i></NavLink>
      </div>
    </div>
  );
}

export default SSR;
