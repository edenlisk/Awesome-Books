/* eslint-disable no-restricted-globals */
const bookDisplayContainer = document.querySelector('.bookDisplayContainer');
const form = document.querySelector('form');
const title = document.querySelector('.title');
const author = document.querySelector('.author');

class BookList {
    information = JSON.parse(localStorage.getItem('books')) || [];

    storeBook(){
        const newBook = {
            name: title.value,
            author: author.value,
        }
        this.information.push(newBook);
        localStorage.setItem('books', JSON.stringify(this.information));
        return newBook;
    }


    displayBooks(){
        this.information.forEach((book, index) => {
            const bookTitle = document.createElement('p');
            const bookAuthor = document.createElement('p');
            const remove = document.createElement('button');
            remove.textContent = "Remove";
            remove.type = 'button';
            remove.classList.add('remove');
            const bookDiv = document.createElement('div');
            bookDiv.classList.add('book-div')
            // const horizontalBar = document.createElement('hr');
            bookTitle.innerHTML = `${book.name} by ${book.author}`;
            // bookAuthor.innerHTML = book.author;
            bookDiv.append(
                bookTitle,
                // bookAuthor,
                remove,
                // horizontalBar
            );
            bookDisplayContainer.appendChild(bookDiv);
            remove.addEventListener('click', () => {
                bookDisplayContainer.removeChild(remove.parentElement);
                // delete book from list
                this.information.splice(index, 1);
                localStorage.setItem('books', JSON.stringify(this.information));
                location.reload();
            })
        });
    }
}

const bookCollection = new BookList();
bookCollection.displayBooks();
if (bookDisplayContainer.childElementCount === 0){
    bookDisplayContainer.classList.add('d-none');
}

form.addEventListener('submit', (e) =>{
    if (title.value !== null && author.value !== null) {
        bookCollection.storeBook();
        location.reload();
        title.value = '';
        author.value = '';
    }
    e.preventDefault()
})