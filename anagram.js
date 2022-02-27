function checkStringAnagram(a, b){
    let len1 = a.lenght;
    let len2 = b.lenght;
    if (len1 !== len2){
        document.write('Invalid Input');
        return
    }
    let str1 = a.split( '' ).sort().join( '' );
    let str2 = b.split( '' ).sort().join( '' );
    if(str1 === str2){
        document.write("True");
    }   else{
        document.write("False");
    }

}

var a = prompt("Enter string1");
var b = prompt("Enter string2");
checkStringAnagram(a,b);