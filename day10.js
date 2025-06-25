//shift all zeros to the end
// let numbers=[1,2,0,4,5,0,6,5,0];
// let count=0;

// for(let i=0;i<numbers.length;i++){
//     if(numbers[i]!=0){
//         numbers[count]=numbers[i];
//         count++;
//     }
// }
// for(let i=count;i<numbers.length;i++){
//     numbers[i]=0;
// }
// console.log(numbers);



//remove duplicate elements

// let numbers=[2,2,3,3,4,4,3,5];
// let unique=[];


// for(let i=0; i < numbers.length; i++){
//  let isunique=true;

//  for(let j=0;j < unique.length;j++){
//     if(numbers[i]==unique[j]){
//         isunique=false;
//         break;
//     } 

//  }
//  if(isunique==true){
//     unique[unique.length]=numbers[i];
//  }
// }



// let numbers = [2,2,3,4,4,3,5,5];

// let unique = [];

// for(let i = 0; i< numbers.length;i++){
//     let isunique = true;

//     for (let j = 0; j < unique.length; j++){
//         if(numbers[i] == unique[j]){
//             isunique = false;
//             break;
//         }
//     }


//     if(isunique == true){
//         unique[unique.length]=numbers[i];
//     }
    
// }
// console.length(unique.length);

let numbers = [2, 2, 3, 4, 4, 3, 5, 5];
let unique = [];

for (let i = 0; i < numbers.length; i++) {
    let isUnique = true;

    for (let j = 0; j < unique.length; j++) {
        if (numbers[i] == unique[j]) {
            isUnique = false;
            break;
        }
    }

    if (isUnique) {
        unique[unique.length] = numbers[i]; 
    }
}

console.log( unique); 

// this is some changes




