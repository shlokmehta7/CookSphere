import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-orange-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-2xl font-bold">CookSphere</h1>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/recipe">Recipes</Link>
            </li>
            <li>
              <Link href="/upload">Upload</Link>
            </li>
            <li>
              <Link href="/profile">Profile</Link>
            </li>
            <li>
              <Link href="/auth">Login</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;