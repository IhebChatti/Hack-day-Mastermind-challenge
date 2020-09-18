function allowDrop(event) {
    event.preventDefault();
  }
  function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
  }
  function drop(event) {
    event.preventDefault();
    var data=event.dataTransfer.getData("text", event.target.id);
    var nodeCopy = document.getElementById(data).cloneNode(true);
    nodeCopy.id = "newid";
    event.target.appendChild(nodeCopy).deleteparent(data);
    
}
    
  