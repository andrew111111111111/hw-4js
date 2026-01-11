const textA = "23";
const textB = "43";
if (textA.length >= 1 && textB.length >= 1) {
  console.log("Обидва поля заповнені");
} else {
  console.log("Не всі поля заповнені");
}
// 2
const nummberA = 2;
const nummberB = 4;
if (nummberA + nummberB >= 10) {
  console.log("Сума більша за 10");
} else {
  console.log("Сума менша або дорівнює 10");
}
// 3
const text = "javascript";
if (text.toLocaleLowerCase().includes("javascript")) {
  console.log("Текст містить слово JavaScript");
} else {
  console.log("Текст не містить слово JavaScript");
}
// 4
const nummber = 15;
if (nummber > 10 && nummber < 20) {
  console.log("Число входить в діапазон від 10 до 20");
} else {
  console.log("Число не входить в діапазон від 10 до 20");
}
// 5
const userNameIs = prompt("write your name");
const userEmailIs = prompt("write your E-mail");
const userPasswordIs = prompt("write your Password");

const isUserNameValid = userNameIs.trim().length >= 3;
const isUserEmailValid =
  userEmailIs.indexOf("@") > userEmailIs.lastIndexOf(".");
const isUserPasswordValid = userPasswordIs.trim().length >= 6;
if (isUserNameValid && isUserEmailValid && isUserPasswordValid) {
  alert("Перенаправлення на іншу сторінку");
} else {
  console.log("Помилка: неправильне заповнення");
}
