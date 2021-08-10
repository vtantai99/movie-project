export const convertToPassWord = (string) => {
  let pass = "";
  for (let item of string) {
    console.log(item);
    pass += "*";
  }
  return pass;
};
