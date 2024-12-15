const myLibrary = [];

function Book(title, author, pages, isRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

Book.prototype.info = function(){
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.isRead}`;
}

function addBookToLibrary(title, author, pages, isRead){
    const book = new Book(title, author, pages, isRead);

    myLibrary.push(book);
}