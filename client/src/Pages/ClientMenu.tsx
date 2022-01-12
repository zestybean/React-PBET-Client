import React from "react";
import MenuButton from "../Components/MenuButton";

function ClientMenu(props: any) {
  return (
    <>
      <div className="p-10">
        <h1 className="block text-2xl font-bold py-6">Paintline</h1>

        <div className="grid grid-cols-4 gap-2">
          <MenuButton title="Mainline" />

          <MenuButton title="Spoven 1" />

          <MenuButton title="Spoven 2" />

          <MenuButton title="Spoven 3" />
        </div>
      </div>

      <div className="  p-10">
        <h1 className="block text-2xl font-bold py-6">Assembly</h1>
        <div className="grid grid-cols-4 gap-2">
          <MenuButton title="HZ Bumper" />

          <MenuButton title="HZ Front" />

          <MenuButton title="HZ Rear" />

          <MenuButton title="HZ Fender" />

          <MenuButton title="MLU Bumper" />

          <MenuButton title="Sunvisors" />

          <MenuButton title="HRI" />

          <MenuButton title="Transition Fairings" />
        </div>
      </div>
    </>
  );
}

export default ClientMenu;
