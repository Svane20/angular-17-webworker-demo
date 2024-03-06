import { add } from "./utilities/";

addEventListener('message', ({ data }) => {
  const response = `worker response to ${data}`;

  const number1 = 1;
  const number2 = 2;

  const sum = add(number1, number2);

  postMessage(sum);
});
