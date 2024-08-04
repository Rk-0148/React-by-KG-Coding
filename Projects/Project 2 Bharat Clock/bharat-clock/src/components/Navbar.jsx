import "bootstrap/dist/css/bootstrap.min.css";
export default function Navbar() {
  return (
    <>
      <div className="container d-flex flex-wrap">
        <ul className="nav me-auto">
          <li className="nav-item">
            <a
              href="#"
              className="nav-link link-body-emphasis px-2 active"
              aria-current="page"
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link link-body-emphasis px-2">
              About
            </a>
          </li>
        </ul>
        <ul className="nav">
          <li className="nav-item">
            <a href="#" className="nav-link link-body-emphasis px-2">
              Login
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link link-body-emphasis px-2">
              Sign up
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
