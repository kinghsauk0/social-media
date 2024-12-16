
import { ReactNode } from "react";

export type LoginData = {
    email: string;
    password: string;
}

export type SignupData = {
    email: string;
    password: string;
}

 type  SubSideBarItems = {
    sideBarName: ReactNode;
    path: string;
    icon: string;
}

export type  SideBarItems = {
    sideBarName: string;
    path: string;
    icon: ReactNode;
    subSideBar?: SubSideBarItems[]
}

