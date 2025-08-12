const Header = () => {
  return (
    <>
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <button
          id="sidebarToggle"
          className="bg-transparent border-none text-gray-500 text-xl cursor-pointer p-2 rounded-md hover:bg-gray-100 hover:text-indigo-600 transition"
        >
          <i className="fas fa-bars"></i>
        </button>

        <div className="flex items-center gap-4">
          <div className="relative hidden md:block">
            <i className="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm"></i>
            <input
              type="search"
              placeholder="Search..."
              className="pl-9 pr-3 py-2 border border-gray-200 rounded-md w-64 text-sm outline-none focus:border-indigo-600 transition"
            />
          </div>

          <div className="relative">
            <button className="bg-transparent border-none text-gray-500 text-xl cursor-pointer p-2 rounded-md hover:text-indigo-600 transition">
              <i className="fas fa-bell"></i>
              <span className="absolute top-1 right-1 w-2 h-2 bg-indigo-600 rounded-full"></span>
            </button>
          </div>

          <div className="w-8 h-8 rounded-full overflow-hidden md:hidden">
            <img
              src="https://via.placeholder.com/32"
              alt="User"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
