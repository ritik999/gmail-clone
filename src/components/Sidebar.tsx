import React from "react";
import "./sidebar.css";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import SidebarOption from "./SidebarOption";
import MailIcon from "@mui/icons-material/Mail";
import StarIcon from "@mui/icons-material/Star";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import NearMeIcon from "@mui/icons-material/NearMe";
import NoteIcon from "@mui/icons-material/Note";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { IconButton } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import DuoIcon from "@mui/icons-material/Duo";
import PhoneIcon from "@mui/icons-material/Phone";
import Main from "../pages/Main";
import { useDispatch } from "react-redux";
import { openSendMessage } from "../redux/reducer";

const Sidebar = ({ children }: any) => {

  const dispatch=useDispatch();

  return (
    <div className="sidebar">
      <div className="sidebar_left">
        <Button
          className="sidebar_compose"
          startIcon={<AddIcon fontSize="large" />}
          onClick={()=>dispatch(openSendMessage())}
        >
          Compose
        </Button>

        <SidebarOption
          Icon={MailIcon}
          title="Inbox"
          number={54}
          selected={true}
        />
        <SidebarOption Icon={StarIcon} title="Star" number={54} />
        <SidebarOption Icon={AccessTimeIcon} title="Snoozed" number={54} />
        <SidebarOption
          Icon={LabelImportantIcon}
          title="Important"
          number={54}
        />
        <SidebarOption Icon={NearMeIcon} title="Sent" number={54} />
        <SidebarOption Icon={NoteIcon} title="Drafts" number={54} />
        <SidebarOption Icon={ExpandMoreIcon} title="More" number={54} />

        <div className="sidebar_footer">
          <div className="sidebar_footerIcons">
            <IconButton>
              <PersonIcon />
            </IconButton>

            <IconButton>
              <DuoIcon />
            </IconButton>

            <IconButton>
              <PhoneIcon />
            </IconButton>
          </div>
        </div>
      </div>
      {/* <Main>{children}</Main> */}
      {children}
    </div>
  );
};

export default Sidebar;
