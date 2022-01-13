let booksName = document.querySelector('#booksName');
let booksAuthor = document.querySelector('#booksAuthor');
let booksPages = document.querySelector('#booksPages');
let isBookRead = document.querySelector('#isBookRead');
const addBookButton = document.querySelector('#addBookButton');
const bookShelf = document.querySelector('.bookShelf');
let addBookMenu = document.querySelector('.addBookMenu');
let addBookMenuBtn = document.querySelector('.addBookMenuBtn');
let closeBookMenuBtn = document.querySelector('.closeBookMenu');
let container = document.querySelector('.container');
const header = document.querySelector('.header');
const footer = document.querySelector('.footer');
let nav = document.querySelector('.nav');
let errorMsg = document.querySelector('.errorMsg');
// let removeBookButton = document.createElement('button');
// let isReadStatusButton;

let Library = [];

function Book(title, author, pages, isRead) {
    this.title = title
    this.author = author
    this.pages = pages
    this.isRead = isRead
}

Book.prototype.addBookToLibrary = function (addNewBook) {
    title = booksName.value
    author = booksAuthor.value
    pages = booksPages.value
    isRead = isBookRead.value
    if (booksName.value === '' || booksAuthor.value === '' || booksPages.value === '') {
        errorMsg.style.display = 'block';
        return;
    }
    else {
        errorMsg.style.display = 'none';
        addNewBook = new Book(title, author, pages, isRead);
        Library.push(addNewBook);
        let newBook = document.createElement('div');
        newBook.classList.add('singleBook');
        booksName.value = '';
        booksAuthor.value = '';
        booksPages.value = '';
        showBooks(newBook);
    }
}

function showBooks(newBook) {
    let prevArrLength = Library.length - 1;

    for (i = prevArrLength; Library.length > i; i++) {
        // let newBook = document.createElement('div');
        // newBook.classList.add('singleBook');
        newBook.innerHTML =
            `
        <b>${title}</b></br>
        ${author}</br>
        ${pages} pages
        </div>
        `;
        let libraryIndex = Library.length - 1;
        newBook.setAttribute('libraryIndex', libraryIndex);
        let bookNode = newBook.getAttribute('libraryIndex');
        console.log(libraryIndex);
        bookShelf.appendChild(newBook);
        removeBookButton = document.createElement('button');
        removeBookButton.classList.add('removeBookButton');
        removeBookButton.textContent = 'Remove';
        newBook.appendChild(removeBookButton);
        removeBookButton.addEventListener('click', () => {
            bookShelf.removeChild(newBook);
            delete Library[bookNode];
        });
        isReadStatus(newBook, bookNode);
    }
}

function isReadStatus(newBook, bookNode) {
    let isReadStatusButton = document.createElement('button');
    isReadStatusButton.classList.add('isReadStatus');
    newBook.appendChild(isReadStatusButton);
    if (isRead === 'yes') {
        isReadStatusButton.style.background = 'green';
        isReadStatusButton.textContent = 'Already read';
    }
    else {
        isReadStatusButton.style.background = 'red';
        isReadStatusButton.textContent = 'No read yet';
    }
    isReadStatusButton.addEventListener('click', () => {
        if (isReadStatusButton.style.background === 'red') {
            isReadStatusButton.style.background = 'green';
            isReadStatusButton.textContent = 'Already read';
            Library[bookNode].isRead = 'yes';
        }
        else {
            isReadStatusButton.style.background = 'red';
            isReadStatusButton.textContent = 'No read yet';
            Library[bookNode].isRead = 'no';
        }
    });
}

function toggleBookMenu() {
    if (addBookMenu.style.display === 'none' || addBookMenu.style.display === '') {
        addBookMenu.style.display = 'flex';
        container.style = 'background: rgba(0, 0, 0, 0.5); opacity: 0.15';
    }
    else if (addBookMenu.style.display === 'flex') {
        addBookMenu.style.display = 'none';
        container.style = 'background: white; opacity: 1';
    }
}

addBookButton.addEventListener('click', Book.prototype.addBookToLibrary);
addBookMenuBtn.addEventListener('click', toggleBookMenu);
closeBookMenuBtn.addEventListener('click', toggleBookMenu);
window.addEventListener('click', (e) => {
    if (e.target === container || e.target === header || e.target === footer || e.target === bookShelf || e.target === nav) {
        addBookMenu.style.display = 'none';
        addBookMenuBtn.style.display = 'block';
        container.style = 'background: white; opacity: 1';
    }
});