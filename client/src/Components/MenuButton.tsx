import React from "react";

function MenuButton(props: any) {
  return (
    <>
      <button className="bg-emerald-700 hover:bg-emerald-600 text-white font-bold py-6 px-8 mx-6 rounded">
        {props.title}
      </button>
    </>
  );
}

export default MenuButton;
