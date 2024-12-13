
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { SignupData } from '../../../utils/Types';
import * as Yup from "yup";
import { classNames } from 'primereact/utils';
import { Form, Formik } from 'formik';
import Required from '../../../components/Requied';
import { InputText } from 'primereact/inputtext';
import ValidationMessage from '../../../components/ValidationMessage';
import { useNavigate } from 'react-router-dom';
import { Routs } from '../../../Routs';

function Signup() {
  
  const navigate = useNavigate()
  const initialValues : SignupData = {
    userName: '',
    email: '',
    password: ''
  }
const validationSchema = Yup.object({
    userName: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().required("Required"),
  });
  const navigateToLogin = () =>  {
     navigate(Routs.login)
  }

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
            onSubmit={(values) => {
              console.log("====>",values)
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              isSubmitting,
            }) => (
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
                    <label htmlFor="userName">
                      User name
                      <Required />
                    </label>
                    <InputText
                      name="userName"
                      id="userName"
                      aria-describedby="userName-help"
                      placeholder="Enter your user name"
                      value={values.userName}
                      onChange={handleChange}
                      className={classNames(
                        "w-full",
                        touched.userName && errors.userName
                          ? "input-text-danger border-red-500"
                          : "input-text"
                      )}
                    />
                    <ValidationMessage
                      name="userName"
                      helperText="Enter your user name"
                    />
                  </div>



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
                     <Button onClick={navigateToLogin} severity="info" outlined className="w-[200px]" label="Go to login"/>
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
  )
}

export default Signup