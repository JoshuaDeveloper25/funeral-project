import AppContext from "../../../../context/AppProvider";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import axios from "axios";

const Home = () => {
  const { triggerEffect, profilePosition, profileShapeImage } =
    useContext(AppContext);
  const params = useParams();

  const { data, isLoading, error } = useQuery({
    queryKey: ["profile"],
    queryFn: async () =>
      await axios.get(
        `${import.meta.env.VITE_BASE_URL}/remembereds/get-profile/${params?.id}`
      ),
  });

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return console.log(error);
  }

  return (
    <section className="container-page">
      <div className="">
        {/* Cover */}
        <img
          // src={`${data?.data?.cover_images?.cloud_front_domain}/${data?.data?.cover_images?.aws_file_name}`}
          src={
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          className="w-full h-80 object-cover"
        />

        {/* User Image */}
        {triggerEffect === 1 ? (
          <div
            className={`${
              profileShapeImage === "circle" ? "box relative" : null
            } top-52 ${
              profilePosition === "center"
                ? "max-w-lg mx-auto"
                : profilePosition === "right"
                ? "left-[80%]"
                : ""
            }`}
          >
            {profileShapeImage === "circle" ? (
              <div className={`content`}>
                <img
                  src={
                    "https://t4.ftcdn.net/jpg/03/45/77/73/360_F_345777366_ZsUyWRUIinLnYzbL610VNsPJHhwWCoNb.jpg"
                  }
                />
              </div>
            ) : (
              <div
                className={`img-hanger ${
                  profilePosition === "center"
                    ? "mx-auto my-0"
                    : profilePosition === "right"
                    ? "min-[1130px]:ms-[55rem] me-0"
                    : ""
                }}`}
              >
                <img
                  src={
                    "https://t4.ftcdn.net/jpg/03/45/77/73/360_F_345777366_ZsUyWRUIinLnYzbL610VNsPJHhwWCoNb.jpg"
                  }
                />
              </div>
            )}
          </div>
        ) : (
          <div className="-mt-20 ms-5">
            {profileShapeImage === "circle" ? (
              <img
                className={`w-36 h-36 object-cover rounded-full
              
               ${
                 profilePosition === "center"
                   ? "mx-auto"
                   : profilePosition === "right"
                   ? "ms-auto"
                   : ""
               }`}
                src={
                  "https://t4.ftcdn.net/jpg/03/45/77/73/360_F_345777366_ZsUyWRUIinLnYzbL610VNsPJHhwWCoNb.jpg"
                }
              />
            ) : (
              <img
                className={`rounded-none h-36 w-36 object-cover
             ${
               profilePosition === "center"
                 ? "mx-auto"
                 : profilePosition === "right"
                 ? "ms-auto"
                 : ""
             }`}
                src={
                  "https://t4.ftcdn.net/jpg/03/45/77/73/360_F_345777366_ZsUyWRUIinLnYzbL610VNsPJHhwWCoNb.jpg"
                }
              />
            )}
          </div>
        )}
      </div>

      <div className="mt-3 ms-5">
        <h2>{data?.data?.epitaph || "In loving memory of"}</h2>
        <h3 className="font-bold mb-1">{data?.data?.name}</h3>
        <h3>
          <span className="font-bold">Lifetime</span>: {data?.data?.birth_date}{" "}
          - {data?.data?.death_date}
        </h3>
      </div>
    </section>
  );
};

export default Home;
