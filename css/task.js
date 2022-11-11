function displayForm() {
   var name = document.getElementById('fname').value
    console.log(name);
}
function displayNum(){
    var num = document.getElementById('num').value
    console.log(num);
}
function date() {
    var dob = document.getElementById('dob').value
    console.log(dob);
    
}
document.getElementById('fname').addEventListener('dblclick',displayForm);
document.getElementById('num').addEventListener('dblclick',displayNum)
document.getElementById('dob').addEventListener('dblclick',date)