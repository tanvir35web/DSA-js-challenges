function calculator(a, b, operator) {
  let result;

  if (operator === "+") {
    result = a + b;
  } else if (operator === "-") {
    result = a - b;
  } else if (operator === "*") {
    result = a * b;
  } else if (operator === "/") {
    result = a / b;
  } else {
    throw new Error("Invalid Operator");
  }

  return result;
}


module.exports = calculator;
