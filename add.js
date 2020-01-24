function add(a,b){
    console.log(a+b);
    console.log("Bibek");
}

//add(20,5);

function displayName(array){
    let temp=0; 
    
    //array.map(value => console.log(value ));
    console.log("length of array is " + array.length);

    array.map(value =>{ temp= temp+value})

    // for(let i=0;i<array.length;i++){
    //     temp=temp+array[i];
        
    // }
     console.log(temp);
}
displayName([1, 2, 37]);

// let array = [1, 2, 3,'bibek'];

// console.log(array);

//array.unshift('bisam');
//console.log(array);
// console.log(array.length);
// array.shift();
// console.log(array);



