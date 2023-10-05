import React from "react";
import "./mail.css";
import { IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MoveToInboxIcon from "@mui/icons-material/MoveToInbox";
import ErrorIcon from "@mui/icons-material/Error";
import DeleteIcon from "@mui/icons-material/Delete";
import EmailIcon from "@mui/icons-material/Email";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useNavigate } from "react-router-dom";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import PrintIcon from "@mui/icons-material/Print";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

const Mail = () => {
  const navigate = useNavigate();
  return (
    <div className="mail">
      <div className="email_tools">
        <div className="email_toolLeft">
          <IconButton onClick={() => navigate("/")}>
            <ArrowBackIcon />
          </IconButton>
          <IconButton>
            <MoveToInboxIcon />
          </IconButton>
          <IconButton>
            <ErrorIcon />
          </IconButton>
          <IconButton>
            <DeleteIcon />
          </IconButton>
          <IconButton>
            <EmailIcon />
          </IconButton>
          <IconButton>
            <WatchLaterIcon />
          </IconButton>
          <IconButton>
            <CheckCircleIcon />
          </IconButton>
          <IconButton>
            <LabelImportantIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="email_toolRight">
          <IconButton>
            <UnfoldMoreIcon />
          </IconButton>
          <IconButton>
            <PrintIcon />
          </IconButton>
          <IconButton>
            <ExitToAppIcon />
          </IconButton>
        </div>
      </div>
        <div className="email_body">
          <div className="email_bodyHeader">
            <h2>Subject</h2>
            <LabelImportantIcon className="email_important" />
            <p>Title</p>
            <p className="email_time">10pm</p>
          </div>
          <div className="mail_message">
            <p>This is messages</p>
            </div>
        </div>
      </div>
  );
};

export default Mail;
