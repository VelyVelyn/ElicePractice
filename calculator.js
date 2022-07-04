function printExpression(value) {
  document.querySelector("#expression").innerHTML += value;
}
//innerHTML 은 쿼리선택자의 HTML 태그 안에 콘텐츠를 가리킴
//문자열의 + 연산자는 문자열 연결

function calculate() {
  let expression1 = document.querySelector("#expression").innerHTML;
  document.querySelector("#answer").innerHTML = eval(expression1);
}
//search의 매개변수로는 일반적인 숫자나 기호가 들어가는게 아니라 정규표현식으로 들어가기 때문에
//그대로 +로 쓰면 제대로 +기호로 인식하지 못한다. 그래서 \\ 를 앞에 해주면 +기호를 인식한다.
//원래는 조건문 + search로 연산자를 인식하여 그 앞 뒤 숫자를 split으로 받은 뒤 계산하는 것이 정석

//eval는 문자열로 된 자바스크립트 문장을 계산해준다. 하지만 엄청나게 위험하기 때문에 절대 쓰지 않는게 좋다..

//리셋하는 기능도 있으면 좋겠돠.
