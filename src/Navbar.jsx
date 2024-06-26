import { useSelector } from "react-redux";

export default function Navbar() {
  const amount = useSelector((state) => state.amount);

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid ">
          <a className="navbar-brand" href="#">
            Bank Of Aatmik
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 p-2 g-col-6">
              <li className="nav-item p-2 g-col-6">
                <a
                  className="nav-a link-dark active link-underline-opacity-0"
                  aria-current="page"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="nav-item p-2 g-col-6">
                <a
                  className="nav-a link-dark link-underline-opacity-0"
                  href="/"
                >
                  About
                </a>
              </li>
            </ul>
            <div>
              <button
                disabled={true}
                className="btn btn-outline-success "
                type="submit"
              >
                Your Balance : {amount}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
