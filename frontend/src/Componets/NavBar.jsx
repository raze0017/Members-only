import { useNavigate } from "react-router-dom";

function NavBar({ handleLogout }) {
  const navigate = useNavigate();
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a
            className="btn btn-primary text-4xl"
            onClick={() => navigate("/clubs")}
          >
            Blog AwAY
          </a>
        </div>
        <div className="flex-none gap-2">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img alt="User" />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>

              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
