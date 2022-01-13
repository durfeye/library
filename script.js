let booksName = document.querySelector('#booksName');
let booksAuthor = document.querySelector('#booksAuthor');
let booksPages = document.querySelector('#booksPages');
let isBookRead = document.querySelector('#isBookRead');
const addBookButton = document.querySelector('#addBookButton');
const bookShelf = document.querySelector('.bookShelf');
// let removeBookButton = document.createElement('button');

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
    addNewBook = new Book(title, author, pages, isRead);
    Library.push(addNewBook);
    let newBook = document.createElement('div');
    newBook.classList.add('singleBook');
    showBooks(newBook);
}

function showBooks(newBook) {
    let prevArrLength = Library.length - 1;

    for (i = prevArrLength; Library.length > i; i++) {
        // let newBook = document.createElement('div');
        // newBook.classList.add('singleBook');
        newBook.innerHTML =
            `
        Title: ${title} </br>
        Author: ${author} </br>
        Pages: ${pages} </br>
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
        isReadStatus(newBook);
    }
}
addBookButton.addEventListener('click', Book.prototype.addBookToLibrary);

function isReadStatus(newBook) {
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
        // isReadStatusButton.addEventListener('click', () => {
        //     if (isRead === 'yes') {
        //         isRead = 'no';
        //     }
        //     else if (isRead === 'no') {
        //         isRead = 'yes';
        //     }
        // });
}

