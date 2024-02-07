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
