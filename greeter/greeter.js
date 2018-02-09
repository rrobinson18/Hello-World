var name = prompt('What is your name?');

var checkName = function(){
  if(name === "") {
name = prompt('What is your name, for real this time?');
  }
}
checkName();
alert('Hello ' + name);
