function monthlySavings(arr, livingCost) {
    if (!Array.isArray(arr) || typeof livingCost !== 'number') {
        return 'invalid input';
    }

    let totaliIncome = 0;
    let tax = 0;

    for (let i = 0; i < arr.length; i++) {
        totaliIncome += arr[i];
        if (arr[i] >= 3000) {
            tax += (arr[i]) * 0.2;
        }
    }

    const totalSavings = totaliIncome - tax - livingCost;

    if (totalSavings >= 0) {
        return totalSavings;
    }
    else {
        return 'earn more';
    }

   
}

console.log(monthlySavings([1000, 2000, 3000], 5400));