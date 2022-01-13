import React from "react";

function SubmitButton(props: any) {
  return (
    <>
      <button
        type="submit"
        disabled={props.disabled}
        className="bg-emerald-700 hover:bg-emerald-600 text-white font-bold py-2 px-8 rounded"
      >
        {props.title}
      </button>
    </>
  );
}

export default SubmitButton;
