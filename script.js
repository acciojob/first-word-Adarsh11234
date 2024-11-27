function firstWord(str) {
  
	  str = str.trim();

    
    if (str === "") {
        return "";
    }

    
    let spaceIndex = str.indexOf(" ");

  
    if (spaceIndex === -1) {
        return str;
    }

    
    return str.substring(0, spaceIndex);
}

// Examples
console.log(firstWord('see and stop')); 
console.log(firstWord(' Hello World!')); 
console.log(firstWord('12345')); 
console.log(firstWord('')); 
}



const s = prompt("Enter String:");
alert(firstWord(s));
