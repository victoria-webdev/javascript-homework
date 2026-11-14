import './App.css'
import { books } from './data/books';
import LibraryStats from './components/LibraryStats';
import Header from './components/Header';
import BookList from './components/BookList';
import Footer from './components/Footer';
import './App.css'


const genres = [
    "Художественная литература",
    "Учебная литература",
    "Детская литература",
    "Публицистика",
    "Научно-популярная литература"
];

function App() {
    return (
        <div className="app">
            <Header />
            <LibraryStats books={books} />

            <BookList books={books} genre="all" />

            {genres.map((genre) => (
                <BookList
                    key={genre}
                    books={books}
                    genre={genre}
                />
            ))}
            <Footer />
        </div>
    );
}

export default App;