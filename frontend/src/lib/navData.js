import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InfoIcon from '@mui/icons-material/Info';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PolicyIcon from '@mui/icons-material/Policy';
import HelpIcon from '@mui/icons-material/Help';
import BalanceIcon from '@mui/icons-material/Balance';

import TaskIcon from '@mui/icons-material/Task';
import EditNoteIcon from '@mui/icons-material/EditNote';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';

export const userNavData = [
    {
        id: 0,
        icon: <HomeIcon/>,
        text: "Logged in as User",
        link: "/"
    }, 
    {  
        id: 1,
        icon: <DashboardIcon />,
        text: "Dashboard",
        link: 'dashboard'
    },
    {  
        id: 2,
        icon: <InfoIcon />,
        text: "About Us",
        link: 'aboutus'
    },
    {  
        id: 3,
        icon: <NotificationsIcon />,
        text: "Notification",
        link: 'notification'
    },
    {  
        id: 4,
        icon: <PolicyIcon />,
        text: "Privacy Policy",
        link: 'privacypolicy'
    },
    {
        id: 5,
        icon: <HelpIcon/>,
        text: "Help",
        link: "help"
    },
    {
        id: 6,
        icon: <BalanceIcon/>,
        text: "Balance",
        link: "balance"
    },
    {
        id: 7,
        icon: <SettingsIcon/>,
        text: "Settings",
        link: "settings"
    }
]

export const CommitteeNavData = [
    {
        id: 0,
        icon: <HomeIcon/>,
        text: "Committee Member ",
        link: "/"
    }, 
    {  
        id: 1,
        icon: <TaskIcon />,
        text: "Tasks",
        link: 'tasks'
    },
    {  
        id: 2,
        icon: <EditNoteIcon />,
        text: "Meeting Notes",
        link: 'notes'
    },
    {  
        id: 3,
        icon: <NotificationsIcon />,
        text: "Notifications",
        link: 'notifications'
    },
    {  
        id: 4,
        icon: <PolicyIcon />,
        text: "Privacy Policy",
        link: 'privacypolicy'
    },
    {  
        id: 5,
        icon: <HelpIcon />,
        text: "Help",
        link: 'help'
    },
    {  
        id: 6,
        icon: <LocalGroceryStoreIcon />,
        text: "Sales",
        link: 'sales'
    },
    {  
        id: 7,
        icon: <SettingsIcon />,
        text: "Settings",
        link: 'settings'
    },
]