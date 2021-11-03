//тестовая функция для кнопки prompt
function prompTest(){
    let result = prompt('Write test',['Not Test']);
    if (result.toLowerCase() == 'test') {
        alert('Good');
    } else {
        alert('Not good');
    }
}