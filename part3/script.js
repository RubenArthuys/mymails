//Count messages
let countMessages = document.getElementsByTagName('p');
document.getElementById("count").textContent = countMessages.length;

//Detect click
let trash = document.getElementsByClassName("trash");
for(var i=0; i<trash.length; i++) {
    trash[i].addEventListener('click', trashClick);
}

//Remove function
function trashClick() {
    this.parentNode.remove();
    document.getElementById("count").textContent = countMessages.length;
}

//Detect Add Message click
document.getElementById('btn-add').addEventListener("click", function() {
    
    let valueMessage = document.getElementById('add-message').value;

    //Create tags
    var mainDiv = document.createElement("div");
        mainDiv.className = "row";

    var avatar = document.createElement("img");
        avatar.className = "avatar";
        avatar.src = "avatar-1.jpg";

    var smallDiv = document.createElement("div");

    var title = document.createElement("h6");
        title.textContent = "The best";

    var newParagraphe = document.createElement("p");
        newParagraphe.textContent = valueMessage;

    var newTrash = document.createElement("img");
        newTrash.className = "trash";
        newTrash.src = "trash.png";

  //Append tags
    mainDiv.appendChild(avatar);
    mainDiv.appendChild(smallDiv);
    smallDiv.appendChild(title);
    smallDiv.appendChild(newParagraphe);
    mainDiv.appendChild(newTrash);
    document.body.appendChild(mainDiv);

    //Reset Input
    document.getElementById('add-message').value = "";
    //Add count
    document.getElementById("count").textContent = countMessages.length;

    newTrash.addEventListener('click', 
        function() {
            this.parentNode.remove();
            document.getElementById("count").textContent = countMessages.length;
  })
})

