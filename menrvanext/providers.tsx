"use client";

export {
  Alert,
  Button,
  Card,
  CardBody,
  Collapse,
  Dialog,
  IconButton,
  Input,
  List,
  ListItem,
  MobileNav,
  Navbar,
  ThemeProvider,
  Typography,
} from "@material-tailwind/react";
export { MagnifyingGlassIcon, HomeIcon, UserIcon, ArrowRightEndOnRectangleIcon, ArrowLeftStartOnRectangleIcon } from "@heroicons/react/20/solid"
export { ArrowRightIcon } from "@heroicons/react/24/solid"
export { AtSymbolIcon, ExclamationCircleIcon, KeyIcon, XMarkIcon } from '@heroicons/react/24/outline';

import { Provider } from "react-redux";
import { store } from "./app/lib/store/store";

export default function ReduxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Provider store={store}>{children}</Provider>;
}


