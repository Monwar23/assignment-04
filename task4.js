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

