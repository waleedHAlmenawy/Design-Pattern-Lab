function rangeV1(start: number, end: number, steps: 1) {
  let currentStep = start;

  return {
    [Symbol.iterator]() {
      return {
        next() {
          if (currentStep <= end) {
            let result = currentStep;
            currentStep += steps;

            return { value: result, done: false };
          } else {
            return { value: undefined, done: true };
          }
        },
      };
    },
  };
}

console.log("%cIterator with the basic form", "color: red; font-size: 20px");

const _rangeV1 = rangeV1(1, 10, 1);

for (const value of _rangeV1) {
  console.log(value);
}

/////////////////////////////////////////////////////////

console.log(
  "%cIterator with the generator function",
  "color: red; font-size: 20px"
);

function* rangeV2(start: number, end: number, steps = 1) {
  for (let i = start; i <= end; i += steps) {
    yield i;
  }
}

const _rangeV2 = rangeV2(1, 10, 2);

for (const value of _rangeV2) {
  console.log(value);
}
