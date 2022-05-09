let myLibrary = [];

// Book object constructor
function Book(Title, Author, Pages, Read) {
    this.Title = Title;
    this.Author = Author;
    this.Pages = Pages;
    this.Read = Read;
}

function addBookToLibrary(Title, Author, Pages, Read) {
    let book = new Book(Title, Author, Pages, Read);
    myLibrary.push(book);
}

// Display library array
function displayBooks() {
    const books = document.querySelector(".content");

    myLibrary.forEach(myLibrary => {
        const card = document.createElement("div");
        card.classList.add("card");
        books.appendChild(card);
        for (let key in myLibrary) {
            console.log(`${key}: ${myLibrary[key]}`);
            const para = document.createElement("p");
            para.textContent = (`${key}: ${myLibrary[key]}`);
            card.appendChild(para);
        }
    })
}

addBookToLibrary("Harry Potter", "JK Rowling", "650", "Read");
addBookToLibrary("The Blood of Elves", "Andrej Sapkowsky", "650", "Read");
addBookToLibrary("Harry Potter", "JK Rowling", "650", "Read");
addBookToLibrary("The Blood of Elves", "Andrej Sapkowsky", "650", "Read");
addBookToLibrary("Harry Potter", "JK Rowling", "650", "Read");
addBookToLibrary("The Blood of Elves", "Andrej Sapkowsky", "650", "Read");

displayBooks();