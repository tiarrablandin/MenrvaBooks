import { Author } from "@/app/lib/models/author";
import { BookResponse } from "@/app/lib/models/book";
import { User } from "@/app/lib/models/user";
import { Checkbox, IconButton, PencilIcon, Tooltip, Typography } from "@/providers";
import Image from "next/image";
import Link from "next/link";


export const renderBookRow = (book: BookResponse, index: number, toggleReviewed?: (bookId: number) => void) => {
    return (
        <tr key={index}>
            <td className="pl-4 py-1 border-b border-gray-300 flex">
                <Link href={`../book/${book.id}`} className="inline-block">
                    <Image
                        className="rounded-md object-center h-[6rem] w-[4rem]"
                        src={book.cover}
                        width={340}
                        height={680}
                        alt=""
                    />
                </Link>
            </td>
            <td className="border-b border-gray-300 whitespace-nowrap w-min">
                <Link href={`../book/${book.id}`} className="inline-block">
                    <Typography variant="lead" className="hover:underline underline-offset-2 w-min">
                        {book.title}
                    </Typography>
                </Link>
            </td>
            <td className="border-b border-gray-300 mr-2">
                {book.authors[0] ? (
                    <Link href={`../author/${book.authors[0].id}`}>
                        <Typography variant="lead" className="hover:underline text-center underline-offset-2">
                            {book.authors[0].penName}
                        </Typography>
                    </Link>
                ) : (
                    ""
                )}
            </td>
            <td className="mx-auto text-center pr-2 border-b border-gray-300">
                <Typography variant="lead">{book.dateAdded.toString()}</Typography>
            </td>
            <td className="mx-auto text-center pr-2 border-b border-gray-300">
                {
                    toggleReviewed &&
                    <Checkbox
                        onChange={() => toggleReviewed(book.id)}
                        checked={book.reviewed}
                        className="checked:bg-eggplant border-eggplant before:h-8 before:w-8"
                    />
                }
            </td>
            <td className="text-center mx-auto pr-2 border-b border-gray-300">
                <Tooltip content="Edit Book">
                    <Link href={`/admin/books/${book.id}`}>
                        <IconButton variant="text">
                            <PencilIcon className="w-4 h-4 text-eggplant" />
                        </IconButton>
                    </Link>
                </Tooltip>
            </td>
        </tr>
    );
};


export const renderAuthorRow = (author: Author, index: number, toggleReviewed?: (authorId: number) => void) => (
    <tr key={index}>
        <td className="border-b border-gray-300 whitespace-nowrap w-min pl-5">
            <Link href={`../author/${author.id}`} className="inline-block">
                <Typography variant="lead" className="hover:underline underline-offset-2">
                    {author.user ? author.user.tag : 'Anonymous'}
                </Typography>
            </Link>
        </td>
        <td className="border-b border-gray-300 whitespace-nowrap">
            <Link href={`../author/${author.id}`} className="inline-block">
                <Typography variant="lead" className="hover:underline underline-offset-2 w-min">
                    {author.penName ? author.penName : "any"}
                </Typography>
            </Link>
        </td>
        <td className="pl-7 border-b border-gray-300">
            {author.dateAdded ? <Typography variant="lead">{author.dateAdded.toString()}</Typography> : <></>}
        </td>
        <td className="mx-auto pl-9 border-b border-gray-300 ">
            {
                toggleReviewed &&
                <Checkbox
                    onChange={() => toggleReviewed(author.id)}
                    checked={author.reviewed}
                    className="checked:bg-eggplant border-eggplant before:h-8 before:w-8"
                />
            }
        </td>
        <td className=" mx-auto pl-5 border-b border-gray-300">
            <Tooltip content="Edit Author">
                <IconButton variant="text">
                    <PencilIcon className="w-4 h-4 text-eggplant" />
                </IconButton>
            </Tooltip>
        </td>
    </tr>
);

export const renderUserRow = (user: User, index: number) => (
    <tr key={index}>
        <td className="border-b border-gray-300 whitespace-nowrap w-min pl-5">
            <Link href={`../user/${user.id}`} className="inline-block">
                <Typography variant="lead" className="hover:underline underline-offset-2">
                    {user.tag}
                </Typography>
            </Link>
        </td>
        <td className="border-b border-gray-300 whitespace-nowrap">
            <Link href={`../user/${user.id}`} className="inline-block">
                <Typography variant="lead" className="hover:underline underline-offset-2 w-min">
                    {`${user.firstName} ${user.lastName}`}
                </Typography>
            </Link>
        </td>
        <td className="pl-7 border-b border-gray-300">
            {user.dateAdded ? <Typography variant="lead">{user.dateAdded.toString()}</Typography> : <></>}
        </td>
        <td className=" mx-auto pl-5 border-b border-gray-300">
            <Tooltip content="Edit User">
                <IconButton variant="text">
                    <PencilIcon className="w-4 h-4 text-eggplant" />
                </IconButton>
            </Tooltip>
        </td>
    </tr>
);