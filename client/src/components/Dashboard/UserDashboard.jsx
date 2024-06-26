import React, { useState } from "react";
import { Home, Settings } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, NavLink } from "react-router-dom";
import { VscSignOut } from "react-icons/vsc";
import { logout } from "../../services/operations/authAPI";
// import { IoVideocamOutline } from "react-icons/io5";
import { FcVideoCall } from "react-icons/fc";
import { FaUserDoctor } from "react-icons/fa6";
import { HiMiniChatBubbleBottomCenterText } from "react-icons/hi2";

export default function SidebarFour() {
  const { user } = useSelector((state) => state.profile);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [activeNavLink, setActiveNavLink] = useState("");

  const handleNavLinkClick = (to) => {
    setActiveNavLink(to);
  };

  return (
    <div className="flex h-auto w-16 flex-col items-center overflow-y-auto border-r bg-white py-8">
      <div className="flex flex-1 flex-col items-center space-y-6 ">
        <NavLink
          to={"/dashboard/my-profile"}
          onClick={() => handleNavLinkClick("/dashboard/my-profile")}
          className={`rounded-lg p-1.5 text-gray-700 transition-colors duration-200 focus:outline-none ${
            activeNavLink === "/dashboard/my-profile" ? "bg-gray-200" : ""
          }`}
        >
          <Home size={24} />
        </NavLink>

        <NavLink
          to={"/dashboard/book-appointment"}
          onClick={() => handleNavLinkClick("/dashboard/book-appointment")}
          className={`rounded-lg p-1.5 text-gray-700 transition-colors duration-200 focus:outline-none ${
            activeNavLink === "/dashboard/book-appointment" ? "bg-gray-200" : ""
          }`}
        >
          <FaUserDoctor size={26} />
        </NavLink>

        <NavLink
          to={"/dashboard/addtoCall"}
          onClick={() => handleNavLinkClick("/dashboard/addtoCall")}
          className={`rounded-lg p-1.5 text-gray-700 transition-colors duration-200 focus:outline-none ${
            activeNavLink === "/dashboard/addtoCall" ? "bg-gray-200" : ""
          }`}
        >
          <FcVideoCall size={26} />
        </NavLink>

        <NavLink
          to={"/dashboard/ai-chat_bot"}
          onClick={() => handleNavLinkClick("/dashboard/ai-chat_bot")}
          className={`rounded-lg p-1.5 text-gray-700 transition-colors duration-200 focus:outline-none ${
            activeNavLink === "/dashboard/ai-chat_bot" ? "bg-gray-200" : ""
          }`}
        >
          <HiMiniChatBubbleBottomCenterText size={26} />
        </NavLink>

        <NavLink
          onClick={() => {
            dispatch(logout(navigate));
          }}
          className={`rounded-lg p-1.5 text-gray-700 transition-colors duration-200 focus:outline-none`}
        >
          <VscSignOut size={26} />
        </NavLink>
      </div>

      <div className="flex flex-col items-center space-y-4 mb-6">
        <NavLink
          to={"/dashboard/settings"}
          onClick={() => handleNavLinkClick("/dashboard/settings")}
          className={`rounded-lg p-1.5 text-gray-700 transition-colors duration-200 focus:outline-none ${
            activeNavLink === "/dashboard/settings" ? "bg-gray-200" : ""
          }`}
        >
          <Settings size={24} />
        </NavLink>

        <NavLink
          to={"/dashboard/my-profile"}
          onClick={() => handleNavLinkClick("/dashboard/my-profile")}
          className={`rounded-lg p-1.5 text-gray-700 transition-colors duration-200 focus:outline-none ${
            activeNavLink === "/dashboard/my-profile" ? "bg-gray-200" : ""
          }`}
        >
          <img
            className="h-8 w-8 rounded-full object-cover"
            src={user?.image}
            alt="User avatar"
          />
        </NavLink>
      </div>
    </div>
  );
}
