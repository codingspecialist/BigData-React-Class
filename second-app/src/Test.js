// 1. return에는 하나의 엘레멘트만 담을 수 있다.
// 2. const, let (자바스크립트)
// 3. 변수 바인딩 {}
// 4. JSX if문 사용이 불가능 => 삼항 연산자
// 5. 대체 연산자 => ??
// 6. 반복문 for() X => map()

function Test() {
  let point = 65;
  let name; // undefied 타입
  let list = [1, 2, 3, 4];

  return (
    <div>
      <div>Hello World</div>
      <div>{point >= 60 ? "합격" : "불합격"}</div>
      <div>{name ?? "홍길동"}</div>
      {list.map((data) => (
        <div>{data}</div>
      ))}
    </div>
  );
}

export default Test;

const user = {
  id: 1,
  password: "1234",
  work: function () {
    console.log("일한다");
  },
  friend: [1, 2, 3, 4],
  home: {
    address: "부산",
    price: 1000,
  },
};
