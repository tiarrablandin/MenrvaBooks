import { Bars3Icon, BellIcon, Collapse, IconButton, XMarkIcon } from "@/providers/coreProviders";
import ReduxProvider from "@/providers/reduxProvider";
import React, { useEffect } from "react";
import AdvancedSearch from "../search/advancedSearch";
import ThemeToggle from "../theme/themeToggle";
import ProfileMenu from "./profileMenu";

export default function CollapseNav({ tag, role, theme }: { tag: string, role: string, theme: string }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  useEffect(() => {
    // useRestoreSession();
    window.addEventListener("resize", () => window.innerWidth >= 960 && setOpen(false));
  }, []);

  return (
    <>
      <IconButton
        size="sm"
        variant="text"
        color="gray"
        onClick={handleOpen}
        className="ml-auto inline-block lg:hidden"
      >
        {open ? (
          <XMarkIcon className="h-6 w-6" strokeWidth={2} />
        ) : (
          <Bars3Icon className="h-6 w-6" strokeWidth={2} />
        )}
      </IconButton>
      <Collapse open={open} className="hidden">
        <div className="flex flex-wrap items-center gap-2">
          <IconButton variant="text">
            <BellIcon className="h-5 w-5 text-eggplant dark:text-old-lace" />
          </IconButton>
          <ProfileMenu tag={tag} role={role} />
          <ReduxProvider>
            <AdvancedSearch />
          </ReduxProvider>
          <ThemeToggle />
        </div>
      </Collapse>
    </>
  )
}