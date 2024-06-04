import FastInformation from "./components/FastInformation";
import Form from "./components/Form";

const SignUp = () => {
  return (
    <section className="max-w-4xl mx-auto shadow-lg">
      <div className="flex justify-center items-center min-h-[100vh]">
        <FastInformation />

        {/* Sign Up Form */}
        <Form />
      </div>
    </section>
  );
};

export default SignUp;
