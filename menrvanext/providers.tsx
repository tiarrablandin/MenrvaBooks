"use client";

export { faLinkedin } from "@fortawesome/free-brands-svg-icons";
export { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export {
  HistoryEduOutlined,
  ThumbDown,
  ThumbDownAltOutlined,
  ThumbUp,
  ThumbUpAltOutlined
} from "@mui/icons-material";

export {
  AtSymbolIcon,
  Bars3Icon,
  BellIcon as BellIconOutline,
  BookOpenIcon as BookOpenOutline,
  BookmarkIcon as BookmarkIconOutline,
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
  StarIcon,
  TableCellsIcon,
  UserCircleIcon,
  XMarkIcon
} from "@heroicons/react/24/outline";
export {
  ArrowLeftIcon,
  ArrowLeftStartOnRectangleIcon, ArrowRightEndOnRectangleIcon, ArrowRightIcon, ArrowUpTrayIcon,
  BellIcon,
  BookOpenIcon as BookOpenSolid,
  BookmarkIcon as BookmarkIconSolid,
  CheckCircleIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  CreditCardIcon,
  EyeIcon,
  EyeSlashIcon,
  HeartIcon,
  HomeIcon,
  InboxArrowDownIcon,
  KeyIcon,
  LifebuoyIcon,
  MagnifyingGlassIcon,
  MoonIcon,
  PencilIcon,
  PhoneIcon,
  PlusIcon,
  ShieldCheckIcon, Squares2X2Icon, SunIcon, TicketIcon,
  TrashIcon,
  UserIcon
} from "@heroicons/react/24/solid";
export {
  Accordion, AccordionBody, AccordionHeader, Alert,
  Avatar,
  Button,
  Card,
  CardBody, CardFooter, CardHeader, Checkbox,
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
  Menu, MenuHandler, MenuItem,
  MenuList, MobileNav,
  Navbar,
  Option,
  Select,
  Switch, Tab,
  TabPanel, Tabs, TabsBody, TabsHeader, Textarea,
  ThemeProvider,
  Timeline, TimelineBody, TimelineConnector,
  TimelineHeader,
  TimelineIcon, TimelineItem, Tooltip,
  Typography
} from "@material-tailwind/react";

export const eggplant = "#673C4F";

import { Provider } from "react-redux";
import { store } from "./app/lib/store/store";

export default function ReduxProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}> {children} </Provider>;
}
