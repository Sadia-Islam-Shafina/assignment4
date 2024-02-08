


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
const  total= calculateMoney(-10);
 console.log(total);

