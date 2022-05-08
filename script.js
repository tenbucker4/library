let myLibrary = [];

function book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.getInfo = function() {
        console.log(title);
        console.log(author);
        console.log(pages);
        console.log(read);
    }
}

const book1 = new book("Harry Potter", "JK Rowling", "789", "read");

function addBookToLibrary() {
    //
}

console.log(book1.getInfo());
