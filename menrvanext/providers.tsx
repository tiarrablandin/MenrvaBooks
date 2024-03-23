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
export{ HomeIcon } from "@heroicons/react/20/solid"

import { Provider } from "react-redux";
import { store } from "./app/lib/store/store";

export default function ReduxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Provider store={store}>{children}</Provider>;
}


