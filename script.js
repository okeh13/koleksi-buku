document.getElementById('book-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const title = document.getElementById('book-title').value;
    const author = document.getElementById('book-author').value;

    addBookToList(title, author);

    //Clear input fields
    document.getElementById('book-title').value = ' ';
    document.getElementById('book-author').value = ' ';
});

function addBookToList(title, author) {
    const bookList = document.getElementById('book-list');
    const li = document.createElement('li');
    li.innerHTML = `${title} oleh ${author} <button onclick="removeBook(this)">Hapus</button>`;
    bookList.appendChild(li);
}

function removeBook(button) {
    const li = button.parentElement;
    li.remove();
}
function searchBooks() {
    const searchInput = document.getElementById ('search').value.toLowerCase();
    const bookList = document.getElementById ( 'book-list');
    const books = bookList.getElementsByTagName('li');
    for (let i = 0; i < books.length; i++) {
        const bookText = books[i].textContent.toLowerCase();
        if (bookText.includes(searchInput)) {
            books[i].style.display = '';
        } else {
            books[i].style.display = 'none';
        }
    }
}
