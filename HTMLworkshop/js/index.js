function changeFirst() {
  document.getElementById("changearea").innerHTML = `
  <form onsubmit="event.preventDefault(); onFormSubmit();" autocomplete="off">
  <input type="number" id="bookid" placeholder="enter book id"><br>
  <input type="text" id="bookname" placeholder="enter book name"><br>
  <input type="text" id="authorname" placeholder="enter author name"><br>
  <input type="number" id="price" placeholder="enter price"><br>
  <input type="submit" onclick="addBook()"></input>
  </form>`;
}
function changeSecond() {
  document.getElementById("changearea").innerHTML = `<div>
  <input type="number" placeholder="enter book id"><br>
  <button type="button" onclick="removeBook()" >remove book</button>
  </div>`;
}
function changeThird() {
  document.getElementById(
    "changearea"
  ).innerHTML = ` <div>
      <form>
  <input type="text" placeholder="enter book name"><br>
  <input type="text" placeholder="enter author name"><br>
  <input type="number" placeholder="enter price"><br>
  <button type="button" >edit book</button>
  </form>
  </div>`;
}

function changeFourth() {
  document.getElementById("changearea").innerHTML = ` 
      
      <table class="list" id="bookList">
      <thead>
          <tr>
              <th>Book ID</th>
              <th>Book Name</th>
              <th>Author Name</th>
              <th>Price</th>
            
          </tr>
      </thead>
      <tbody>

      </tbody>
  </table>

       `;
}

//var booksArray=[booikd,bookname,authorname,price];
//var bookList={booikd:'',bookname:'',authorname:'',price:''}
function addBook(){
  var bookList={}   
    bookList["booikd"]=document.getElementById("bookid").value
    //booksArray.push(booikd)
    bookList["bookname"]=document.getElementById("bookname").value
    //booksArray.push(bookname)
    bookList["authorname"]=document.getElementById("authorname").value
   // booksArray.push(authorname)
    bookList["price"]=document.getElementById("price").value
   // booksArray.push(price)
//console.log(booksArray)
return bookList
    console.log(bookList)
}

function onFormSubmit(){
  var bookList=addBook()
  insertBook(bookList)
}
function insertBook(books){
  var table=document.getElementById("bookList").getElementsByTagName('tbody')[0]
  var newRow=table.insertRow(table.length)
  var cell1=newRow.insertCell(0)
  cell1.innerHTML=books.booikd
  var cell2=newRow.insertCell(1)
  cell2.innerHTML=books.bookname
   var cell3=newRow.insertCell(2)
  cell3.innerHTML=books.authorname
  var   cell4=newRow.insertCell(3)
  cell4.innerHTML=books.price



}



