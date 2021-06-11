export function isEmail(value) {
  const rE = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  return rE.test(value); // 형식에 맞는 경우 true 리턴
}
export function isPassword(value) {
  const rE = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{5,10}$/; //  6 ~ 10자 영문, 숫자 조합
  return rE.test(value); // 형식에 맞는 경우 true 리턴
}
export function isName(value) {
  const rE = /^[가-힣a-zA-Z]+$/;// 한글 또는 영문 사용하기(혼용X)
  return rE.test(value); // 형식에 맞는 경우 true 리턴
}
export function isPhone(value) {
  const rE = /^[0-9]{2,3}[0-9]{3,4}[0-9]{4}$/;
  return rE.test(value); // 형식에 맞는 경우 true 리턴
}