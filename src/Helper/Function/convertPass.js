export const convertToPassWord = (string) => {
  let pass = "";
  for (let item of string) {
    pass += "*";
  }
  return pass;
};
