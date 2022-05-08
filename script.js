let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

const book1 = new book("Harry Potter", "JK Rowling", "789", "read");

function addBookToLibrary() {
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

