'use client'

import { useAppStore } from "@/lib/store/store";
import { useEffect, useRef } from "react";
import { fetchBookDetailsThunk } from "../store/features/bookSlice";

const InitializeBookDetails: React.FC<{bookId: number}> = ({bookId}) => {
  const store = useAppStore();
  const initialized = useRef(false);

  useEffect(() => {
    const setBookDetails = async () => {
      store.dispatch(fetchBookDetailsThunk({bookId}))
    }

    if (!initialized.current) {
      setBookDetails();
      initialized.current = true;
    }
  }, [initialized, store])

  return (
    <></>
  )
}

export default InitializeBookDetails;