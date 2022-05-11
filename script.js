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
const newBookBtn = document.querySelector(".new-book-btn");
newBookBtn.addEventListener("click", displayForm);
function displayForm() {
    document.querySelector(".book-form-container").style.display = "";
}

// Submit book to library when submit button is clicked
const form = document.getElementById("add-book");
let submitBook = document.getElementById("submit-btn");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = document.getElementById("Title").value;
    const author = document.getElementById("Author").value;
    const pages = document.getElementById("Pages").value;
    const read = document.getElementById("Read").value;

    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    renderBooks();
    form.reset();
    document.querySelector(".book-form-container").style.display = "none";
    saveData();
});


// Display books in library in browser
function renderBooks() {
    // First clear bookshelf of previous array to prevent duplication
    const bookshelf = document.querySelector(".bookshelf");
    const allBooks = document.querySelectorAll(".card");
    for (let i = 0; i < allBooks.length; i++) {
        allBooks[i].remove();
    }

    // Loop over array and display each entry in bookshelf
    let index = 0;
    myLibrary.forEach((newBook) => {
        const bookCard = document.createElement("div");
        bookCard.classList.add("card");
        bookshelf.appendChild(bookCard);

        const titleDiv = document.createElement("h2");
        titleDiv.textContent = newBook.title;
        bookCard.appendChild(titleDiv);

        const authorDiv = document.createElement("h3");
        authorDiv.textContent = newBook.author;
        bookCard.appendChild(authorDiv);

        const pagesDiv = document.createElement("p");
        pagesDiv.textContent = newBook.pages + " pages";
        bookCard.appendChild(pagesDiv);

        const readDiv = document.createElement("p");
        readDiv.textContent = "Read? " + newBook.read;
        bookCard.appendChild(readDiv);

        // Add a button to toggle read status of each book
        const toggleReadBtn = document.createElement("button");
        toggleReadBtn.classList.add("read-btn");
        toggleReadBtn.textContent = "Read/Unread";
        bookCard.appendChild(toggleReadBtn);
        toggleReadBtn.addEventListener("click", () => {
            if (newBook.read === "Yes") {
                newBook.read = "No";
            } else {
                newBook.read = "Yes";
            }
            saveData();
            renderBooks();
        })

        const deleteBookBtn = document.createElement("button");
        deleteBookBtn.classList.add("delete-btn");
        deleteBookBtn.textContent = "Delete";
        deleteBookBtn.dataset.linkedArray = index;
        index++;
        bookCard.appendChild(deleteBookBtn);
        let bookToRemove = deleteBookBtn.dataset.linkedArray;
        deleteBookBtn.addEventListener("click", () => {
            bookCard.remove();
            myLibrary.splice(bookToRemove, 1);
            console.log(bookToRemove);
            saveData();
            renderBooks();
        })
        saveData();
    })
}

function saveData() {
    localStorage.setItem(`myLibrary`, JSON.stringify(myLibrary));
}

function restore() {
    if (!localStorage.myLibrary) {
        renderBooks();
    } else {
        let objects = localStorage.getItem("myLibrary");
        objects = JSON.parse(objects);
        myLibrary = objects;
        renderBooks();
    }
}

restore();
