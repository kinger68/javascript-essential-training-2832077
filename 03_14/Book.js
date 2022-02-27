class Book {
    constructor(
        title,
        author,
        datePublished
    ) {
        this.title = title;
        this.author = author;
        this.datePublished = datePublished;
    }

    printBook() {
        console.log("Title: " + this.title);
        console.log("Author: " + this.author);
        console.log("Published: " + this.datePublished);
    }

    bookAge() {
        let now = new Date();
        let published = new Date(this.datePublished);
        let elapsed = now - published; // elapsed time in milliseconds
        let yearsSincePublished = Math.floor(elapsed / (1000 * 3600 * 24 * 360));
        return yearsSincePublished;
    }
}

export default Book;