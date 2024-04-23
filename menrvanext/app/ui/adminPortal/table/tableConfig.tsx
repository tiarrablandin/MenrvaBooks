import { renderAuthorRow, renderBookRow, renderUserRow } from "./tableRows"

interface TableConfigProps {
    apiEndpoint: string
    columns: string[]
    pageTitle: string
    description: string
    addLink: string
    renderRow: (item: any, index: number, toggleReviewed?: (bookId: number) => void | undefined) => JSX.Element
}

type ConfigDictionary = {
    [key: string]: TableConfigProps;
}

export const tableConfig: ConfigDictionary = {
    books: {
        apiEndpoint: '/api/books',
        columns: ['Cover', 'Title', 'Author', 'Date Added', 'Reviewed', 'Edit'],
        pageTitle: 'Books List',
        description: 'Manage all books',
        addLink: '/admin/addBook',
        renderRow: renderBookRow
    },
    authors: {
        apiEndpoint: '/api/authors',
        columns: ['Tag', 'Name', 'Date Added', 'Reviewed', 'Edit'],
        pageTitle: 'Authors List',
        description: 'Manage all authors',
        addLink: '/admin/addAuthor',
        renderRow: renderAuthorRow
    },
    users: {
        apiEndpoint: '/api/users',
        columns: ['Tag', 'Name', 'Date Added', 'Edit'],
        pageTitle: 'Users List',
        description: 'Manage all users',
        addLink: '/admin/addUser',
        renderRow: renderUserRow
    }
};