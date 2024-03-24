"use client";

export {
  Button,
  Card,
  CardBody,
  Collapse,
  IconButton,
  Input,
  List,
  ListItem,
  MobileNav,
  Navbar,
  ThemeProvider,
  Typography,
} from "@material-tailwind/react";
export { MagnifyingGlassIcon, HomeIcon, UserIcon, ArrowRightEndOnRectangleIcon } from "@heroicons/react/20/solid"
export { ArrowRightIcon } from "@heroicons/react/24/solid"
export { AtSymbolIcon, ExclamationCircleIcon, KeyIcon, } from '@heroicons/react/24/outline';

import { Provider } from "react-redux";
import { store } from "./app/lib/store/store";

export default function ReduxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Provider store={store}>{children}</Provider>;
}

