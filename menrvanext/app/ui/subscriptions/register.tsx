"use client";

import { useAppDispatch } from "@/app/lib/store/store";
import { selectCurrentUser, selectUserError, selectUserLoading } from "@/app/lib/store/userSlice";
import {
  Alert,
  ArrowRightIcon,
  AtSymbolIcon,
  Button,
  Dialog,
  EnvelopeIcon,
  ExclamationCircleIcon,
  KeyIcon,
  Typography,
  UserCircleIcon,
  XMarkIcon,
} from "@/providers";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useSelector } from "react-redux";

interface RegisterFormProps {}

const RegisterForm: React.FC<RegisterFormProps> = ({}) => {
  const nav = useRouter();
  const dispatch = useAppDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const errorMessage = useSelector(selectUserError);

  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  // const [tag, setTag] = useState("");
  const [password, setPassword] = useState("");

  const handleOpen = () => setIsRegisterModalOpen((cur) => !cur);

  const isLoading = useSelector(selectUserLoading);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // dispatch(register({ email, firstName, lastName, tag, password }));
    nav.push("/user");
    handleOpen();
  };

  if (currentUser) {
    nav.push("/home");
    return <Alert color="blue">An info alert for showing message.</Alert>;
  }

  return (
    <>
      <Button
        type="submit"
        className="mt-20 w-full flex flex-row justify-center items-center shadow-md bg-eggplant"
        aria-disabled={isLoading}
        disabled={isLoading}
      >
        <Typography
          as={"a"}
          variant="small"
          onClick={handleOpen}
          className="mt-1 font-normal text-old-lace"
        >
          {isLoading ? "Registering..." : "Sign Up"}
        </Typography>
      </Button>
      <Dialog
        size="xl"
        open={isRegisterModalOpen}
        handler={handleOpen}
        className="bg-transparent shadow-none w-full"
      >
        <form onSubmit={handleSubmit} className="space-y-3 h-full my-auto">
          <div className="flex-1 rounded-lg bg-pink-lavender/70 px-6 py-8 mx-auto w-2/5 h-full my-auto ">
            <XMarkIcon
              className="w-5 h-5 cursor-pointer inline-block -mt-8 -ml-2 mb-2 text-eggplant"
              onClick={handleOpen}
            />
            <h1 className={`mb-3 text-center text-2xl text-eggplant`}>Register for an account.</h1>
            <div className="w-full mt-7">
              <div>
                <label
                  className="mb-3 mt-5 block text-sm font-medium text-eggplant"
                  htmlFor="email"
                >
                  Email
                </label>
                <div className="relative">
                  <input
                    className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-md outline-2 placeholder:text-gray-500"
                    id="email"
                    type="email"
                    value={email}
                    name="email"
                    placeholder="email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <EnvelopeIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                </div>
              </div>
              <div>
                <label
                  className="mb-3 mt-5 block text-sm font-medium text-eggplant"
                  htmlFor="firstName"
                >
                  First Name
                </label>
                <div className="relative">
                  <input
                    className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-md outline-2 placeholder:text-gray-500"
                    id="firstName"
                    type="firstName"
                    value={firstName}
                    name="firstName"
                    placeholder="first name"
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                  <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                </div>
              </div>
              <div>
                <label
                  className="mb-3 mt-5 block text-sm font-medium text-eggplant"
                  htmlFor="lastName"
                >
                  Last Name
                </label>
                <div className="relative">
                  <input
                    className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-md outline-2 placeholder:text-gray-500"
                    id="lastName"
                    type="lastName"
                    value={lastName}
                    name="lastName"
                    placeholder="last name"
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                  <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                </div>
              </div>
              <div>
                <label className="mb-3 mt-5 block text-sm font-medium text-eggplant" htmlFor="tag">
                  Tag
                </label>
                <div className="relative">
                  <input
                    className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-md outline-2 placeholder:text-gray-500"
                    id="tag"
                    type="tag"
                    // value={tag}
                    name="tag"
                    placeholder="tag"
                    // onChange={(e) => setTag(e.target.value)}
                    required
                  />
                  <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                </div>
              </div>
              <div className="mt-8">
                <label
                  className="mb-3 mt-5 block text-sm font-medium text-eggplant"
                  htmlFor="password"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-md outline-2 placeholder:text-gray-500"
                    id="password"
                    type="password"
                    name="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                </div>
              </div>
              <div className="mt-8">
                <label
                  className="mb-3 mt-5 block text-sm font-medium text-eggplant"
                  htmlFor="password"
                >
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-md outline-2 placeholder:text-gray-500"
                    id="password"
                    type="password"
                    name="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                </div>
              </div>
            </div>
            <RegisterButton />
            <div className="flex h-3 items-end space-x-1">
              <div className="flex h-5 items-end space-x-1" aria-live="polite" aria-atomic="true">
                {errorMessage && (
                  <>
                    <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                    <p className="text-sm text-red-500">{errorMessage}</p>
                  </>
                )}
              </div>
            </div>
          </div>
        </form>
      </Dialog>
    </>
  );
};

function RegisterButton() {
  const isLoading = useSelector(selectUserLoading);

  return (
    <Button
      type="submit"
      className="mt-20 w-full flex flex-row justify-center items-center shadow-md bg-eggplant"
      aria-disabled={isLoading}
      disabled={isLoading}
    >
      <Typography variant="h4" className="mt-1 font-normal text-old-lace">
        {isLoading ? "Registering..." : "Sign Up"}
      </Typography>
      <ArrowRightIcon className="ml-auto h-6 w-6 text-old-lace" />
    </Button>
  );
}

export default RegisterForm;
