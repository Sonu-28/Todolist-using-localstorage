const list = document.getElementById('ul-list');
const input = document.getElementById('item');
const btn = document.getElementById('btn');
const del = document.getElementsByClassName('');
console.log(del)
let arr = [];
window.addEventListener('load', ()=>{
    arr = JSON.parse(localStorage.getItem('todo')) || [];
    arr.forEach(element => {
        list.innerHTML += element;
    });
})

 btn.addEventListener('click', function(e){
      e.preventDefault();
      if(input.value != ""){
        list.innerHTML += `<li><input type="radio" id='check'>${input.value}<button class="del" onclick="deleteFn('${input.value}', this)">Delete<button></li>`;
        arr.push(`<li><input type="radio" id='check'>${input.value}<button class="del" onclick="deleteFn('${input.value}', this)">Delete<button></li>`);
        localStorage.setItem("todo", JSON.stringify(arr));
    } else {
        alert('Input Field is empty');
    }
    input.value = "";
 })

 function deleteFn(todos, element){
    let index = arr.indexOf(todos);
    arr.splice(index, 1);
    element.parentElement.remove();
    localStorage.setItem('todo', JSON.stringify(arr));
 }
