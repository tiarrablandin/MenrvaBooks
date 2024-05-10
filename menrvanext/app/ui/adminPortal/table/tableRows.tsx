"use client";

import { Author } from "@/app/lib/models/author";
import { Comment } from "@/app/lib/models/comment";
import { BookResponse } from "@/app/lib/models/book";
import { User } from "@/app/lib/models/user";
import {
	Button,
	Checkbox,
	IconButton,
	Input,
	PencilIcon,
	Tooltip,
	Typography,
	XMarkIcon,
} from "@/providers";
import Image from "next/image";
import Link from "next/link";
import { Series } from "@/app/lib/models/series";
import { useState } from "react";
import { updateGenreThunk } from "@/app/lib/store/genreSlice";
import { useAppDispatch } from "@/app/lib/store/store";
import { updateKeywordThunk } from "@/app/lib/store/keywordSlice";
import { updateTagThunk } from "@/app/lib/store/tagSlice";
import { deleteCommentThunk } from "@/app/lib/store/commentSlice";
import { Genre } from "@/app/lib/models/genre";
import { Keyword } from "@/app/lib/models/keyword";
import { Subgenre } from "@/app/lib/models/subgenre";
import { updateSubgenreThunk } from "@/app/lib/store/subgenreSlice";

export const renderBookRow = (
	book: BookResponse,
	index: number,
	toggleReviewed?: (bookId: number) => void
) => {
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
				{toggleReviewed && (
					<Checkbox
						onChange={() => toggleReviewed(book.id)}
						checked={book.reviewed}
						className="checked:bg-eggplant border-eggplant before:h-8 before:w-8"
					/>
				)}
			</td>
			<td className="text-center mx-auto pr-2 border-b border-gray-300">
				<Tooltip content="Edit Book">
					<Link href={`/admin/updateBook/${book.id}`}>
						<IconButton variant="text" className="rounded-full">
							<PencilIcon className="w-4 h-4 text-eggplant" />
						</IconButton>
					</Link>
				</Tooltip>
			</td>
		</tr>
	);
};

export const renderAuthorRow = (
	author: Author,
	index: number,
	toggleReviewed?: (authorId: number) => void
) => (
	<tr key={index}>
		<td className="border-b border-gray-300 whitespace-nowrap w-min">
			<Link href={`../author/${author.id}`} className="inline-block">
				<Typography variant="lead" className="hover:underline underline-offset-2">
					{author.user ? author.user.tag : "n/a"}
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
		<td className="border-b border-gray-300">
			{author.dateAdded ? (
				<Typography variant="lead">{author.dateAdded.toString()}</Typography>
			) : (
				<></>
			)}
		</td>
		<td className="mx-auto border-b border-gray-300 ">
			{toggleReviewed && (
				<Checkbox
					onChange={() => toggleReviewed(author.id)}
					checked={author.reviewed}
					className="checked:bg-eggplant border-eggplant before:h-8 before:w-8"
				/>
			)}
		</td>
		<td className="mx-auto border-b border-gray-300">
			<Tooltip content="Edit Author">
				<IconButton variant="text" className="rounded-full">
					<PencilIcon className="w-4 h-4 text-eggplant" />
				</IconButton>
			</Tooltip>
		</td>
	</tr>
);

export const renderUserRow = (
	user: User,
	index: number,
	toggleReviewed?: (id: number) => void,
	toggleActive?: (id: number) => void
) => (
	<tr key={index} className="text-center">
		<td className="border-b border-gray-300 whitespace-nowrap w-min">
			<Link href={`../user/${user.id}`} className="inline-block">
				<Typography variant="lead" className="hover:underline underline-offset-2">
					{user.tag}
				</Typography>
			</Link>
		</td>
		<td className="border-b border-gray-300 whitespace-nowrap">
			<Typography variant="lead" className="w-min inline-block">
				{`${user.firstName} ${user.lastName}`}
			</Typography>
		</td>
		<td className="border-b border-gray-300 whitespace-nowrap">
			<Typography variant="lead" className="w-min inline-block">
				{user.email}
			</Typography>
		</td>
		<td className="border-b border-gray-300 whitespace-nowrap">
			<Typography variant="lead" className="w-min inline-block">
				{user.subscription.level}
			</Typography>
		</td>
		<td className="border-b border-gray-300">
			{user.dateAdded ? <Typography variant="lead">{user.dateAdded.toString()}</Typography> : <></>}
		</td>
		<td className="border-b border-gray-300 ">
			{toggleActive && (
				<Checkbox
					onChange={() => toggleActive(user.id)}
					checked={user.active}
					className="checked:bg-eggplant border-eggplant before:h-8 before:w-8"
				/>
			)}
		</td>
		<td className="border-b border-gray-300">
			<Tooltip content="Edit User">
				<IconButton variant="text" className="rounded-full">
					<PencilIcon className="w-4 h-4 text-eggplant" />
				</IconButton>
			</Tooltip>
		</td>
	</tr>
);

export const renderGenreRow = (genre: Genre, index: number) => {
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
				<td className="border-b border-gray-300 whitespace-nowrap w-min">
					{isEditing ? (
						<div className="w-16 mr-auto ml-16">
							<form onSubmit={handleSubmit}>
								<Input
									className={`pr-8 text-center focus:!border-l-eggplant focus:!border-r-eggplant focus:!border-b-eggplant focus:!border-l-2 focus:!border-r-2 focus:!border-b-2`}
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
						<Typography variant="lead" className="">
							{genre.name}
						</Typography>
					)}
				</td>
				<td className="border-b border-gray-300">
					<Tooltip content="Edit Genre">
						<IconButton
							variant="text"
							className="rounded-full"
							onClick={() => setIsEditing(!isEditing)}
						>
							<PencilIcon className="w-4 h-4 text-eggplant" />
						</IconButton>
					</Tooltip>
				</td>
			</tr>
		);
	};

	return <GenreRow key={index} />;
};

export const renderKeywordRow = (keyword: Keyword, index: number) => {
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
				<td className="border-b border-gray-300 whitespace-nowrap w-min">
					{isEditing ? (
						<div className="w-16 mr-auto ml-16">
							<form onSubmit={handleSubmit}>
								<Input
									className={`pr-8 text-center focus:!border-l-eggplant focus:!border-r-eggplant focus:!border-b-eggplant focus:!border-l-2 focus:!border-r-2 focus:!border-b-2`}
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
						<Typography variant="lead" className="">
							{keyword.name}
						</Typography>
					)}
				</td>
				<td className="border-b border-gray-300">
					<Tooltip content="Edit Keyword">
						<IconButton
							variant="text"
							className="rounded-full"
							onClick={() => setIsEditing(!isEditing)}
						>
							<PencilIcon className="w-4 h-4 text-eggplant" />
						</IconButton>
					</Tooltip>
				</td>
			</tr>
		);
	};

	return <KeywordRow key={index} />;
};

export const renderTagRow = (tag: Tag, index: number) => {
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
				<td className="border-b border-gray-300 whitespace-nowrap w-min">
					{isEditing ? (
						<div className="w-16 mr-auto ml-16">
							<form onSubmit={handleSubmit}>
								<Input
									className={`pr-8 text-center focus:!border-l-eggplant focus:!border-r-eggplant focus:!border-b-eggplant focus:!border-l-2 focus:!border-r-2 focus:!border-b-2`}
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
						<Typography variant="lead" className="">
							{tag.name}
						</Typography>
					)}
				</td>
				<td className="border-b border-gray-300">
					<Tooltip content="Edit Tag">
						<IconButton
							variant="text"
							className="rounded-full"
							onClick={() => setIsEditing(!isEditing)}
						>
							<PencilIcon className="w-4 h-4 text-eggplant" />
						</IconButton>
					</Tooltip>
				</td>
			</tr>
		);
	};
	return <TagRow key={index}/>;
};

export const renderSeriesRow = (
	series: Series,
	index: number,
	toggleReviewed?: (seriesId: number) => void
) => (
	<tr key={index} className="text-center">
		<td className="border-b border-gray-300 whitespace-nowrap w-min">
			<Link href={`../series/${series.id}`} className="inline-block">
				<Typography variant="lead" className="hover:underline underline-offset-2">
					{series.name}
				</Typography>
			</Link>
		</td>
		<td className="border-b border-gray-300 whitespace-nowrap w-min pl-2">
			<Link href={`../series/${series.id}`} className="inline-block">
				<Typography variant="lead" className="hover:underline underline-offset-2 pr-2">
					{series.authors[0].penName}
				</Typography>
			</Link>
		</td>
		<td className="border-b border-gray-300">
			{series.dateAdded ? (
				<Typography variant="lead">{series.dateAdded.toString()}</Typography>
			) : (
				<></>
			)}
		</td>
		<td className="mx-auto border-b border-gray-300 ">
			{toggleReviewed && (
				<Checkbox
					onChange={() => toggleReviewed(series.id)}
					checked={series.reviewed}
					className="checked:bg-eggplant border-eggplant before:h-8 before:w-8"
				/>
			)}
		</td>
		<td className="border-b border-gray-300">
			<Tooltip content="Edit Series">
				<IconButton variant="text" className="rounded-full">
					<PencilIcon className="w-4 h-4 text-eggplant" />
				</IconButton>
			</Tooltip>
		</td>
	</tr>
);

export const renderCommentRow = (
	comment: Comment,
	index: number,
	toggleReviewed?: (commentId: number) => void
) => {
	const CommentRow = () => {
		const dispatch = useAppDispatch();
		const handleDelete = () => {
			dispatch(deleteCommentThunk({ commentId: comment.id }));
		};

		return (
			<tr key={index} className="text-center">
				<td className="border-b border-gray-300 h-8 max-w-36 whitespace-nowrap overflow-ellipsis">
					<Tooltip content={comment.book.title} placement="top">
						<Link href={`/book/${comment.book.id}`}>
							<Typography
								variant="lead"
								className="pl-6 hover:underline underline-offset-2 w-full text-ellipsis line-clamp-2"
							>
								{comment.book.title}
							</Typography>
						</Link>
					</Tooltip>
				</td>
				<td className="border-b border-gray-300 h-8 max-w-48 whitespace-nowrap overflow-ellipsis">
					<Tooltip content={comment.comment} placement="top">
						<Typography
							variant="lead"
							className="pl-6 w-full text-ellipsis line-clamp-2 inline-block"
						>
							{comment.comment}
						</Typography>
					</Tooltip>
				</td>
				<td className="border-b border-gray-300">
					{comment.user ? <Typography variant="lead">{comment.user.tag}</Typography> : <></>}
				</td>
				<td className="border-b border-gray-300">
					{comment.dateAdded ? (
						<Typography variant="lead">{comment.dateAdded.toString()}</Typography>
					) : (
						<></>
					)}
				</td>
				<td className="border-b border-gray-300">
					<Tooltip content="Edit Comment">
						<IconButton variant="text" className="rounded-full">
							<XMarkIcon className="w-6 h-6 text-eggplant" onClick={handleDelete} />
						</IconButton>
					</Tooltip>
				</td>
			</tr>
		);
	};
	return <CommentRow key={index} />;
};

export const renderSubgenreRow = (subgenre: Subgenre, index: number) => {
	const GenreRow = () => {
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
				<td className="border-b border-gray-300 whitespace-nowrap w-min">
					{isEditing ? (
						<div className="w-16 mr-auto ml-16">
							<form onSubmit={handleSubmit}>
								<Input
									className={`pr-8 text-center focus:!border-l-eggplant focus:!border-r-eggplant focus:!border-b-eggplant focus:!border-l-2 focus:!border-r-2 focus:!border-b-2`}
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
						<Typography variant="lead" className="">
							{subgenre.name}
						</Typography>
					)}
				</td>
				<td className="border-b border-gray-300">
					<Tooltip content="Edit Subgenre">
						<IconButton
							variant="text"
							className="rounded-full"
							onClick={() => setIsEditing(!isEditing)}
						>
							<PencilIcon className="w-4 h-4 text-eggplant" />
						</IconButton>
					</Tooltip>
				</td>
			</tr>
		);
	};

	return <GenreRow key={index} />;
};
