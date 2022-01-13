import React from "react";
import SubmitButton from "../Components/SubmitButton";
import { Formik, Field, Form } from "formik";

function ClientLogin(props: any) {
  return (
    <>
      <Formik
        initialValues={{ pbetID: "", pbetPass: "" }}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);
          //Async call
          alert(JSON.stringify(values, null, 2));
          console.log(values);
          setSubmitting(false);
        }}
      >
        {({ values, isSubmitting }) => (
          <div className="p-10">
            <div className="flex flex-col justify-start items-center mt-32">
              <div className="flex flex-col justify-center items-center">
                <h1 className="text-green-700 font-bold text-4xl mb-">
                  Pace Board Entry Tool
                </h1>
                <h1 className="text-green-600 text-2xl mb-8">Client Login</h1>
                <Form className="flex flex-col justify-center items-center">
                  <Field
                    name="pbetID"
                    type="input"
                    placeholder="PBET ID"
                    className="text-sm text-gray-base w-full 
                      mr-3 py-5 px-4 h-2 border 
                      border-gray-200 rounded mb-2"
                  />
                  <Field
                    name="pbetPass"
                    type="password"
                    placeholder="PBET Password"
                    className="text-sm text-gray-base w-full 
                      mr-3 py-5 px-4 h-2 border 
                      border-gray-200 rounded mb-2"
                  />
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
