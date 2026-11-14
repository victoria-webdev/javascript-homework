import BookCard from './BookCard';

function BookList({ books, genre }) {
    const filteredBooks = genre === 'all'
        ? books
        : books.filter((book) => book.genre === genre);

    return (
        <section>
            <h2>{genre === 'all' ? 'Все книги' : genre}</h2>

            {filteredBooks.length > 0 ? (
                filteredBooks.map((book) => (
                    <BookCard key={book.id} book={book} />
                ))
            ) : (
                <p>В выбранной категории книги отсутствуют.</p>
            )}
        </section>
    );
}

export default BookList;
