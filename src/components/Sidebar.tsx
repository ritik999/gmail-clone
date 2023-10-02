import React from 'react'
import './sidebar.css'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import SidebarOption from './SidebarOption';
import MailIcon from '@mui/icons-material/Mail';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import NearMeIcon from '@mui/icons-material/NearMe';
import NoteIcon from '@mui/icons-material/Note';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { IconButton } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import DuoIcon from '@mui/icons-material/Duo';
import PhoneIcon from '@mui/icons-material/Phone';

const Sidebar = () => {
  return (
    <div className="sidebar">
        <Button className='sidebar_compose' startIcon={<AddIcon fontSize='large' />}>Compose</Button>

        <SidebarOption Icon={MailIcon} title='Inbox' number={54} selected={true} />
        <SidebarOption Icon={StarIcon} title='Star' number={54} />
        <SidebarOption Icon={AccessTimeIcon} title='Snoozed' number={54} />
        <SidebarOption Icon={LabelImportantIcon} title='Important' number={54} />
        <SidebarOption Icon={NearMeIcon} title='Sent' number={54} />
        <SidebarOption Icon={NoteIcon} title='Drafts' number={54} />
        <SidebarOption Icon={ExpandMoreIcon} title='More' number={54} />

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
  )
}

export default Sidebar