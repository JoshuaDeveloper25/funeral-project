import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import { IoArrowBack, IoCloseSharp } from "react-icons/io5";
import { useMutation } from "@tanstack/react-query";
import { Menu, Sidebar } from "react-pro-sidebar";
import Form from "./pages/Home/components/Form";
import Modal from "../../components/Modal";
import { FaImage } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";

import logo from "../../assets/funeral-logo.png";

const Settings = () => {
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
      toast.success("¡Image uploaded successfully!");
    },
    onError: (err) => {
      console.log(err);
      toast.error(getFastApiErrors(err));
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const user_request = confirm(`Are you sure you want to change the image?`);

    if (!user_request) {
      return;
    }

    const formData = new FormData();
    formData.append("uploadImages", e?.target?.files[0]);

    changeImageMutation?.mutate(formData);
  };

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
