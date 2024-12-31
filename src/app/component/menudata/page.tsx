import {
    People,
    ListAlt,
    Category,
    MonetizationOn,
    Payment,
    // Search,
    Group as GroupIcon,
    Dashboard as DashboardIcon,
    LocalAtm as LocalAtmIcon,
  } from "@mui/icons-material";
  import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
  import AssignmentIcon from '@mui/icons-material/Assignment';
  import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
// import BadgeIcon from '@mui/icons-material/Badge';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import Groups2Icon from '@mui/icons-material/Groups2';
const MenuData = [
    { label: "Dashboard", icon: <DashboardIcon />, path: "/" },
    {
      label: "Student Information",
      icon: <ListAlt />,
      path: "student",
      children: [
        {
          label: "Student Admission",
          icon: <People />,
          path: "student/admission",
        },
        {
          label: "Student Details",
          icon: <People />,
          path: "student/information",
        },
       
        {
          label: "Student Categories",
          icon: <Category />,
          path: "student/categories",
        },
      ],
    },
  ];
  
  
  export default MenuData;