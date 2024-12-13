import { SideBarItems } from "../../utils/Types"
import { FaUserFriends } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaNewspaper } from "react-icons/fa";
import { FaHome } from "react-icons/fa";


export  const sideBarItems: SideBarItems[]  =  [
  {
    sideBarName: "Home",
    path: "/",
    icon: <FaHome/>
  },
    {
      sideBarName: "Profile",
      path: "/profile",
      icon: <FaUser />
    },
     {
        sideBarName: "Friends",
        path: "/friends",
        icon: <FaUserFriends/>
      },
      {
        sideBarName: "News feeds",
        path: "/news-feeds",
        icon: <FaNewspaper/>
      },
      {
        sideBarName: "Settings",
        path: "/settings",
        icon: <IoSettingsOutline/>
      },

]