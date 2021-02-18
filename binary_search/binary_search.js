const randomNumbers = [
  83,55,86,67,63,20,8,46,40,10,32,52,42,77,
  89,75,56,91,90,45,85,53,22,5,31,59,35,65,
  17,57,28,61,51,15,34,70,23,38,95,50,6,14,
  24,47,99,100,29,73,12,7,16,66,44,97,18,88,
  60,49,98,27,3,93,4,21,78,11,87,76,94,30,
  69,54,58,62,19,25,80,2,71,82,41,68,79,81,
  64,1,72,36,9,13,39,43,74,26,84,92,37,48,33,96,
]

//the idea is to find the N number using a binary search

//create the function that implements binary search to ptimize speed 

//this function accepts an array and a value
//Create a lef pointer at the start of the array, and right  pointer at 
//the end of the array
//while the left pointer comes before the rigth pointer
  /*
    create a pointer in the middle 
    if you find the value you want, return the index 
    if the value is tpp small, mpve the left pointer  up
    if the value is too large, move the right pointer up
  if yout never find the value return -1
  */

function binarySearch(arr, target){
  //remove all duplicates
  const uniqArr = [...new Set(arr)]
  //sort the array
  const sortArr = uniqArr.sort((a,b) => a-b)
  //define start, middle and end indexes => what we care about are the index numbers not the value
  let start = 0
  let end = sortArr.length -1 
  let middle = Math.floor((start + end)/2)
  //check if the middle is the target, if it is then return it 

  //we loop over the array of number with a While loop as long as the arr[middle] !== target
  while(sortArr[middle] !== target){//if target is not the sortArr[middle] and 
    //and target is < the sortArr[middle] then end = middle -1
    if(target < sortArr[middle]){
      //if the target 89 is less than the middle 50 then the middle -1 else start = middle +1
      end = middle -1
    } else {
      start = middle +1
    }
    //just calculate the the middle again
    middle = Math.floor((start + end)/2)
    // console.log({'start': sortArr[start], 'middle':sortArr[middle], 'end':sortArr[end]})
    // console.log(sortArr[middle])
    return middle
   }
   
}

binarySearch(randomNumbers, 89)

/*
{ start: 51, middle: 75, end: 100 } //the first time it loops 89 is greater that 51, 
75 => this is middle
{ start: 76, middle: 88, end: 100 }//then start beceomes middle +1 = 76, we check again
88 => this is middle
{ start: 89, middle: 94, end: 100 }
94 => this is middle
{ start: 89, middle: 91, end: 93 }
91 => this is middle
{ start: 89, middle: 89, end: 90 }
89 => this is middle// it stops the loop because sortArr[middle] is the target
*/

// if the number is not found there then the infinte loop will start