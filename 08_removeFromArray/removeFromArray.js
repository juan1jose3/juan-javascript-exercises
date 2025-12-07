const removeFromArray = function(array,...manyArgs) {
    
   for(let i = array.length -1; i >= 0 ;i--){ //Looping forward is dangerous while deleting , we delete , splice shifts left the entire array. Hence why we must start from the end
        for(let args of manyArgs){
            if(array[i] === args){
                array.splice(i,1);
            }
        }
   }

    return array;
};

console.log(removeFromArray([1, 2, 3, 4],1,2,3,4));
// Do not edit below this line
module.exports = removeFromArray;
