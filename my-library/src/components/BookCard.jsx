import Card from './Card';
import AvailabilityBadge from './AvailabilityBadge';

function BookCard({ book }) {
    return (
        <Card>
            <h3>Название: {book.title}</h3>
            <p>Автор: {book.author}</p>
            <p>Год издания: {book.year}</p>
            {book.year < 2000 && <p>Классическое издание</p>}
            <p>Экземпляров: {book.copies}</p>
            <AvailabilityBadge copies={book.copies} />
        </Card>
    );
}

export default BookCard;