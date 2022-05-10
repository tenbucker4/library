let myLibrary = [];

// Book object constructor
class Book {
    constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    }
}

// Display form when "New Book" button is clicked
const newBook = document.querySelector(".new-book-btn");
newBook.addEventListener("click", displayForm);
function displayForm() {
    document.querySelector(".book-form-container").style.display = "";
}

// Submit book to library when submit button is clicked
const form = document.getElementById("add-book");
const submitBook = document.querySelector(".submit-btn");
