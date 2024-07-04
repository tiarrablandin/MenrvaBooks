'use client'

import { useAppStore } from "@/lib/store/store";
import { useEffect, useRef } from "react";
import { setToken, setUserDetails } from "../store/features/userSlice";

const InitializeFromCookies: React.FC = () => {
  const store = useAppStore();
  const initialized = useRef(false);

  useEffect(() => {
    const fetchCookies = async () => {
      const res = await fetch('/api/validateToken');
      const { user, jwt } = await res.json();
      store.dispatch(setUserDetails(user))
      store.dispatch(setToken(jwt))
    }

    if (!initialized.current) {
      fetchCookies();
      initialized.current = true;
    }
  }, [initialized, store])

  return (
    <></>
  )
}

export default InitializeFromCookies;