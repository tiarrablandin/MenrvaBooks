'use client';

import { renderAuthorRow, renderBookRow, renderCommentRow, renderGenreRow, renderKeywordRow, renderSeriesRow, renderSubgenreRow, renderTagRow, renderUserRow } from "./tableRows"

interface TableConfigProps {
    apiEndpoint: string
    columns: string[]
    pageTitle: string
    description: string
    addLink: string
    renderRow: (item: any, index: number, toggleReviewed?: (bookId: number) => void | undefined, toggleActive?: (id: number) => void | undefined, deleteEntity?: (id: number) => any) => JSX.Element;
}

type ConfigDictionary = {
    [key: string]: TableConfigProps;
}

export const tableConfig: ConfigDictionary = {
    books: {
        apiEndpoint: '/api/books',
        columns: ['Cover', 'Title', 'Author', 'Date Added', 'Reviewed', 'Edit', 'Delete'],
        pageTitle: 'Books List',
        description: 'Manage all books',
        addLink: '/admin/addBook',
        renderRow: renderBookRow,
    },
    authors: {
        apiEndpoint: '/api/authors',
        columns: ['Tag', 'Pen Name', 'Date Added', 'Reviewed', 'Edit', 'Delete'],
        pageTitle: 'Authors List',
        description: 'Manage all authors',
        addLink: '/admin/addAuthor',
        renderRow: renderAuthorRow
    },
    users: {
        apiEndpoint: '/api/users',
        columns: ['Tag', 'Name', 'Email', 'Subscription', 'Date Added', 'Active', 'Edit', 'Delete'],
        pageTitle: 'Users List',
        description: 'Manage all users',
        addLink: '/admin/addUser',
        renderRow: renderUserRow
    },
    genres: {
        apiEndpoint: '/api/genres',
        columns: ['Name', 'Edit', 'Delete'],
        pageTitle: 'Genres List',
        description: 'Manage all genres',
        addLink: '/admin/addGenre',
        renderRow: renderGenreRow
    },
    series: {
        apiEndpoint: '/api/series',
        columns: ['Name', 'Author', 'Date Added', 'Reviewed', 'Edit', 'Delete'],
        pageTitle: 'Series List',
        description: 'Manage all series',
        addLink: '/admin/addSeries',
        renderRow: renderSeriesRow
    },
    keywords: {
        apiEndpoint: '/api/keywords',
        columns: ['Name', 'Edit', 'Delete'],
        pageTitle: 'Keyword List',
        description: 'Manage all keywords',
        addLink: '/admin/addKeyword',
        renderRow: renderKeywordRow
    },
    tags: {
        apiEndpoint: '/api/tags',
        columns: ['Name', 'Edit', 'Delete'],
        pageTitle: 'Tag List',
        description: 'Manage all tags',
        addLink: '/admin/addTag',
        renderRow: renderTagRow
    },
    comments: {
        apiEndpoint: '/api/comments',
        columns: ['Book', 'Comment', 'User', 'Date Added', 'Reviewed', 'Delete'],
        pageTitle: 'Comments List',
        description: 'Manage all comments',
        addLink: '/admin/addComments',
        renderRow: renderCommentRow
    },
    subgenres: {
        apiEndpoint: '/api/subgenres',
        columns: ['Name', 'Edit', 'Delete'],
        pageTitle: 'Sub-genres List',
        description: 'Manage all sub-genres',
        addLink: '/admin/addSubgenre',
        renderRow: renderSubgenreRow
    },
};