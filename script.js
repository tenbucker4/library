let myLibrary = [];

// Book object constructor
function Book(Title, Author, Pages, Read) {
    this.Title = Title;
    this.Author = Author;
    this.Pages = Pages;
    this.Read = Read;
}

// Display form when "New Book" button is clicked
function displayForm() {
    document.querySelector(".book-form").style.display = "";
}

// Submit book to library when submit button is clicked
const form = document.getElementById("add-book");
const submitBook = document.querySelector(".submit-btn");

function addFormData() {
    let Title = document.getElementById("Title").value;
    let Author = document.getElementById("Author").value;
    let Pages = document.getElementById("Pages").value;
    let Read = document.getElementById("Read").value;

    if ((Title == "") || (Author == "") || (Pages == "") || (Read == "")) {
        return;
    }

    addBookToLibrary(Title, Author, Pages, Read);
}

function addBookToLibrary(Title, Author, Pages, Read) {
    let book = new Book(Title, Author, Pages, Read);
    myLibrary.push(book);
    displayBooks();
    form.reset();
}

// Clear Form
const clearButton = document.getElementById("clear");
clearButton.addEventListener("click", clearForm());

function clearForm() {
    document.getElementById("add-book").reset();
}

// Display library array
function displayBooks() {
    const books = document.querySelector(".content");
    const removeCards = document.querySelectorAll(".card");
    for (let i = 0; i < removeCards.length; i++) {
        removeCards[i].remove();
    }

    // Loop over library and display to book cards
    let index = 0;
    myLibrary.forEach(Library => {
        const card = document.createElement("div");
        card.classList.add("card");
        books.appendChild(card);

        // Create remove book button
        const removeBook = document.createElement("button");
        removeBook.classList.add(".remove-book-btn");
        removeBook.textContent = "Remove Book";
        removeBook.dataset.linkedArray = index;
        index++;
        card.appendChild(removeBook);

        // Remove book from library when button is clicked
        removeBook.addEventListener("click", removeBookFromLibrary);

        function removeBookFromLibrary() {
            let fetchBookToRemove = removeBook.dataset.linkedArray;
            myLibrary.splice(parseInt(fetchBookToRemove), 1);
            card.remove();
            displayBooks();
        }

        for (let key in Library) {
            const para = document.createElement("p");
            para.textContent = (`${key}: ${Library[key]}`);
            card.appendChild(para);
        }
    })
}