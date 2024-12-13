function fn(num) {
    if (num < 10) {
        console.log("константа меньше 10");
    } else if(num >= 10) {
        console.log("константа не меньше 10");
    }
}
fn(10);

function  showMessage()  {
    alert('Привет, Мир')
}
showMessage();

let text = 'lorem';
function fn(lorem) {
    if(lorem = text) {
        console.log('У вас ошибка в тексте')
    } else {
        console.log(`Содержимое переменной:${text}` );
    }
}
fn()