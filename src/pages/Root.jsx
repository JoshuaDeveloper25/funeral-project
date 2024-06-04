import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <section>
      <header></header>

      <main>
        <Outlet />
      </main>
      
      <footer></footer>
    </section>
  );
};

export default Root;
