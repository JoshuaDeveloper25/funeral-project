import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import { IoArrowBack, IoCloseSharp } from "react-icons/io5";
import { useMutation } from "@tanstack/react-query";
import AppContext from "../../context/AppProvider";
import Form from "./pages/Home/components/Form";
import { useContext, useState } from "react";
import Modal from "../../components/Modal";
import { FaImage } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";

import logo from "../../assets/funeral-logo.png";

const Settings = () => {
  const {
    triggerEffect,
    setTriggerEffect,
    profilePosition,
    setProfilePosition,
    setProfileShapeImage
  } = useContext(AppContext);
  const [openModal, setOpenModal] = useState(false);
  const [toggled, setToggled] = useState(false);
  const location = useLocation();
  const params = useParams();

  const changeImageMutation = useMutation({
    mutationFn: async (imageInfo) =>
      await axios.post(
        `${import.meta.env.VITE_BASE_URL}/remembereds/upload_cover_image/${
          params?.id
        }`,
        imageInfo
      ),
    onSuccess: (res) => {
      console.log(res);
      toast.success("¡Perfil creado exitosamente!");
    },
    onError: (err) => {
      console.log(err);
      toast.error(getFastApiErrors(err));
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex h-full min-h-[100vh]">
      <Sidebar
        onBackdropClick={() => setToggled(false)}
        className="flex-1 bg-primary-color"
        toggled={toggled}
        breakPoint="md"
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
                className="min-[768px]:hidden size-6 cursor-pointer"
              />
            </div>
          </div>

          {/* Logo */}
          <NavLink to={"/settings/"}>
            <img className="w-20 mx-auto mb-6" src={logo} />
          </NavLink>

          <SubMenu label="Profile Effect">
            <MenuItem onClick={() => setTriggerEffect(false)}>
              {" "}
              Default
            </MenuItem>
            <MenuItem onClick={() => setTriggerEffect(1)}> Effect 1</MenuItem>
          </SubMenu>

          <SubMenu label="Profile Position">
            <MenuItem onClick={() => setProfilePosition("left")}>
              {" "}
              Left
            </MenuItem>
            <MenuItem onClick={() => setProfilePosition("center")}>
              {" "}
              Center
            </MenuItem>
            <MenuItem onClick={() => setProfilePosition("right")}>
              {" "}
              Right
            </MenuItem>
          </SubMenu>

          <SubMenu label="Shape Profile Image">
            <MenuItem onClick={() => setProfileShapeImage("circle")}>
              {" "}
              Rounded
            </MenuItem>
            <MenuItem onClick={() => setProfileShapeImage("square")}>
              {" "}
              Square
            </MenuItem>
          </SubMenu>

          <div className="px-3">
            {/* Change Image */}
            <button onClick={() => setOpenModal(true)}>
              <FaImage className="inline me-2" /> Change Image
            </button>
          </div>
        </Menu>
      </Sidebar>

      <Modal
        titleModal={"Change Image"}
        handleSubmit={handleSubmit}
        setOpenModal={setOpenModal}
        openModal={openModal}
      >
        <Form isPending={changeImageMutation?.isPending} />
      </Modal>

      <main className="flex-[75%] p-2 overflow-x-hidden">
        <div className="md:block flex flex-col md:flex-row">
          {/* Hamburguer Button */}
          <button
            className="sb-button min-[768px]:hidden"
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
