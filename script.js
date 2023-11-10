/*
Write a function that loops through the array and displays each book on the page. You can display them in some sort of table, or each on their own “card”. It might help for now to manually add a few books to your array so you can see the display.
Add a “NEW BOOK” button that brings up a form allowing users to input the details for the new book: author, title, number of pages, whether it’s been read and anything else you might want. How you decide to display this form is up to you. For example, you may wish to have a form show in a sidebar or you may wish to explore dialogs and modals using the <dialog> tag. However you do this, you will most likely encounter an issue where submitting your form will not do what you expect it to do. That’s because the submit input tries to send the data to a server by default. If you’ve done the bonus section for the calculator assignment, you might be familiar with event.preventDefault();. Read up on the event.preventDefault documentation again and see how you can solve this issue!
Add a button on each book’s display to remove the book from the library.
You will need to associate your DOM elements with the actual book objects in some way. One easy solution is giving them a data-attribute that corresponds to the index of the library array.
Add a button on each book’s display to change its read status.
To facilitate this you will want to create the function that toggles a book’s read status on your Book prototype instance.


*/

const libraryContainer = document.querySelector(".library-container");
const title = document.querySelector(".title");
const author = document.querySelector(".author");
const pages = document.querySelector(".pages");
const readStatus = document.querySelector(".read-status");

const myLibrary = [];

function Book(title, author, numPages, readStatus) {
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.readStatus = readStatus;
  this.info = function () {
    return `${name} by ${author}, ${numPages}, ${
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
addBookToLibrary(catsCradle);
addBookToLibrary(catsCradle);
addBookToLibrary(catsCradle);
addBookToLibrary(catsCradle);
addBookToLibrary(catsCradle);
addBookToLibrary(catsCradle);
addBookToLibrary(catsCradle);
addBookToLibrary(catsCradle);
addBookToLibrary(catsCradle);
addBookToLibrary(catsCradle);

myLibrary.forEach((book) => {
  const bookContainer = document.createElement("div");
  const title = document.createElement("h2");
  const author = document.createElement("p");
  const pages = document.createElement("p");
  const readStatus = document.createElement("button");
  bookContainer.className = "book";
  title.textContent = book.title;
  author.textContent = book.author;
  pages.textContent = book.numPages;
  readStatus.textContent = book.readStatus;
  libraryContainer.appendChild(bookContainer);
  bookContainer.appendChild(title);
  bookContainer.appendChild(author);
  bookContainer.appendChild(pages);
  bookContainer.appendChild(readStatus);
});
