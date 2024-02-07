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