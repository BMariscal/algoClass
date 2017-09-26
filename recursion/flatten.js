/*
Implement a function that flattens a nested array.

flatten([1,[2],[3, [[4]]]]);
=> [1,2,3,4]
*/

function flatten(array){
  let newarr = [];
  array.forEach(item =>{
    if(Array.isArray(item)){
      newarr = newarr.concat(flatten(item));
    }else{
      newarr.push(item);
    }
  });
  return newarr;
}
console.log(flatten([1,[2],[3, [[4]]]]))