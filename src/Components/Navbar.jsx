import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Firebase/AuthProvider";


const Navbar = () => {
  const { user, LogOut } = useContext(AuthContext);

  const handleSignOut = () => {
    LogOut();
  };
    return (
        <div>
            <div className="navbar bg-red-300 ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <NavLink to="/">
      <li className="hover:bg-red-500 rounded-xl" ><a>Home</a></li>
      </NavLink>
      <NavLink to="/allfooditems"> 
      <li className="hover:bg-red-500 rounded-xl"><a>All Food</a></li>
      </NavLink>
      <NavLink to="/blog">
      <li className="hover:bg-red-500 rounded-xl"><a>Blog</a></li>
      </NavLink>
      </ul>
    </div>
   <img className="h-[20%] w-[20%]" src="https://i.ibb.co/LdKJdhB/logo.png" alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 font-bold text-2xl ">
    <NavLink to="/">
      <li className="hover:bg-red-500 rounded-xl" ><a>Home</a></li>
      </NavLink>
      <NavLink to="/allfooditems">
      <li className="hover:bg-red-500 rounded-xl"><a>All Food</a></li>
      </NavLink>
      <NavLink to="/blog">
      <li className="hover:bg-red-500 rounded-xl"><a>Blog</a></li>
      </NavLink>
    </ul>
  </div>
  <div className="navbar-end">
  <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
        {user ? (
                    <img src={user.photoURL} />
                  ) : (
                    <img src="https://i.ibb.co/HDJMNSK/user.png" alt="" />
                  )}
        </div>
      </label>
      <ul tabIndex={0} className="menu bg-opacity-75 menu-sm dropdown-content mt-5 z-[1] p-2 shadow bg-base-100 rounded-box w-72">

      <a href="#" className="flex items-center p-3 -mt-2">
                     {user ? (
                    <img className=" flex-shrink-0 object-cover mx-1 rounded-full w-9 h-9" src={user.photoURL} />
                  ) : (
                    <img className=" hidden flex-shrink-0 object-cover mx-1 rounded-full w-9 h-9" src="" alt="" />
                  )}
                    <div className="mx-1">
                      {user ? (
                        <h1 className="text-lg font-light dark:text-white text-black">
                          {user.displayName}
                        </h1>
                      ) : (
                        <h1 className="text-sm font-semibold dark:text-white text-black"></h1>
                      )}
                    </div>
                  </a>
                 <NavLink to='/myaddedfood'>
        <li className="hover:bg-red-500 rounded-xl font-bold text-3xl"><a>Added Food</a></li>
        </NavLink>
        <NavLink to="/addfood">
        <li className="hover:bg-red-500 rounded-xl font-bold  text-3xl"><a>Add Food</a></li>
        </NavLink>
        <li className="hover:bg-red-500 rounded-xl font-bold text-3xl"><a>Ordered Food</a></li>
      </ul>
    </div>
   {user?( <button  onClick={handleSignOut} className="btn bg-red-500 w-28 text-black text-xl border-none mr-5">Logout</button> ):(<NavLink to='/login'>
    <button className="btn border-none bg-red-500 w-28 text-black text-xl mr-5">Login</button> </NavLink> )}
  </div>
</div>
        </div>
    );
};

export default Navbar;