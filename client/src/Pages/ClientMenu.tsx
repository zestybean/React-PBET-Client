import React from "react";
import MenuButton from "../Components/MenuButton";

function ClientMenu(props: any) {
  return (
    <>
      <div className="p-10">
        <h1 className="block text-2xl font-bold py-6">Paintline</h1>

        <div className="grid grid-cols-4 gap-2">
          <MenuButton title="Mainline" />

          <MenuButton title="Spoven 1"></MenuButton>

          <MenuButton title="Spoven 2"></MenuButton>

          <MenuButton title="Spoven 3"></MenuButton>
        </div>
      </div>

      <div className="  p-10">
        <h1 className="block text-2xl font-bold py-6">Assembly</h1>
        <div className="grid grid-cols-4 gap-2">
          <MenuButton title="HZ Bumper"></MenuButton>

          <MenuButton title="HZ Front"></MenuButton>

          <MenuButton title="HZ Rear"></MenuButton>

          <MenuButton title="HZ Fender"></MenuButton>

          <MenuButton title="MLU Bumper"></MenuButton>

          <MenuButton title="Bonding Sunvisors"></MenuButton>

          <MenuButton title="Bonding HRI"></MenuButton>

          <MenuButton title="Bonding Transition Fairings"></MenuButton>
        </div>
      </div>
    </>
  );
}

export default ClientMenu;
