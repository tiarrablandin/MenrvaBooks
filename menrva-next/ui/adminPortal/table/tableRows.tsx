"use client";

import { Author } from "@/lib/models/author";
import { BookResponse } from "@/lib/models/book";
import { Comment } from "@/lib/models/comment";
import { Genre } from "@/lib/models/genre";
import { Keyword } from "@/lib/models/keyword";
import { Series } from "@/lib/models/series";
import { Subgenre } from "@/lib/models/subgenre";
import { User } from "@/lib/models/user";
import { deleteCommentThunk } from "@/lib/store/features/commentSlice";
import { updateGenreThunk } from "@/lib/store/features/genreSlice";
import { updateKeywordThunk } from "@/lib/store/features/keywordSlice";
import { updateSubgenreThunk } from "@/lib/store/features/subgenreSlice";
import { updateTagThunk } from "@/lib/store/features/tagSlice";
import { useAppDispatch } from "@/lib/store/store";
import {
	Checkbox,
	IconButton,
	Input,
	PencilIcon,
	Tooltip,
	TrashIcon,
	XMarkIcon
} from "@/providers/coreProviders";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const renderBookRow = (
	book: BookResponse,
	index: number,
	toggleReviewed?: (bookId: number) => void,
	toggleActive?: (bookId: number) => void,
	deleteEntity?: (bookId: number) => any,
) => {
	return (
		<tr key={index}>
			<td className="pl-4 py-1 border-b border-parchment/20 flex justify-center">
				<Link href={`../book/${book.id}`} className="inline-block">
					<Image
						className="rounded-md object-center h-[6rem] w-[4rem] mr-4"
						src={book.cover}
						width={340}
						height={680}
						alt=""
					/>
				</Link>
			</td>
			<td className="border-b border-parchment/20 whitespace-nowrap w-min">
				<Link href={`../book/${book.id}`} className="inline-block">
					<p className="hover:underline underline-offset-2 w-min">
						{book.title}
					</p>
				</Link>
			</td>
			<td className="border-b border-parchment/20 mr-2">
				{book.authors[0] ? (
					<Link href={`../author/${book.authors[0].id}`}>
						<p className="hover:underline text-center underline-offset-2">
							{book.authors[0].penName}
						</p>
					</Link>
				) : (
					""
				)}
			</td>
			<td className="mx-auto text-center pr-2 border-b border-parchment/20">
				<p>{book.dateAdded.toString()}</p>
			</td>
			<td className="mx-auto text-center pr-2 border-b border-parchment/20">
				{toggleReviewed && (
					<Checkbox
						onChange={() => toggleReviewed(book.id)}
						checked={book.reviewed}
						className="checked:bg-eggplant dark:checked:bg-rose/70 border-eggplant dark:border-rose/70 before:h-8 before:w-8"
					/>
				)}
			</td>
			<td className="text-center mx-auto pr-2 border-b border-parchment/20">
				<Tooltip content="Edit Book">
					<Link href={`/admin/updateBook/${book.id}`}>
						<IconButton variant="text" className="rounded-full">
							<PencilIcon className="w-4 h-4 text-eggplant dark:text-rose/70" />
						</IconButton>
					</Link>
				</Tooltip>
			</td>
			<td className="text-center mx-auto pr-2 border-b border-parchment/20">
				{deleteEntity && (
					<Tooltip content="Delete Book">
						<IconButton variant="text" className="rounded-full" onClick={() => deleteEntity(book.id)}>
							<TrashIcon className="w-4 h-4 text-eggplant dark:text-rose/70" />
						</IconButton>
					</Tooltip>
				)}
			</td>
		</tr>
	);
};

export const renderAuthorRow = (
	author: Author,
	index: number,
	toggleReviewed?: (authorId: number) => void,
	toggleActive?: (authorId: number) => void,
	deleteEntity?: (authord: number) => any,
) => (
	<tr key={index}>
		<td className="border-b border-parchment/20 whitespace-nowrap w-min">
			<Link href={`../author/${author.id}`} className="inline-block">
				<p className="hover:underline underline-offset-2">
					{author.user ? author.user.tag : "n/a"}
				</p>
			</Link>
		</td>
		<td className="border-b border-parchment/20 whitespace-nowrap">
			<Link href={`../author/${author.id}`} className="inline-block">
				<p className="hover:underline underline-offset-2 w-min">
					{author.penName ? author.penName : "any"}
				</p>
			</Link>
		</td>
		<td className="border-b border-parchment/20">
			{author.dateAdded ? (
				<p>{author.dateAdded.toString()}</p>
			) : (
				<></>
			)}
		</td>
		<td className="mx-auto border-b border-parchment/20">
			{toggleReviewed && (
				<Checkbox
					onChange={() => toggleReviewed(author.id)}
					checked={author.reviewed}
					className="checked:bg-eggplant dark:checked:bg-rose/70 border-eggplant dark:border-rose/70 before:h-8 before:w-8"
				/>
			)}
		</td>
		<td className="mx-auto border-b border-parchment/20">
			<Tooltip content="Edit Author">
				<Link href={`/admin/updateAuthor/${author.id}`}>
					<IconButton variant="text" className="rounded-full">
						<PencilIcon className="w-4 h-4 text-eggplant dark:text-rose/70" />
					</IconButton>
				</Link>
			</Tooltip>
		</td>
		<td className="text-center mx-auto pr-2 border-b border-parchment/20">
			{deleteEntity && (
				<Tooltip content="Delete Author">
					<IconButton variant="text" className="rounded-full" onClick={() => deleteEntity(author.id)}>
						<TrashIcon className="w-4 h-4 text-eggplant dark:text-rose/70" />
					</IconButton>
				</Tooltip>
			)}
		</td>
	</tr>
);

export const renderUserRow = (
	user: User,
	index: number,
	toggleReviewed?: (id: number) => void,
	toggleActive?: (id: number) => void,
	deleteEntity?: (userId: number) => any,
) => {
	return (
		<tr key={index} className="text-center">
			<td className="border-b border-parchment/20 whitespace-nowrap w-min">
				<Link href={`../user/${user.id}`} className="inline-block">
					<p className="hover:underline underline-offset-2">
						{user.tag}
					</p>
				</Link>
			</td>
			<td className="border-b border-parchment/20 whitespace-nowrap">
				<p className="w-min inline-block">
					{`${user.firstName} ${user.lastName}`}
				</p>
			</td>
			<td className="border-b border-parchment/20 whitespace-nowrap">
				<p className="w-min inline-block">
					{user.email}
				</p>
			</td>
			<td className="border-b border-parchment/20 whitespace-nowrap">
				<p className="w-min inline-block">
					{user.subscription.level}
				</p>
			</td>
			<td className="border-b border-parchment/20">
				{user.dateAdded ? <p>{user.dateAdded.toString()}</p> : <></>}
			</td>
			<td className="border-b border-parchment/20">
				{toggleActive && (
					<Checkbox
						onChange={() => toggleActive(user.id)}
						checked={user.active}
						className="checked:bg-eggplant dark:checked:bg-rose/70 border-eggplant dark:border-rose/70 before:h-8 before:w-8"
					/>
				)}
			</td>
			<td className="border-b border-parchment/20">
				<Tooltip content="Edit User">
					<Link href={`/admin/updateUser/${user.id}`}>
						<IconButton variant="text" className="rounded-full">
							<PencilIcon className="w-4 h-4 text-eggplant dark:text-rose/70" />
						</IconButton>
					</Link>
				</Tooltip>
			</td>
			<td className="text-center mx-auto pr-2 border-b border-parchment/20">
				{deleteEntity && (
					<Tooltip content="Delete User">
						<IconButton variant="text" className="rounded-full" onClick={() => deleteEntity(user.id)}>
							<TrashIcon className="w-4 h-4 text-eggplant dark:text-rose/70" />
						</IconButton>
					</Tooltip>
				)}
			</td>
		</tr>
	);
};

export const renderGenreRow = (
	genre: Genre,
	index: number,
	toggleReviewed?: (genreId: number) => void,
	toggleActive?: (genreId: number) => void,
	deleteEntity?: (genreId: number) => any,
) => {
	const GenreRow = () => {
		const [isEditing, setIsEditing] = useState(false);
		const [name, setName] = useState(genre.name);
		const dispatch = useAppDispatch();

		const handleSubmit = () => {
			dispatch(updateGenreThunk({ id: genre.id, genreName: name }));
			setIsEditing(false);
		};

		const handleChange = (event: any) => {
			setName(event.target.value);
		};

		return (
			<tr key={index} className="text-center">
				<td className="border-b border-parchment/20 whitespace-nowrap">
					{isEditing ? (
						<div className="w-16 mr-auto ml-16">
							<form onSubmit={handleSubmit}>
								<Input
									className={`pr-8 text-center focus:!border-l-eggplant dark:focus:!border-l-rose/70 focus:!border-r-eggplant dark:focus:!border-r-rose/70 focus:!border-b-eggplant dark:focus:!border-b-rose/70 focus:!border-l-2 focus:!border-r-2 focus:!border-b-2`}
									labelProps={{
										className:
											"peer-focus:before:!border-t-eggplant peer-focus:before:!border-t-2 peer-focus:before:!border-l-eggplant peer-focus:before:!border-l-2 peer-focus:after:!border-t-eggplant peer-focus:after:!border-t-2 peer-focus:after:!border-r-eggplant peer-focus:after:!border-r-2 peer-focus:before:mt-[6px] peer-focus:after:mt-[6px]",
									}}
									size="md"
									label="Name"
									name="name"
									type="text"
									value={name}
									onChange={handleChange}
									autoFocus
								/>
							</form>
						</div>
					) : (
						<p className="">
							{genre.name}
						</p>
					)}
				</td>
				<td className="border-b border-parchment/20">
					<Tooltip content="Edit Genre">
						<IconButton
							variant="text"
							className="rounded-full"
							onClick={() => setIsEditing(!isEditing)}
						>
							<PencilIcon className="w-4 h-4 text-eggplant dark:text-rose/70" />
						</IconButton>
					</Tooltip>
				</td>
				<td className="text-center mx-auto pr-2 border-b border-parchment/20">
					{deleteEntity && (
						<Tooltip content="Delete Genre">
							<IconButton variant="text" className="rounded-full" onClick={() => deleteEntity(genre.id)}>
								<TrashIcon className="w-4 h-4 text-eggplant dark:text-rose/70" />
							</IconButton>
						</Tooltip>
					)}
				</td>
			</tr>
		);
	};

	return <GenreRow key={index} />;
};

export const renderKeywordRow = (
	keyword: Keyword,
	index: number,
	toggleReviewed?: (keywordId: number) => void,
	toggleActive?: (keywordId: number) => void,
	deleteEntity?: (keywordId: number) => any,
) => {
	const KeywordRow = () => {
		const [isEditing, setIsEditing] = useState(false);
		const [name, setName] = useState(keyword.name);
		const dispatch = useAppDispatch();

		const handleSubmit = () => {
			dispatch(updateKeywordThunk({ id: keyword.id, keywordName: name }));
			setIsEditing(false);
		};

		const handleChange = (event: any) => {
			setName(event.target.value);
		};

		return (
			<tr key={index} className="text-center">
				<td className="border-b border-parchment/20 whitespace-nowrap w-min">
					{isEditing ? (
						<div className="w-16 mr-auto ml-16">
							<form onSubmit={handleSubmit}>
								<Input
									className={`pr-8 text-center focus:!border-l-eggplant dark:focus:!border-l-rose/70 focus:!border-r-eggplant dark:focus:!border-r-rose/70 focus:!border-b-eggplant dark:focus:!border-b-rose/70 focus:!border-l-2 focus:!border-r-2 focus:!border-b-2`}
									labelProps={{
										className:
											"peer-focus:before:!border-t-eggplant peer-focus:before:!border-t-2 peer-focus:before:!border-l-eggplant peer-focus:before:!border-l-2 peer-focus:after:!border-t-eggplant peer-focus:after:!border-t-2 peer-focus:after:!border-r-eggplant peer-focus:after:!border-r-2 peer-focus:before:mt-[6px] peer-focus:after:mt-[6px]",
									}}
									size="md"
									label="Name"
									name="name"
									type="text"
									value={name}
									onChange={handleChange}
									autoFocus
								/>
							</form>
						</div>
					) : (
						<p className="">
							{keyword.name}
						</p>
					)}
				</td>
				<td className="border-b border-parchment/20">
					<Tooltip content="Edit Keyword">
						<IconButton
							variant="text"
							className="rounded-full"
							onClick={() => setIsEditing(!isEditing)}
						>
							<PencilIcon className="w-4 h-4 text-eggplant dark:text-rose/70" />
						</IconButton>
					</Tooltip>
				</td>
				<td className="text-center mx-auto pr-2 border-b border-parchment/20">
					{deleteEntity && (
						<Tooltip content="Delete Keyword">
							<IconButton variant="text" className="rounded-full" onClick={() => deleteEntity(keyword.id)}>
								<TrashIcon className="w-4 h-4 text-eggplant dark:text-rose/70" />
							</IconButton>
						</Tooltip>
					)}
				</td>
			</tr>
		);
	};

	return <KeywordRow key={index} />;
};

export const renderTagRow = (
	tag: Tag,
	index: number,
	toggleReviewed?: (tagId: number) => void,
	toggleActive?: (tagId: number) => void,
	deleteEntity?: (tagId: number) => any,
) => {
	const TagRow = () => {
		const [isEditing, setIsEditing] = useState(false);
		const [name, setName] = useState(tag.name);
		const dispatch = useAppDispatch();

		const handleSubmit = () => {
			dispatch(updateTagThunk({ id: tag.id, tagName: name }));
			setIsEditing(false);
		};

		const handleChange = (event: any) => {
			setName(event.target.value);
		};

		return (
			<tr key={index} className="text-center">
				<td className="border-b border-parchment/20 whitespace-nowrap w-min">
					{isEditing ? (
						<div className="w-16 mr-auto ml-16">
							<form onSubmit={handleSubmit}>
								<Input
									className={`pr-8 text-center focus:!border-l-eggplant dark:focus:!border-l-rose/70 focus:!border-r-eggplant dark:focus:!border-r-rose/70 focus:!border-b-eggplant dark:focus:!border-b-rose/70 focus:!border-l-2 focus:!border-r-2 focus:!border-b-2`}
									labelProps={{
										className:
											"peer-focus:before:!border-t-eggplant peer-focus:before:!border-t-2 peer-focus:before:!border-l-eggplant peer-focus:before:!border-l-2 peer-focus:after:!border-t-eggplant peer-focus:after:!border-t-2 peer-focus:after:!border-r-eggplant peer-focus:after:!border-r-2 peer-focus:before:mt-[6px] peer-focus:after:mt-[6px]",
									}}
									size="md"
									label="Name"
									name="name"
									type="text"
									value={name}
									onChange={handleChange}
									autoFocus
								/>
							</form>
						</div>
					) : (
						<p className="">
							{tag.name}
						</p>
					)}
				</td>
				<td className="border-b border-parchment/20">
					<Tooltip content="Edit Tag">
						<IconButton
							variant="text"
							className="rounded-full"
							onClick={() => setIsEditing(!isEditing)}
						>
							<PencilIcon className="w-4 h-4 text-eggplant dark:text-rose/70" />
						</IconButton>
					</Tooltip>
				</td>
				<td className="text-center mx-auto pr-2 border-b border-parchment/20">
					{deleteEntity && (
						<Tooltip content="Delete Book">
							<IconButton variant="text" className="rounded-full" onClick={() => deleteEntity(tag.id)}>
								<TrashIcon className="w-4 h-4 text-eggplant dark:text-rose/70" />
							</IconButton>
						</Tooltip>
					)}
				</td>
			</tr>
		);
	};
	return <TagRow key={index} />;
};

export const renderSeriesRow = (
	series: Series,
	index: number,
	toggleReviewed?: (seriesId: number) => void,
	toggleActive?: (seriesId: number) => void,
	deleteEntity?: (seriesId: number) => any,
) => (
	<tr key={index} className="text-center">
		<td className="border-b border-parchment/20 whitespace-nowrap w-min">
			<Link href={`../series/${series.id}`} className="inline-block">
				<p className="hover:underline underline-offset-2">
					{series.name}
				</p>
			</Link>
		</td>
		<td className="border-b border-parchment/20 whitespace-nowrap w-min pl-2">
			<Link href={`../series/${series.id}`} className="inline-block">
				<p className="hover:underline underline-offset-2 pr-2">
					{series.authors[0].penName}
				</p>
			</Link>
		</td>
		<td className="border-b border-parchment/20">
			{series.dateAdded ? (
				<p>{series.dateAdded.toString()}</p>
			) : (
				<></>
			)}
		</td>
		<td className="mx-auto border-b border-parchment/20 ">
			{toggleReviewed && (
				<Checkbox
					onChange={() => toggleReviewed(series.id)}
					checked={series.reviewed}
					className="checked:bg-eggplant dark:checked:bg-rose/70 border-eggplant dark:border-rose/70 before:h-8 before:w-8"
				/>
			)}
		</td>
		<td className="border-b border-parchment/20">
			<Tooltip content="Edit Series">
				<IconButton variant="text" className="rounded-full">
					<PencilIcon className="w-4 h-4 text-eggplant dark:text-rose/70" />
				</IconButton>
			</Tooltip>
		</td>
		<td className="text-center mx-auto pr-2 border-b border-parchment/20">
			{deleteEntity && (
				<Tooltip content="Delete Series">
					<IconButton variant="text" className="rounded-full" onClick={() => deleteEntity(series.id)}>
						<TrashIcon className="w-4 h-4 text-eggplant dark:text-rose/70" />
					</IconButton>
				</Tooltip>
			)}
		</td>
	</tr>
);

export const renderCommentRow = (
	comment: Comment,
	index: number,
	toggleReviewed?: (commentId: number) => void,
	toggleActive?: (commentId: number) => void,
	deleteEntity?: (commentId: number) => any,
) => {
	const CommentRow = () => {
		return (
			<tr key={index} className="text-center">
				<td className="border-b border-parchment/20 h-8 max-w-36 whitespace-nowrap overflow-ellipsis">
					<Tooltip content={comment.book.title} placement="top">
						<Link href={`/book/${comment.book.id}`}>
							<p
								className="pl-6 hover:underline underline-offset-2 w-full text-ellipsis line-clamp-2"
							>
								{comment.book.title}
							</p>
						</Link>
					</Tooltip>
				</td>
				<td className="border-b border-parchment/20 h-8 max-w-48 whitespace-nowrap overflow-ellipsis">
					<Tooltip content={comment.comment} placement="top">
						<p
							className="pl-6 w-full text-ellipsis line-clamp-2 inline-block"
						>
							{comment.comment}
						</p>
					</Tooltip>
				</td>
				<td className="border-b border-parchment/20">
					{comment.user ? <p>{comment.user.tag}</p> : <></>}
				</td>
				<td className="border-b border-parchment/20">
					{comment.dateAdded ? (
						<p>{comment.dateAdded.toString()}</p>
					) : (
						<></>
					)}
				</td>
				<td className="border-b border-parchment/20">
					{toggleReviewed && (
						<Checkbox
							onChange={() => toggleReviewed(comment.id)}
							checked={comment.reviewed}
							className="checked:bg-eggplant dark:checked:bg-rose/70 border-eggplant dark:border-rose/70 before:h-8 before:w-8"
						/>
					)}
				</td>
				<td className="text-center mx-auto pr-2 border-b border-parchment/20">
					{deleteEntity && (
						<Tooltip content="Delete Comment">
							<IconButton variant="text" className="rounded-full" onClick={() => deleteEntity(comment.id)}>
								<TrashIcon className="w-4 h-4 text-eggplant dark:text-rose/70" />
							</IconButton>
						</Tooltip>
					)}
				</td>
			</tr>
		);
	};
	return <CommentRow key={index} />;
};

export const renderSubgenreRow = (
	subgenre: Subgenre,
	index: number,
	toggleReviewed?: (subgenreId: number) => void,
	toggleActive?: (subgenreId: number) => void,
	deleteEntity?: (subgenreId: number) => any
) => {
	const SubgenreRow = () => {
		const [isEditing, setIsEditing] = useState(false);
		const [name, setName] = useState(subgenre.name);
		const dispatch = useAppDispatch();

		const handleSubmit = () => {
			dispatch(updateSubgenreThunk({ id: subgenre.id, subgenreName: name }));
			setIsEditing(false);
		};

		const handleChange = (event: any) => {
			setName(event.target.value);
		};

		return (
			<tr key={index} className="text-center">
				<td className="border-b border-parchment/20 whitespace-nowrap w-min">
					{isEditing ? (
						<div className="w-16 mr-auto ml-16">
							<form onSubmit={handleSubmit}>
								<Input
									className={`pr-8 text-center focus:!border-l-eggplant dark:focus:!border-l-rose/70 focus:!border-r-eggplant dark:focus:!border-r-rose/70 focus:!border-b-eggplant dark:focus:!border-b-rose/70 focus:!border-l-2 focus:!border-r-2 focus:!border-b-2`}
									labelProps={{
										className:
											"peer-focus:before:!border-t-eggplant peer-focus:before:!border-t-2 peer-focus:before:!border-l-eggplant peer-focus:before:!border-l-2 peer-focus:after:!border-t-eggplant peer-focus:after:!border-t-2 peer-focus:after:!border-r-eggplant peer-focus:after:!border-r-2 peer-focus:before:mt-[6px] peer-focus:after:mt-[6px]",
									}}
									size="md"
									label="Name"
									name="name"
									type="text"
									value={name}
									onChange={handleChange}
									autoFocus
								/>
							</form>
						</div>
					) : (
						<p className="">
							{subgenre.name}
						</p>
					)}
				</td>
				<td className="border-b border-parchment/20">
					<Tooltip content="Edit Subgenre">
						<IconButton
							variant="text"
							className="rounded-full"
							onClick={() => setIsEditing(!isEditing)}
						>
							<PencilIcon className="w-4 h-4 text-eggplant dark:text-rose/70" />
						</IconButton>
					</Tooltip>
				</td>
				<td className="text-center mx-auto pr-2 border-b border-parchment/20">
					{deleteEntity && (
						<Tooltip content="Delete Subgenre">
							<IconButton variant="text" className="rounded-full" onClick={() => deleteEntity(subgenre.id)}>
								<TrashIcon className="w-4 h-4 text-eggplant dark:text-rose/70" />
							</IconButton>
						</Tooltip>
					)}
				</td>
			</tr>
		);
	};
	return <SubgenreRow key={index} />;
};
