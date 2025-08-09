import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="bg-white-600 py-4 px-4 md:px-12 lg:px-20 flex items-center justify-between border-b sticky top-0 z-30">
        <div className="flex items-center">
          <a href="index.html" className="flex items-center">
            <img
              src="https://picsum.photos/80/80?random=1"
              alt="Cafeio Logo"
              className="h-10"
            />
            <span className="ml-2 text-xl font-semibold text-primary">
              Cafeio
            </span>
          </a>
        </div>
        <nav className="hidden md:flex space-x-8">
          <Link
            to="/"
            className="font-medium hover:text-primary transition-colors"
          >
            Trang chủ
          </Link>
          <Link
            to="/infoPage"
            className="font-medium hover:text-primary transition-colors"
          >
            Giới thiệu
          </Link>
          <Link
            to="/productPages"
            className="font-medium hover:text-primary transition-colors"
          >
            Sản phẩm
          </Link>
          <Link
            to="/contactPage"
            className="font-medium hover:text-primary transition-colors"
          >
            Liên hệ
          </Link>
        </nav>
        <div className="flex items-center space-x-2 md:space-x-4">
          <Link
            to="/loginPage"
            className="p-2 hover:text-primary transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </Link>
          <Link
            to="/cartPage"
            className="p-2 hover:text-primary transition-colors relative"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 9h14l1 12H4L5 9z"
              />
            </svg>
            <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              0
            </span>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
