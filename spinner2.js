const spinnerArr = ['|','/','-','\\','|','|','/','-','\\','|'];
let counter = 100;

for (let index in spinnerArr) {
  setTimeout(() => {
    process.stdout.write('\r');
    process.stdout.write(spinnerArr[index]);
    if (index >= spinnerArr.length - 1) {
      process.stdout.write('\n');
    }
  }, counter);
  counter += 200;
}

