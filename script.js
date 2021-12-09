class book{
    constructor(title, author ,isbn){
      this.title = title;
      this.author = author;
      this.isbn= isbn;
    }


}

 function addBook(book){

    const list = document.getElementById('tbody');
    const row = document.createElement('tr');
                    
   row.innerHTML= '<td>' + book.title + '</td> '+ 
                   '<td>' + book.author + '</td> '+
                   '<td>' + book.isbn + '</td> '+ 
                   '<td>' + '<button class = "cancel"> X </button>' + '</td> '

                    
    list.appendChild(row);
    
};

function clearfields(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';

}

document.getElementById('submit').addEventListener("click", function(){

    const title = document.getElementById('title').value ;
    const author = document.getElementById('author').value ;
    const isbn = document.getElementById('isbn').value ;
    
    const bookDetails = new book(title , author , isbn);
    console.log(title);
    console.log(bookDetails);
  
    addBook(bookDetails);
    clearfields();

});

document.querySelector("#tbody").addEventListener("click", function(event){
   var x =   event.target ;
   console.log(x);
   if(x.classList.contains('cancel'))
   {
       console.log("yes");
       x.parentNode.parentNode.parentNode.removeChild(x.parentNode.parentNode);
   }
  
})