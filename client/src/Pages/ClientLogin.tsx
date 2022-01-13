import React from "react";
import SubmitButton from "../Components/SubmitButton";
import { Formik, Field, Form } from "formik";
import * as yup from "yup";
import axios from "axios";

const validationSchema = yup.object({
  pbetID: yup.string().required("PBET ID is required."),
  pbetPass: yup.string().required("PBET Password is required."),
});

const login = (values: any) => {
  axios
    .post("http://localhost:8090/api/clientlogin", {
      pbetID: values.pbetID,
      pbetPass: values.pbetPass,
    })
    .then((res) => {
      console.log(res);
    });
};

function ClientLogin(props: any) {
  return (
    <>
      <Formik
        initialValues={{ pbetID: "", pbetPass: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);
          login(values);
          setSubmitting(false);
        }}
      >
        {({ values, errors, isSubmitting }) => (
          <div className="p-10">
            <div className="flex flex-col justify-start items-center mt-32">
              <div className="flex flex-col justify-center items-center">
                <h1 className="text-green-700 font-bold text-4xl mb-">
                  Pace Board Entry Tool
                </h1>
                <h1 className="text-green-600 text-2xl mb-8">Client Login</h1>
                <Form className="flex flex-col justify-center items-center">
                  <div className="text-rose-600 text-sm mb-2">
                    {errors.pbetID || errors.pbetPass}
                  </div>

                  <div>
                    <Field
                      name="pbetID"
                      type="input"
                      placeholder="PBET ID"
                      className="text-sm text-gray-base w-full 
                      mr-3 py-5 px-4 h-2 border 
                      border-gray-200 rounded mb-2"
                    />
                  </div>

                  <div>
                    <Field
                      name="pbetPass"
                      type="password"
                      placeholder="PBET Password"
                      className="text-sm text-gray-base w-full 
                      mr-3 py-5 px-4 h-2 border 
                      border-gray-200 rounded mb-2"
                    />
                  </div>

                  <SubmitButton disabled={isSubmitting} title="Login" />
                </Form>
              </div>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
}

export default ClientLogin;
