'use client';

import { useAppDispatch } from '@/app/lib/store/store';
import { login } from '@/app/lib/store/userSlice';
import { ArrowRightIcon, AtSymbolIcon, Button, KeyIcon, Typography } from '@/providers';
import { Lusitana } from 'next/font/google';
import { useFormStatus } from 'react-dom';

const lusitana = Lusitana({ subsets: ["latin"], weight: "400" });

export default function LoginForm() {
    const dispatch = useAppDispatch();
    // const [errorMessage, dispatch] = useFormState(login, undefined);
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const username = formData.get('username') as string;
        const password = formData.get('password') as string;
        console.log("USERNAME: ", username + "\tPASSWORD: ", password);
        dispatch(login({ username, password }))
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-3">
            <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8 mx-auto w-1/3">
                <h1 className={`${lusitana.className} mb-3 text-2xl text-gray-900`}>
                    Please log in to continue.
                </h1>
                <div className="w-full text-gray-900">
                    <div>
                        <label
                            className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                            htmlFor="username"
                        >
                            Username
                        </label>
                        <div className="relative">
                            <input
                                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                id="username"
                                type="username"
                                name="username"
                                placeholder="Enter your username"
                                required
                            />
                            <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                        </div>
                    </div>
                    <div className="mt-4">
                        <label
                            className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                            htmlFor="password"
                        >
                            Password
                        </label>
                        <div className="relative">
                            <input
                                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                id="password"
                                type="password"
                                name="password"
                                placeholder="Enter password"
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
                        {/* {errorMessage && (
                            <>
                                <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                                <p className="text-sm text-red-500">{errorMessage}</p>
                            </>
                        )} */}
                    </div>
                </div>
            </div>
        </form>
    );
}

function LoginButton() {
    const { pending } = useFormStatus();

    return (
        <Button type='submit' className="mt-6 w-full flex flex-row justify-center items-center" aria-disabled={pending}>
            <Typography variant='h4' className='mt-1 font-light'>
                Log in
            </Typography>
            <ArrowRightIcon className="ml-auto h-6 w-6 text-gray-50" />
        </Button>
    );
}
