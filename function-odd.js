var number = [11, 22, 43, 54, 32, 43, 89, 43, 25];
for (let i = 0; i < number.length; i++) {
    const element = number[i];
    if (element % 2 !== 0) {
        console.log(element);
    }
}