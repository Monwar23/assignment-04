function monthlySavings(arr , livingCost){
    if(Array.isArray(arr) && typeof livingCost==='number'){
        let payment=0;
        for(const array of arr){
            if(array>=3000){
                const tax=(3000*20)/100;

                payment=payment+array-tax;
            }
            else{
                payment=payment+array;
            }
        }
        const TotalSavings=payment-livingCost;
        if(TotalSavings>=0){
            return TotalSavings;
        }
        else{
            return 'earn more';
        }
    }
    else{
        return 'invalid input'
    }
}
