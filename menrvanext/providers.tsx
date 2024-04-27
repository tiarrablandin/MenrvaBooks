"use client";

export { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  HistoryEduOutlined,
  ThumbDown,
  ThumbDownAltOutlined,
  ThumbUp,
  ThumbUpAltOutlined,
} from "@mui/icons-material";

export {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Alert,
  Avatar,
  Button,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Checkbox,
  Chip,
  Collapse,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  IconButton,
  Input,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Menu,
  MenuItem,
  MenuList,
  MenuHandler,
  MobileNav,
  Navbar,
  Option,
  Select,
  Switch,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Textarea,
  ThemeProvider,
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
export {
  ArrowLeftIcon,
  ArrowLeftStartOnRectangleIcon,
  ArrowRightIcon,
  ArrowRightEndOnRectangleIcon,
  ArrowUpTrayIcon,
  BellIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  CreditCardIcon,
  HeartIcon,
  HomeIcon,
  InboxArrowDownIcon,
  KeyIcon,
  LifebuoyIcon,
  MagnifyingGlassIcon,
  MoonIcon,
  PencilIcon,
  PhoneIcon,
  ShieldCheckIcon,
  SunIcon,
  Squares2X2Icon,
  TicketIcon,
  TrashIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
export {
  AtSymbolIcon,
  Bars3Icon,
  BellIcon as BellIconOutline,
  BookOpenIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  Cog6ToothIcon as Cog6ToothIconOutline,
  CreditCardIcon as CreditCardIconOutline,
  EnvelopeIcon,
  ExclamationCircleIcon,
  HomeIcon as HomeIconOutline,
  KeyIcon as KeyIconOutline,
  ShieldCheckIcon as ShieldCheckIconOutline,
  SparklesIcon,
  UserCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

export { HistoryEduOutlined, ThumbDown, ThumbDownAltOutlined, ThumbUp, ThumbUpAltOutlined };

export const eggplant = "#673C4F";

import { Provider } from "react-redux";
import { store } from "./app/lib/store/store";

export default function ReduxProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
