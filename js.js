let newDiv = document.createElement('div');
let b = document.body;
let h2 = document.createElement('h2');
let inputField = document.createElement('input');
inputField.id=('myInput');
let ul = document.createElement('ul');
ul.id='myUL';
let btn = document.createElement('button');
b.prepend(newDiv,ul);
newDiv.append(h2,inputField,btn);
h2.textContent ="to do list";
btn.textContent="add";
inputField.type="text";
inputField.placeholder="example";
let close = document.getElementsByClassName("close");
//ul.innerHTML='<li>item 1</li><li>item 2</li><li>item 3</li><li>item 4</li>'
function appendTable() {
  let cookieTable = document.cookie.split('; ');
  let myTable = [];
  myTable.push(cookieTable);
  let nbVisited = [];
  let split = [];
  let times = [];
  let ulHtml ="";
    for (let i = 0; i < cookieTable.length; i++) {
      if (cookieTable[i].includes('todolist')){
          nbVisited.push(cookieTable[i]);
          split = nbVisited[i].split('=')
          times = split[0];
          console.log(split);
          console.log(times);
      }
      if(times.length > 0){
      ulHtml += "<li>"+times+"</li>";
    }
  }
  ul.innerHTML = ulHtml;
}
appendTable();
// add close button
let mylist = document.getElementsByTagName("li");
for (i = 0; i < mylist.length; i++) {
  let span = document.createElement("span");
  let closeButton = document.createTextNode("(x)");
  span.className = "close";
  span.appendChild(closeButton);
  mylist[i].appendChild(span);
}
console.log(mylist);
// delete task from "to do list"
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    let div = this.parentElement;
    let replace = this.parentElement.innerText.replace('(x)', '');
    let arr = "this.parentElement.innerText.includes("+replace+")";
    console.log("removed: "+replace);
    div.remove();
    if(arr){
      document.cookie = replace+"=todolist;expires=Thu, 18 Dec 2000 12:00:00 UTC;";
    }
  }
}
//add or remove task from "to do list"
btn.onclick = function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("write something");
    } else {
      document.getElementById("myUL").appendChild(li);
      document.cookie = inputValue+"=todolist;expires=Thu, 18 Dec 2025 12:00:00 UTC;";
    }
    document.getElementById("myInput").value = "";
    var span = document.createElement("span");
    var txt = document.createTextNode(" (x)");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    let close = document.getElementsByClassName("close");
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.remove();
      }
    }
}

