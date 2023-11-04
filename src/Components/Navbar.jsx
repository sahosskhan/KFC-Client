

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li><a>Item 3</a></li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
   <img className="h-[20%] w-[20%]" src="https://i.ibb.co/LdKJdhB/logo.png" alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 font-bold text-2xl ">
      <li className="hover:bg-red-500 rounded-xl" ><a>Home</a></li>
      <li className="hover:bg-red-500 rounded-xl"><a>All Food</a></li>
      <li className="hover:bg-red-500 rounded-xl"><a>Blog</a></li>
    </ul>
  </div>
  <div className="navbar-end">
  <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://i.ibb.co/HDJMNSK/user.png" />
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li className="hover:bg-red-500 rounded-xl font-bold text-3xl"><a>Added Food</a></li>
        <li className="hover:bg-red-500 rounded-xl font-bold  text-3xl"><a>Add Food</a></li>
        <li className="hover:bg-red-500 rounded-xl font-bold text-3xl"><a>Ordered Food</a></li>
      </ul>
    </div>
    <a className="btn bg-red-500 w-28 text-black text-xl mr-5">Login</a>
  </div>
</div>
        </div>
    );
};

export default Navbar;