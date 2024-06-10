import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import axios from "axios";

const Home = () => {
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
      <div>
        <img
          src={`${data?.data?.cover_images?.cloud_front_domain}/${data?.data?.cover_images?.aws_file_name}`}
          className="w-full h-64 object-cover"
        />
        <div className="h-36 w-36 bg-primary-color sticky z-50 rounded-full ms-8 -mt-20"></div>
      </div>

      <div className="mt-3">
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
