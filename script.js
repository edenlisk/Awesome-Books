/* eslint-disable no-restricted-globals */
const bookDisplayContainer = document.querySelector('.bookDisplayContainer');
const form = document.querySelector('form');
const title = document.querySelector('.title');
const author = document.querySelector('.author');

const information = JSON.parse(localStorage.getItem('books')) || [];


const displayData = function (){
    information.forEach((book, index) => {
        const bookTitle = document.createElement('p');
        const bookAuthor = document.createElement('p');
        const remove = document.createElement('button');
        remove.textContent = "Remove";
        remove.type = 'button';
        remove.classList.add('remove');
        const bookDiv = document.createElement('div');
        const horizontalBar = document.createElement('hr');
        bookTitle.innerHTML = book.name;
        bookAuthor.innerHTML = book.Author;
        bookDiv.append(
            bookTitle,
            bookAuthor,
            remove,
            horizontalBar
        );
        bookDisplayContainer.appendChild(bookDiv);
        remove.addEventListener('click', () => {
            bookDisplayContainer.removeChild(remove.parentElement);
            information.splice(index, 1);
            localStorage.setItem('books', JSON.stringify(information));
        })
    });
}

const storeData = function (){
    const newBook = {
        name: title.value,
        Author: author.value,
    }
    information.push(newBook);
    localStorage.setItem('books', JSON.stringify(information));
    return newBook;
}

displayData()

form.addEventListener('submit', (e) =>{
    if (title.value !== null && author.value !== null) {
        storeData();
        location.reload();
        title.value = '';
        author.value = '';
    }
    e.preventDefault()
})