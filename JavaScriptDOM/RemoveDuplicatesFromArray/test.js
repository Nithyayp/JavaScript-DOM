arr=arr = [5,1,2,9,5,7,2,8,4];
function removedup(arr){
    return arr.filter((item,index)=> arr.indexOf(item) === index)
}
console.log(removedup(arr));