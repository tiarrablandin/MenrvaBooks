"use client";

export {
  ThemeProvider,
  Typography,
  Button,
  List,
  Card,
  CardBody,
  ListItem,
} from "@material-tailwind/react";
import { Provider } from "react-redux";
import { store } from "./app/lib/store/store";

export default function ReduxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Provider store={store}>{children}</Provider>;
}
