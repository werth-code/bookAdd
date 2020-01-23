/* 
This is a simple program to add books to an array. 
It will not add any books that contain the word "great"
*/

const favoriteBooks = [];
function addFavoriteBook(bookName) {
  if(!bookName.includes("Great")) {
  favoriteBooks.push(bookName);
  }
}

function printFavoriteBooks () {
  console.log(
    `Favorite Books: ${favoriteBooks.length}`
  );
  
  for (let bookName of favoriteBooks) {
    console.log(bookName);
  }
}


addFavoriteBook("A Song of Ice and Fire");
addFavoriteBook("The Great Gatsby");
addFavoriteBook("Crime & Punishment");
addFavoriteBook("Great Expectations");
addFavoriteBook("You Don't Know JS");

printFavoriteBooks();

