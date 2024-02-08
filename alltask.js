function calculateMoney( ticketSale) {


    const ticket_price=120;
    const gate_man=500;
    const stuff_bill=50;
    const total_foundmoney_each_day=10*120 ;
 
     const total_cost_each_day=500+(8*50);
 
      if(0<=ticketSale){
       
         const remain=(total_foundmoney_each_day)-(total_cost_each_day);
         return remain;
      }
 
      else{
         return "Invalid Number ";
      }
 
 
 }

//  2................................
function checkName(name) {

   

    if(typeof name!=="string" ){
      return 'Invalied';
    }
    name= name.toUpperCase();
      const last_word= name[name.length-1];
  
   if( ['A', 'Y', 'I', 'E', 'O', 'U', 'W'] .includes(last_word)){
      return 'Good Name';
  }
  else{
      return 'Bad Name';
  }
  
  }

  // 3.................

  function deleteInvalids(array) {
    if (!Array.isArray(array)) {
        return 'Invalid Array';
    }
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number' && !isNaN(array[i])) {
            result.push(array[i]);
        }
    }
    return result;
}

//4.............

function generatePassword(obj) {
    if (!obj || typeof obj !== 'object' || !obj.name || !obj.birthYear || !obj.siteName) {
        return 'invalid';
    }
    else if (typeof obj.birthYear !== 'number' || obj.birthYear.toString().length !== 4) {
        return 'invalid';
    }
    else {
        const siteNameLetter = obj.siteName[0].toUpperCase() + obj.siteName.slice(1).toLowerCase();
        return `${siteNameLetter}#${obj.name}@${obj.birthYear}`;
    }
}


//...5

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