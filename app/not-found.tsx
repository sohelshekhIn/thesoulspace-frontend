import Link from "next/link";

export default function NotFound() {
  return (
    <div className="px-2">
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <h3>Oops! Page not found</h3>
            <h1>
              <span>4</span>
              <span>0</span>
              <span>4</span>
            </h1>
          </div>
          <h2>we are sorry, but the page you requested was not found</h2>
          <Link className="bg-gray-900 text-white mt-5 py-4 px-6 " href="/">
            Go To Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
