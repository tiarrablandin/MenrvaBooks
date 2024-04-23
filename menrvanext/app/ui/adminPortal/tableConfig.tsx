import { renderBookRow } from "./tableRows"

interface TableConfigProps {
    apiEndpoint: string
    columns: string[]
    pageTitle: string
    description: string
    addLink: string
    renderRow: (item: any, index: number, toggleReviewed: (bookId: number) => void) => JSX.Element
}

type ConfigDictionary = {
    [key: string]: TableConfigProps;
}

export const tableConfig: ConfigDictionary = {
    books: {
        apiEndpoint: '/api/books',
        columns: ['Cover', 'Title', 'Author', 'Date Added', 'Reviewed', 'Edit'],
        pageTitle: 'Books List',
        description: 'Manage all books in the database',
        addLink: '/admin/addBook',
        renderRow: renderBookRow
    },
    authors: {
        apiEndpoint: '/api/authors',
        columns: ['Photo', 'Name', 'Books', 'Date Added', 'Edit'],
        pageTitle: 'Authors List',
        description: 'Manage all authors',
        addLink: '/admin/addAuthor',
        renderRow: renderBookRow
    },
};