import { LogoutLink } from "./LogoutLink"

export function Header() {
  return (
    <header className="w-full shadow-md py-3 border-b border-gray-700">
      <nav className="flex justify-between items-center max-w-6xl mx-auto px-5">
        <a href="/" className="text-lg font-bold text-gray-300 hover:text-gray-100">Home</a>
        <ul className="flex space-x-6">
          <li><a href="/actors" className="text-gray-300 hover:text-gray-100">All Actors</a></li>
          <li><a href="/actors/new" className="text-gray-300 hover:text-gray-100">New Actor Listing</a></li>
          <li><a href="/signup" className="text-gray-300 hover:text-gray-100">Sign Up</a></li>
          <li className="text-gray-300"><LogoutLink /></li>
          <li><a href="/login" className="text-gray-300 hover:text-gray-100">Login</a></li>
        </ul>
      </nav>
    </header>
  );
}

