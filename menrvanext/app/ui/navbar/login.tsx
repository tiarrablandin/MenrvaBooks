'use client';

import { useAppDispatch } from '@/app/lib/store/store';
import { login, selectCurrentUser, selectUserError, selectUserLoading } from '@/app/lib/store/userSlice';
import { Alert, ArrowRightIcon, AtSymbolIcon, Button, ExclamationCircleIcon, KeyIcon, Typography, XMarkIcon } from '@/providers';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useSelector } from 'react-redux';


interface LoginFormProps {
}

const LoginForm: React.FC<LoginFormProps> = ({ }) => {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const currentUser = useSelector(selectCurrentUser);
    const errorMessage = useSelector(selectUserError);

    const [tag, setTag] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(login({ tag, password }));
        router.push("/user");
    }

    const handleClose = () => { router.back(); }

    // if (currentUser) {
    //     router.push("/user");
    //     return <Alert color="blue">An info alert for showing message.</Alert>
    // }

    return (
        <>
            <form onSubmit={handleSubmit} className="space-y-2 container m-0">
                <div className="flex-1 rounded-lg bg-gray-50 px-6 py-8 mx-auto h-full my-auto">
                    <XMarkIcon className="w-5 h-5 cursor-pointer text-black inline-block -mt-8 -ml-2 mb-2" onClick={handleClose} />
                    <Typography className={`mb-3 text-center text-4xl text-gray-900 font-medium`}>
                        Please log in to continue
                    </Typography>
                    <div className="w-full text-gray-900 mt-7">
                        <div>
                            <label
                                className="mb-3 mt-5 block text-sm font-medium"
                                htmlFor="tag"
                            >
                                <Typography className={`mb-3 text-xl font-medium`}>
                                    Tag
                                </Typography>
                            </label>
                            <div className="relative">
                                <input
                                    className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-md outline-2 placeholder:text-gray-500"
                                    id="tag"
                                    type="tag"
                                    value={tag}
                                    name="tag"
                                    placeholder="Enter your tag"
                                    onChange={(e) => setTag(e.target.value)}
                                    required
                                />
                                <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                            </div>
                        </div>
                        <div className="mt-8">
                            <label
                                className="mb-3 mt-5 block text-xl"
                                htmlFor="password"
                            >
                                <Typography className={`mb-3 text-lg font-medium text-eggplant`}>
                                    Password
                                </Typography>
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
            </form >
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