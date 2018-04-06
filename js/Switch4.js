// JavaScript source code
function defineNumber() {
    var number = prompt("숫자를 입력하세요", "");
    number = Number(number)
    switch (number % 2) {
        case 0:
            alert("짝수입니다");
            break;
        case 1:
            alert("홀수입니다");
            break;
        default:
            alert("숫자가 아닙니다");
            break
    }
}
function getNameOfDay() {

    var week = new Array('일', '월', '화', '수', '목', '금', '토');
    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth() + 1;
    var day = today.getDate();
    var nameIndex = today.getDay();
    var dayName = week[nameIndex];

    switch (nameIndex) {
        case 0:
            today = "일요일";
            break;
        case 1:
            today = "월요일";
            break;
        case 2:
            today = "화요일";
            break;
        case 3:
            today = "수요일";
            break;
        case 4:
            today = "목요일";
            break;
        case 5:
            today = "금요일";
            break;
        case 6:
            today = "토요일";
            break;
    }
    alert(today)
}

function howOld() {
    //나이 입력
    var age = prompt("나이를 입력하세요", "");
    age = Number(age)
    if (age < 20) {
        alert("미성년자입니다");
    } else if (age >= 20 && age < 40) {
        alert("청년입니다");
    } else if (age >= 40 && age < 60) {
        alert("중년입니다");
    } else {
        alert("노년입니다");
    }

}