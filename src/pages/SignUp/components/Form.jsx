import { InputForm } from "../../../components/InputForm";
import { FaCheck } from "react-icons/fa6";

const Form = () => {
  return (
    <form className="flex-1 p-4 rounded-e-2xl bg-white">
      <h2 className="text-center heading-title text-[1.6rem] mb-10">
        Create your account
      </h2>

      <InputForm
        inputType={"text"}
        inputLabel={"Name"}
        inputPlaceholder={"Enter your name"}
        inputLabelClassName={"relative"}
      />

      <InputForm
        inputType={"email"}
        inputLabel={"Email Address"}
        inputPlaceholder={"Enter your email"}
        inputLabelClassName={"relative my-6 block"}
      />

      <InputForm
        inputType={"password"}
        inputLabel={"Password"}
        inputPlaceholder={"Enter your password"}
        inputLabelClassName={"relative"}
      />

      <div className="flex mt-4 gap-3">
        <div>
          <button
            type="submit"
            className="bg-secondary-color hover:bg-secondary-color/75 animation-fade text-white rounded-full px-6 py-1"
          >
            Sign Up
          </button>
        </div>

        <div>
          <button
            type="button"
            className="border-[#C4C4C4] border text-[#C4C4C4] hover:bg-[#C8C8C8]/90 hover:text-[#FFFFFF] animation-fade rounded-full px-6 py-1"
          >
            Sign In
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
