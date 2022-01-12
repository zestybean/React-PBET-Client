import React from "react";
import SubmitButton from "../Components/SubmitButton";

import MenuButton from "../Components/SubmitButton";

function ClientLogin(props: any) {
  return (
    <>
      <div className="h-screen flex flex-col justify-start items-center mt-64">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-green-700 text-bold text-2xl mb-6">
            PBET Client Login
          </h1>

          <form className="flex flex-col justify-center items-center">
            <input
              aria-label="Enter your email address"
              type="text"
              placeholder="PBET ID"
              className="text-sm text-gray-base w-full 
                      mr-3 py-5 px-4 h-2 border 
                      border-gray-200 rounded mb-2"
            />
            <input
              aria-label="Enter your password"
              type="password"
              placeholder="PBET Password"
              className="text-sm text-gray-base w-full mr-3 
                      py-5 px-4 h-2 border border-gray-200 
                      rounded mb-6"
            />

            <SubmitButton title="Login" />
          </form>
        </div>
      </div>
    </>
  );
}

export default ClientLogin;
