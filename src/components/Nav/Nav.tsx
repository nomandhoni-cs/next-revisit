import Link from "next/link";
const Nav = () => {
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
        <ul>
          <li>
            <Link href="/">Home </Link>
          </li>
          <li>
            <Link href="/blog">Blog </Link>
          </li>
          <li>
            <Link href="/about">Home </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
