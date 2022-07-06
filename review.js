let animal = {
  camel: "🐪",
  rabbit: "🐰",
  snake: "🐍",
  crying: function () {
    document.write("멍웅냥스슥");
    return null;
  },
};

document.write("<br>");
document.write(animal);
document.write("<br>");
document.write(JSON.stringify(animal));
document.write("<br>");
animal.crying();
document.write("<br>");
document.write(1 + (2 * 3) / 4);
document.write("<br>");
let num1 = 2.5;
document.write(num1++);
document.write("<br>");
document.write(num1);
document.write("<br>");
document.write(++num1);
document.write("<br>");
document.write(num1);
document.write("<br>");
document.write((num1 += 1));

let array1 = [1, 2, 3];
let array2 = [1, 2, 3];
let array3 = array1;

document.write("<br>");
document.write(array1 == array2);
document.write("<br>");
document.write(array1 == array3);
array1.push(4);
document.write("<br>");
document.write(array1);
document.write("<br>");
document.write(array3);

let num2 = 0;
document.write("<br>");
document.write(num2 === 0 && num2++); //num2가 0 이었다가 문장 끝나고 1이 된다.
document.write("<br>");
document.write(num2);
document.write("<br>");
document.write(num2 != 0 && num2++);
document.write("<br>");
document.write(num2);

// let visitCount = parseInt(prompt("당신의 방문 횟수는?"));
//parseInt는 숫자 형변환 하는 함수
//prompt입력값이 문자열이기 때문!

let animal2 = ["낙타", "토끼", "뱀"];

for (let i = 0; i < animal2.length; i++) {
  document.write("<li>" + animal2[i] + "</li>");
}
