
let  arr=[11,5,80,9,96];

// 1. find the maximum element in an array

const findMax = function(array)
{
    let max=0;
    for(let i=0;i<array.length;i++){
        if(array[i]>max){
            max=array[i];
        }
    }
    return max;
}
console.log("The maximum element in an array is",findMax(arr));

// 2. find the minimum element in an array

const findMin = function(array){
    let min=array[0];
    for(let i=1;i<array.length;i++)
    {
        if(array[i]<min){
            min= array[i];
        }
    }
    return min;
}
console.log("The minimum element in an array is",findMin(arr));

// 3. find the second largest element in an array

const secondLargest = function(array){

    //1st method
    // let res = findMax(array);
    // let n= array.indexOf(res);
    // array.splice(n,1);
    // return findMax(array);

    //2nd method
    let temp=0;
    for (let i = 0; i < array.length; i++) {
      for (let j = i + 1; j < array.length; j++) {
        if (array[i] > array[j]) {
          temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
      }
    }
    return array[array.length-2];
}
console.log("The second largest element in an array is",secondLargest([4,7,5,9,1]));

// 4. find the second smallest element in an array

const secondSmallest = function(array){
    //1st method
    // let res = findMin(array);
    // let n= array.indexOf(res);
    // array.splice(n,1);
    // return findMin(array);

    //2nd method
    let temp=0;
    for(let i=0;i<array.length;i++){
        for(let j=i+1;j<array.length;j++){
            if(array[i]>array[j]){
                temp=array[i];
                array[i]=array[j];
                array[j]=temp;
            }
        }
    }
    return array[1];
}
console.log("The second largest element in an array is",secondSmallest([4,7,5,9,1]));

// // 5. find the sum of all elements in an array

const summ = function (arr){
    let sum=0;
    for(let i=0;i<arr.length;i++)
    {
        sum+=arr[i];
    }
    return sum;
}
console.log("The sum of all elements in an array",summ(arr));

// // 6. find the average of all elements in an array

const average= function(arr){
    return summ(arr)/(arr.length)
}
console.log("The average of all elements in an array",average(arr));

// // 7. find the sum of all even elements in an array

const evenSum = function(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2==0) sum+=arr[i]
    }
    return sum;
}
console.log("The sum of all even elements in an array",evenSum(arr));

// // 8. find the sum of all odd elements in an array

const oddSum = function(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2!=0) sum+=arr[i]
    }
    return sum;
}
console.log("The sum of all odd elements in an array",oddSum(arr));

// // 9. find the number of even elements in an array

const findEven = function(arr){
    let evenNum=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2==0) evenNum.push(arr[i]);
    }
    return evenNum.length

}
console.log("The number of even elements in an array",findEven(arr));

// // 10. find the number of odd elements in an array

const findOdd = function(arr){
    let oddNum=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2!=0) oddNum.push(arr[i]);
    }
    return oddNum.length

}
console.log("The number of even elements in an array",findOdd(arr));

