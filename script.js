/* eslint-disable no-restricted-globals */
const bookDisplayContainer = document.querySelector('.bookDisplayContainer');
const form = document.querySelector('form');
const title = document.querySelector('.title');
const author = document.querySelector('.author');

class BookList {
  information = JSON.parse(localStorage.getItem('books')) || [];

  storeBook() {
    const newBook = {
      name: title.value,
      author: author.value,
    };
    this.information.push(newBook);
    localStorage.setItem('books', JSON.stringify(this.information));
    return newBook;
  }

  displayBooks() {
    this.information.forEach((book) => {
      const bookTitle = document.createElement('p');
      const remove = document.createElement('button');
      remove.textContent = 'Remove';
      remove.type = 'button';
      remove.classList.add('remove');
      const bookDiv = document.createElement('div');
      bookDiv.classList.add('book-div');
      bookTitle.innerHTML = `${book.name} by ${book.author}`;
      bookDiv.append(bookTitle, remove);
      bookDisplayContainer.appendChild(bookDiv);
    });
  }

  removeBook(button, index) {
    bookDisplayContainer.removeChild(button.parentElement);
    this.information.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(this.information));
    location.reload();
  }
}

const bookCollection = new BookList();
bookCollection.displayBooks();
const remove = document.querySelectorAll('.remove');
remove.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    bookCollection.removeBook(btn, index);
  });
});
if (bookDisplayContainer.childElementCount === 0) {
  bookDisplayContainer.classList.add('d-none');
}

form.addEventListener('submit', (e) => {
  if (title.value !== null && author.value !== null) {
    bookCollection.storeBook();
    location.reload();
    title.value = '';
    author.value = '';
  }
  e.preventDefault();
});
/* eslint-disable no-restricted-globals */
const bookDisplayContainer = document.querySelector('.bookDisplayContainer');
const form = document.querySelector('form');
const title = document.querySelector('.title');
const author = document.querySelector('.author');

class BookList {
  information = JSON.parse(localStorage.getItem('books')) || [];

  storeBook() {
    const newBook = {
      name: title.value,
      author: author.value,
    };
    this.information.push(newBook);
    localStorage.setItem('books', JSON.stringify(this.information));
    return newBook;
  }

  displayBooks() {
    this.information.forEach((book) => {
      const bookTitle = document.createElement('p');
      const remove = document.createElement('button');
      remove.textContent = 'Remove';
      remove.type = 'button';
      remove.classList.add('remove');
      const bookDiv = document.createElement('div');
      bookDiv.classList.add('book-div');
      bookTitle.innerHTML = `${book.name} by ${book.author}`;
      bookDiv.append(bookTitle, remove);
      bookDisplayContainer.appendChild(bookDiv);
    });
  }

  removeBook(button, index) {
    bookDisplayContainer.removeChild(button.parentElement);
    this.information.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(this.information));
    location.reload();
  }
}

const bookCollection = new BookList();
bookCollection.displayBooks();
const remove = document.querySelectorAll('.remove');
remove.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    bookCollection.removeBook(btn, index);
  });
});
if (bookDisplayContainer.childElementCount === 0) {
  bookDisplayContainer.classList.add('d-none');
}

form.addEventListener('submit', (e) => {
  if (title.value !== null && author.value !== null) {
    bookCollection.storeBook();
    location.reload();
    title.value = '';
    author.value = '';
  }
  e.preventDefault();
});

// Navbar functionality
const list = document.querySelector('#list');
const addNew = document.querySelector('#addNew');
const contactLink = document.querySelector('#contact');
const awesomeBooks = document.querySelector('.allAwesomeBooks');
const addBook = document.querySelector('#addBook');
const contact = document.querySelector('.contact');
list.addEventListener('click', () => {
  awesomeBooks.style.display = 'block';
  addBook.style.display = 'none';
  contact.style.display = 'none';
});

addNew.addEventListener('click', () => {
  awesomeBooks.style.display = 'none';
  addBook.style.display = 'block';
  contact.style.display = 'none';
});
contactLink.addEventListener('click', () => {
  awesomeBooks.style.display = 'none';
  addBook.style.display = 'none';
  contact.style.display = 'block';
});
