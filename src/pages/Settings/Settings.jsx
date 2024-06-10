import { NavLink, Outlet, useLocation } from "react-router-dom";
import { IoArrowBack, IoCloseSharp } from "react-icons/io5";
import { Menu, Sidebar } from "react-pro-sidebar";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import axios from "axios";

import logo from "../../assets/funeral-logo.png";

const Settings = () => {
  const [toggled, setToggled] = useState(false);
  const location = useLocation();
  const params = useParams();

  const { data, isLoading, error } = useQuery({
    queryKey: ["profile"],
    queryFn: async () =>
      await axios.get(
        `${import.meta.env.VITE_BASE_URL}/remembereds/get-profile/${params?.id}`
      ),
  });

  console.log(data);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return console.log(error);
  }

  return (
    <div className="flex h-full min-h-[100vh]">
      <Sidebar
        onBackdropClick={() => setToggled(false)}
        className="flex-1 bg-primary-color"
        toggled={toggled}
        breakPoint="sm"
      >
        <Menu>
          {/* Icono Flecha */}
          <div className="flex items-center justify-between px-2 py-3">
            <NavLink className="inline-block" to={"/"}>
              <IoArrowBack className="size-6" />
            </NavLink>

            <div>
              <IoCloseSharp
                onClick={() => setToggled(false)}
                className="min-[577px]:hidden size-6 cursor-pointer"
              />
            </div>
          </div>

          {/* Logo */}
          <NavLink to={"/settings/"}>
            <img className="w-20 mx-auto mb-6" src={logo} />
          </NavLink>

          {/* Account */}
          <NavLink
            className={
              location?.pathname === "/settings/"
                ? "dashboard-active"
                : "dashboard-inactive"
            }
            to="/settings/"
          >
            Account
          </NavLink>

          <NavLink
            className={
              location?.pathname === "/settings/profile"
                ? "dashboard-active"
                : "dashboard-inactive"
            }
            to="#"
          >
            Profile
          </NavLink>
        </Menu>
      </Sidebar>

      <main className="flex-[60%] p-2">
        <div className="md:block flex flex-col md:flex-row">
          {/* Hamburguer Button */}
          <button
            className="sb-button min-[577px]:hidden"
            onClick={() => setToggled(!toggled)}
          >
            <FiMenu className="size-8" />
          </button>

          {/* General Information */}
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Settings;
