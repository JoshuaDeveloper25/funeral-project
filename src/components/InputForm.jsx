import { FaCheck } from "react-icons/fa6";

export const InputForm = ({
  inputType,
  inputLabel,
  inputName,
  inputPlaceholder,
  inputLabelClassName,
}) => {
  return (
    <label className={inputLabelClassName}>
      <span>{inputLabel}</span>
      <input
        className="form-input-focus form-input-normal "
        placeholder={inputPlaceholder}
        type={inputType}
        name={inputName}
      />
      <FaCheck className="absolute top-11 right-1 text-primary-color" />
    </label>
  );
};