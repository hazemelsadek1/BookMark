var bookMark = document.getElementById("bookMark");
var bookName = document.getElementById("bookName");
var markcont = document.getElementById("markcont");

(function () {
    if (localStorage.getItem("data") == null)
        linkArr = [];
    else {
        linkArr = JSON.parse(localStorage.getItem("data"));
        display()
    }
})();

function addB() {
    var blinks = {
        bmark: bookMark.value,
        bname: bookName.value
    };
    linkArr.push(blinks);
    localStorage.setItem("data", JSON.stringify(linkArr));
    display();
}

function display() {
    var box = "";
    for (var i = 0; i < linkArr.length; i++) {
        box += `
        <div class="col-12">
      <h2 class="d-inline-block">${linkArr[i].bmark}</h2>
      <a class="btn btn-primary ms-5" onclick="visit()" href="${linkArr[i].bname}" target="_blank">visit</a>
      <button  class="btn btn-danger ms-1" onclick="deleteFunc(${i})">delete</button>
      <br>
      </div>
      `
    }
    markcont.innerHTML = box;
}


function deleteFunc(index) {
    linkArr.splice(index, 1)
    localStorage.setItem("data", JSON.stringify(linkArr))
    display()
}