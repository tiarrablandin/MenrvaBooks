"use client";

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
  IconButton,
  Input,
  List,
  ListItem,
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
  ArrowRightEndOnRectangleIcon,
  ArrowLeftStartOnRectangleIcon,
  CheckCircleIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/20/solid";
export {
  ArrowLeftIcon,
  ArrowRightIcon,
  BellIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  MagnifyingGlassIcon,
  MoonIcon,
  PencilIcon,
  PhoneIcon,
  SunIcon,
  Squares2X2Icon,
  TicketIcon,
} from "@heroicons/react/24/solid";
export {
  AtSymbolIcon,
  Bars3Icon,
  ChevronLeftIcon,
  ChevronRightIcon,
  EnvelopeIcon,
  ExclamationCircleIcon,
  KeyIcon,
  UserCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

export const eggplant = "#673C4F";

import { Provider } from "react-redux";
import { store } from "./app/lib/store/store";

export default function ReduxProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
