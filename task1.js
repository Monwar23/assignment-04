

function calculateMoney(ticketSale){
    if(ticketSale>=0){
        const dailyCost=500+(8*50);
        const moneyRemaining=(ticketSale*120)-dailyCost;
        return moneyRemaining;
    }
    else{
        return 'Invalid Number'
    }
}



function checkName(name){
    if(typeof name==='string'){
        const str=['a', 'y', 'i', 'e', 'o', 'u', 'w'];
        const lastCharacter=name.charAt(name.length-1).toLowerCase();
        if(str.includes(lastCharacter)){
            return 'Good name';
        }
        else{
            return 'Bad name';
        }
    }
    else{
        return 'Invalid';
    }
}


function deleteInvalids(array){
    if(Array.isArray(array)){
        let storeArray=[]
        for(const arr of array){
            
         if(typeof arr==='number' && !isNaN(arr)){
               storeArray.push(arr);
            }
        }
        return storeArray;
    }
    else{
        return 'Invalid Array'
    }
}


function password(obj){
    if(typeof obj==='object' && obj.hasOwnProperty('name') && obj.hasOwnProperty('birthYear') && obj.hasOwnProperty('siteName')){
        if(typeof obj.birthYear==='number' && obj.birthYear>999 && obj.birthYear<=9999){
            const password=obj.siteName.charAt(0).toUpperCase()+obj.siteName.slice(1)+'#'+obj.name.toLowerCase()+'@'+obj.birthYear;
            return password;
        }
        else{
            return 'Invalid';
        }
    }
    else{
        return 'invalid';
    }
}


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
