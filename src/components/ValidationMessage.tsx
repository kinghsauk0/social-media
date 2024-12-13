import { ErrorMessage, useField } from "formik";
import { classNames } from "primereact/utils";

interface ValidationMessageProps {
  name: string;
  helperText?: string;
}

function ValidationMessage({ name, helperText }: ValidationMessageProps) {
  const [, meta] = useField(name);

  return (
    <div>
      {meta.error && meta.touched ? (
        <ErrorMessage name={name}>
          {(msg) => (
            <span className={classNames("text-sm", "text-red-500")}>{msg}</span>
          )}
        </ErrorMessage>
      ) : (
        <span
          id={`${name}-help`}
          className={classNames("text-sm", "text-gray-500")}
        >
          {helperText}
        </span>
      )}
    </div>
  );
}

export default ValidationMessage;
