import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { LoginData } from "../../../utils/Types";
import * as Yup from "yup";
import { classNames } from "primereact/utils";
import { Form, Formik } from "formik";
import Required from "../../../components/Requied";
import { InputText } from "primereact/inputtext";
import ValidationMessage from "../../../components/ValidationMessage";
import {  useNavigate } from "react-router-dom";
import { Routs } from "../../../Routs";
import toast from 'react-hot-toast';
import {app} from "../../../config/fireBase"
import { getAuth , createUserWithEmailAndPassword} from "firebase/auth";



function Login() {
   const auth = getAuth(app)
  const navigate = useNavigate();
  const initialValues: LoginData = {
    
    email: "",
    password: "",
  };


  

  
  const validationSchema = Yup.object({
  
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().required("Required"),
  });
  
  const doLogin = async (values: LoginData) => {
    try {
      const user = {
       
        email: values.email,
        password: values.password,
      };
      await createUserWithEmailAndPassword(auth,user.email,user.password)

      const userData = auth.currentUser
       if(userData){
        toast.success("User created secssfully")
        localStorage.setItem("token",userData.email!)
        navigate(Routs.deshboard)
       }
    } catch (err) {
      console.error("Unexpected error:", err);
    }
     
  };
  const onSubmit = async (
    values: LoginData,
    setSubmitting: (isSubmitting: boolean) => void
  ) => {
    await doLogin(values);
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
                  Log In
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
    </div>
  );
}

export default Login;
