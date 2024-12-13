import { ReactNode } from "react";
import SideBar from "../dashboard/components/SideBar";
import Header from "../dashboard/components/Header";

interface Base {
    children: ReactNode;
}

const DashboardBase : React.FC<Base> = ({children}) => {
    return (
        <div className="grid grid-rows-[auto_1fr] grid-cols-[auto_1fr] min-h-screen">
            <Header/>
            <SideBar/>
            <div className="row-span-1 col-span-1 bg-white">
                {children}
            </div>
        </div>
       
       
    )
}

export default DashboardBase