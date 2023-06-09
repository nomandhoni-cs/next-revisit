import Link from "next/link";
import NavStyles from "./Nav.module.css";
const Nav = () => {
  return (
    <header className="text-gray-600 body-font">
      <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
        <div className={NavStyles.container}>
          <div className="logo mx-auto text-center text-white text-3xl font-bold">
            <h1 className="h1">BMI Calculator</h1>
          </div>
          <ul
            className={`flex items-center flex-shrink-0 text-white mr-6 ${NavStyles.ul}`}
          >
            <li>
              <Link href="/">Home </Link>
            </li>
            <li>
              <Link href="/blog">Blog </Link>
            </li>
            <li>
              <Link href="/about">About </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
