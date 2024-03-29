"use client";

export {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Alert,
  Button,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Checkbox,
  Collapse,
  Dialog,
  IconButton,
  Input,
  List,
  ListItem,
  MobileNav,
  Navbar,
  ThemeProvider,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
export { MagnifyingGlassIcon, HomeIcon, UserIcon, ArrowRightEndOnRectangleIcon, ArrowLeftStartOnRectangleIcon } from "@heroicons/react/20/solid"
export { ArrowRightIcon, ChevronDownIcon } from "@heroicons/react/24/solid"
export { AtSymbolIcon, ExclamationCircleIcon, KeyIcon, XMarkIcon, } from '@heroicons/react/24/outline';

import { Provider } from "react-redux";
import { store } from "./app/lib/store/store";

export default function ReduxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Provider store={store}>{children}</Provider>;
}


