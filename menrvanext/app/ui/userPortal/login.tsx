'use client';

import { useAppDispatch } from '@/app/lib/store/store';
import { login, selectCurrentUser, selectUserError, selectUserLoading } from '@/app/lib/store/userSlice';
import { Alert, ArrowRightIcon, AtSymbolIcon, Button, Dialog, ExclamationCircleIcon, KeyIcon, Typography, XMarkIcon } from '@/providers';
import { Lusitana } from 'next/font/google';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const lusitana = Lusitana({ subsets: ["latin"], weight: "400" });

interface LoginFormProps { }

const LoginForm: React.FC<LoginFormProps> = ({ }) => {
    const nav = useRouter();
    const dispatch = useAppDispatch();
    const currentUser = useSelector(selectCurrentUser);
    const errorMessage = useSelector(selectUserError);

    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const handleOpen = () => setIsLoginModalOpen((cur) => !cur);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(login({ username, password }));
        nav.push("/user");
        handleOpen();
    }

    if (currentUser) {
        nav.push("/user");
        return <Alert color="blue">An info alert for showing message.</Alert>
    }

    return (
        <>
            <Typography as={"a"} variant='small' onClick={handleOpen} className="flex items-center gap-x-2 mt-1 text-[#673C4F] cursor-pointer font-normal text-base">Login</Typography>
            <Dialog size='xl' open={isLoginModalOpen} handler={handleOpen} className='bg-transparent shadow-none w-full'>
                <form onSubmit={handleSubmit} className="space-y-3 h-full my-auto">
                    <div className="flex-1 rounded-lg bg-gray-50 px-6 py-8 mx-auto w-1/3 h-full my-auto ">
                        <XMarkIcon className="w-5 h-5 cursor-pointer text-black inline-block -mt-8 -ml-2 mb-2" onClick={handleOpen} />
                        <h1 className={`${lusitana.className} mb-3 text-center text-3xl text-gray-900`}>
                            Please log in to continue
                        </h1>
                        <div className="w-full text-gray-900 mt-7">
                            <div>
                                <label
                                    className="mb-3 mt-5 block text-sm font-medium text-gray-900"
                                    htmlFor="username"
                                >
                                    Username
                                </label>
                                <div className="relative">
                                    <input
                                        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-md outline-2 placeholder:text-gray-500"
                                        id="username"
                                        type="username"
                                        value={username}
                                        name="username"
                                        placeholder="Enter your username"
                                        onChange={(e) => setUsername(e.target.value)}
                                        required
                                    />
                                    <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                                </div>
                            </div>
                            <div className="mt-8">
                                <label
                                    className="mb-3 mt-5 block text-sm font-medium text-gray-900"
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
                                        placeholder="Enter password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                    <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                                </div>
                            </div>
                        </div>
                        <LoginButton />
                        <div className="flex h-3 items-end space-x-1">
                            <div
                                className="flex h-5 items-end space-x-1"
                                aria-live="polite"
                                aria-atomic="true"
                            >
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
}

function LoginButton() {
    const isLoading = useSelector(selectUserLoading);

    return (
        <Button type='submit' className="mt-20 w-full flex flex-row justify-center items-center shadow-md" aria-disabled={isLoading} disabled={isLoading}>
            <Typography variant='h4' className='mt-1 font-normal'>
                {isLoading ? "Logging in..." : "Log In"}
            </Typography>
            <ArrowRightIcon className="ml-auto h-6 w-6 text-gray-50" />
        </Button>
    );
}

export default LoginForm;