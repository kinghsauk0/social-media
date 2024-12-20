import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { SignupData } from "../../../utils/Types";
import * as Yup from "yup";
import { classNames } from "primereact/utils";
import { Form, Formik } from "formik";
import Required from "../../../components/Requied";
import { InputText } from "primereact/inputtext";
import ValidationMessage from "../../../components/ValidationMessage";
import {  useNavigate } from "react-router-dom";
import { Routs } from "../../../Routs";
import {app} from "../../../config/fireBase"
import { getAuth , createUserWithEmailAndPassword} from "firebase/auth";
import { Toast } from "primereact/toast";
import { useRef } from "react";



function Signup() {
   const auth = getAuth(app)
  const navigate = useNavigate();
  const initialValues: SignupData = {
    email: "",
    password: "",
  };

  const toast = useRef<Toast>(null);

    


  

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().required("Required"),
  });
  const navigateToLogin = () => {
    navigate(Routs.login);
  };
  const doSignUp = async (values: SignupData) => {
    try {
      const user = {
        email: values.email,
        password: values.password,
      };
      await createUserWithEmailAndPassword(auth,user.email,user.password)

      const userData = auth.currentUser
       if(userData){
        navigate(Routs.login)
        toast.current?.show({
          severity: "success",
          summary: "Signup Successful",
          detail: "User created successfully",
          life: 3000,
        });
       }
    } catch (err) {
      toast.current?.show({
        severity: "error",
        summary: "Signup Failed",
        detail: (err as Error).message || "Unexpected error occurred",
        life: 3000,
      });
    }
     
  };
  const onSubmit = async (
    values: SignupData,
    setSubmitting: (isSubmitting: boolean) => void
  ) => {
    await doSignUp(values);
    setSubmitting(false);
  };
  return (
    <div
      className={classNames(
        "flex",
        "items-center",
        "justify-center",
        "w-full",
        "h-screen"
      )}
    >
      <Card className={classNames("w-[500px]")}>
        <div
          className={classNames("flex", "flex-col", "items-center", "w-ful")}
        >
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              onSubmit(values, setSubmitting);
            }}
          >
            {({ values, errors, touched, handleChange, isSubmitting }) => (
              <Form
                className={classNames(
                  "flex",
                  "flex-col",
                  "items-center",
                  "gap-8",
                  "w-full"
                )}
              >
                <span className={classNames("text-2xl", "font-bold")}>
                  Sign Up
                </span>
                <div className="flex flex-col gap-4 w-full">
                  

                  <div className="flex flex-col gap-2">
                    <label htmlFor="email">
                      Email
                      <Required />
                    </label>
                    <InputText
                      name="email"
                      id="email"
                      aria-describedby="email-help"
                      placeholder="Your email id"
                      value={values.email}
                      onChange={handleChange}
                      className={classNames(
                        "w-full",
                        touched.email && errors.email
                          ? "input-text-danger border-red-500"
                          : "input-text"
                      )}
                    />
                    <ValidationMessage
                      name="email"
                      helperText="Enter your email id"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="password">
                      Password
                      <Required />
                    </label>
                    <InputText
                      id="password"
                      aria-describedby="username-help"
                      type="password"
                      placeholder="Login Password"
                      value={values.password}
                      onChange={handleChange}
                      className={classNames(
                        "w-full",
                        touched.password && errors.password
                          ? "input-text-danger border-red-500"
                          : "input-text"
                      )}
                    />
                    <ValidationMessage
                      name="password"
                      helperText="Enter your password"
                    />
                  </div>
                  <div className="w-full flex flex-col items-end justify-end">
                    <Button
                      onClick={navigateToLogin}
                      severity="info"
                      outlined
                      className="w-[200px]"
                      label="Go to login"
                    />
                  </div>
                  <Button
                    label={isSubmitting ? "Proceeding..." : "Proceed"}
                    type="submit"
                    disabled={isSubmitting}
                  />
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </Card>
      <Toast position="bottom-center" ref={toast} />
    </div>
  );
}

export default Signup;
