/*
Write a function that loops through the array and displays each book on the page. You can display them in some sort of table, or each on their own “card”. It might help for now to manually add a few books to your array so you can see the display.
Add a “NEW BOOK” button that brings up a form allowing users to input the details for the new book: author, title, number of pages, whether it’s been read and anything else you might want. How you decide to display this form is up to you. For example, you may wish to have a form show in a sidebar or you may wish to explore dialogs and modals using the <dialog> tag. However you do this, you will most likely encounter an issue where submitting your form will not do what you expect it to do. That’s because the submit input tries to send the data to a server by default. If you’ve done the bonus section for the calculator assignment, you might be familiar with event.preventDefault();. Read up on the event.preventDefault documentation again and see how you can solve this issue!
Add a button on each book’s display to remove the book from the library.
You will need to associate your DOM elements with the actual book objects in some way. One easy solution is giving them a data-attribute that corresponds to the index of the library array.
Add a button on each book’s display to change its read status.
To facilitate this you will want to create the function that toggles a book’s read status on your Book prototype instance.


*/

const libraryContainer = document.querySelector(".library-container");
const author = document.getElementsByName("author")[0];
const pages = document.getElementsByName("pages")[0];
const readStatus = document.getElementsByName("read-status");
const title = document.getElementsByName("title")[0];
const submitButton = document.querySelector(".submit");
const modal = document.querySelector(".modal");
const openForm = document.querySelector(".open-form");
const closeForm = document.querySelector(".close-form");

openForm.addEventListener("click", function () {
  modal.style.display = "block";
});

closeForm.addEventListener("click", function () {
  modal.style.display = "none";
});

const myLibrary = [];

Book.id = 0;

function Book(title, author, numPages, readStatus) {
  this.bookId = `book${++Book.id}`;
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.readStatus = readStatus;
  this.info = function () {
    return `${title} by ${author}, ${numPages}, ${
      readStatus === "yes" ? "have read" : "have not read yet."
    }`;
  };
}

const lordOfTheRings = new Book("Lord of the Rings", "JR Tolkien", 300, "yes");
const theHobbit = new Book("The Hobbit", "JR Tolkien", 300, "no");
const breakfastOfChampions = new Book(
  "Breakfast of Champions",
  "Kurt Vonnegut",
  200,
  "yes"
);
const catsCradle = new Book("Cat's Cradle", "Kurt Vonnegut", 250, "yes");

function addBookToLibrary(book) {
  myLibrary.push(book);
}

addBookToLibrary(lordOfTheRings);
addBookToLibrary(theHobbit);
addBookToLibrary(breakfastOfChampions);
addBookToLibrary(catsCradle);

function renderBook(book) {
  const bookContainer = document.createElement("div");
  const buttonContainer = document.createElement("div");
  const title = document.createElement("h2");
  const author = document.createElement("p");
  const pages = document.createElement("p");
  const readStatus = document.createElement("button");
  const deleteButton = document.createElement("button");

  bookContainer.className = "book";
  bookContainer.classList.add(`${book.bookId}`);

  title.textContent = book.title;
  author.textContent = book.author;
  pages.textContent = book.numPages;
  readStatus.textContent = book.readStatus;
  deleteButton.textContent = "Delete";
  deleteButton.classList.add("delete-button");
  deleteButton.onclick = deleteBook;

  libraryContainer.appendChild(bookContainer);
  bookContainer.appendChild(title);
  bookContainer.appendChild(author);
  bookContainer.appendChild(pages);
  bookContainer.appendChild(buttonContainer);
  buttonContainer.appendChild(readStatus);
  buttonContainer.appendChild(deleteButton);
}

function deleteBook() {
  const bookId = this.parentElement.parentElement.classList[1];
  const findBook = myLibrary.findIndex((element) => element.bookId == bookId);
  const delBook = myLibrary.splice(findBook, 1);
  this.parentElement.parentElement.remove();
}

submitButton.addEventListener("click", function (e) {
  if (title.value === "") return;
  if (author.value === "") return;
  if (!/^[0-9]+$/.test(pages.value)) {
    alert(
      "Please only enter numeric characters for pages! (Allowed input:0-9)"
    );
  }
  e.preventDefault();
  let status = "";
  for (let read of readStatus) {
    if (read.checked) {
      status = read.value;
    }
  }

  var newBook = new Book(title.value, author.value, pages.value, status);
  addBookToLibrary(newBook);
  renderBook(newBook);
  title.value = "";
  author.value = "";
  pages.value = "";
  readStatus[0].checked = false;
  readStatus[1].checked = false;
  modal.style.display = "none";
});

myLibrary.forEach((book) => {
  renderBook(book);
});
