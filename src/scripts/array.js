export const arrayElementsAddition = (array) => {
    let sum = 0;
    for (const element of array) {
        sum += element;
    }
    console.log(sum);
    return sum;
  }