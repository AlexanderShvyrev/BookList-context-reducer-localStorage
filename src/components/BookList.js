import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext'
import BookDetails from '../components/BookDetails'

const BookList = (props) => {
    const { books } = useContext(BookContext)
    return books.length ? (
        <div className='book-list'>
            <ul>
                {books.map(book => {
                    return (
                        <BookDetails book={book} key={book.id} />
                    )
                })}
            </ul>
        </div>
    ) : (
            <div className="empty">You currently have no books to read...Add Some :)</div>
        )
}

export default BookList
