function transformString(str) {
  let transformedStr = str;

  if (str.length % 3 === 0) {
    // Reverse the string
    transformedStr = transformedStr.split("").reverse().join("");
  }
  if (str.length % 5 === 0) {
    // Replace each character with its ASCII code
    transformedStr = transformedStr
      .split("")
      .map((char) => char.charCodeAt(0))
      .join(" ");
  }
  return transformedStr;
}
