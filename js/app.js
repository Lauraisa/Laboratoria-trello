window.addEventListener('load', begin);

var addList = document.getElementById('addList');
var form = document.getElementById('form');
var nameList = document.getElementById('name-list');
var button = document.getElementById('button-id');

function createList(event) {
  event.target.classList.toggle('display-none');
  form.classList.toggle('display-none');
}

function begin() {
  addList.addEventListener('click', createList)
  button.addEventListener('click',function() {
      event.preventDefault();
      var valueText = nameList.value;
      if (valueText) {
          var newcontenido = document.createElement('div');
          form.classList.toggle('display-none');
          var text = document.createElement('a')
          text.href ='#'; 
          newcontenido.appendChild(text);
      }
  })

}
