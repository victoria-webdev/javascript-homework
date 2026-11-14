function LibraryStats({ books }) {
    return (
        <div className="library-stats">
            <p>Всего книг в каталоге: {books.length}</p>
            <p>Доступны для выдачи: {books.filter((book) => book.copies > 0).length}</p>
        </div>
    );
}

export default LibraryStats;