import React, { useRef, } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";
import { Avatar } from "primereact/avatar";
import { MenuItem } from "primereact/menuitem";
import { TieredMenu } from "primereact/tieredmenu";

interface Props {
  globalFilterValue?: string;
  onGlobalFilterChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}


const items: MenuItem[] = [
    {
      label: "Logout",
      icon: "pi pi-sign-out",
      className: "danger",
      command: () => {
         console.log("Log out")
      },
    },
  ];

function Header({ globalFilterValue, onGlobalFilterChange }: Props) {

    const menu = useRef<TieredMenu | null>(null);
  return (
    <div className="row-span-1 col-span-2  p-5 w-full flex flex-row justify-end items-center bg-blue-400 h-[60px] gap-8">
      <IconField iconPosition="left">
        <InputIcon className="pi pi-search" />
        <InputText
          value={globalFilterValue}
          onChange={onGlobalFilterChange}
          placeholder="Search"
          className="w-[350px]"
        />
      </IconField>
      <div className="flex flex-row items-center gap-2">
      <Avatar icon="pi pi-user" size="large" className="bg-white text-blue-400" shape="circle" />
      <p className=" text-lg text-white">Kingshuk</p>
      </div>
      <div className="flex flex-row justify-center items-center" onClick={(e:any) => menu?.current?.toggle(e)}>
        <GiHamburgerMenu />
      </div>
      
      <TieredMenu model={items} popup ref={menu} breakpoint="767px" className="text-red-700 text-l font-bold" />
    </div>
  );
}

export default Header;
