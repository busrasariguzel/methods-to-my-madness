function slice(string, start = 0, end = string.length) {
  let newStr= ''
  for(let i=start; i <end; i++){
  newStr = newStr + string[i] 
  

}
return newStr
}


function repeat(str, repetitions) {
  newStr=''
  for(let i=0; i <repetitions; i++){
    newStr = newStr + str
  }
return newStr

}
  

function startsWith(str, substring) {
  for(let i=0 ; i <str.length; i++){
  return str[0].includes(substring[0])
}
}


function endsWith(str, substring) {
  for(let i=0 ; i <str.length; i++){
    return str[str.length-1].includes(substring[substring.length-1])
}
}

function includes(arr, item) {
  for(let i=0; i <arr.length; i++){
  if (arr[i] === item){
    
    
    return true
  } 
  
  } return false
} 





function join(arr, separator = '') {
  let newArr =''
  for(let i=0; i <arr.length; i++){
    newArr.push(arr[i] + separator )
}
return newArr
}


function split(str, separator) {
}

function trimStart(str) {
}

function trimEnd(str) {
}


module.exports = {
  slice,
  repeat,
  startsWith,
  endsWith,
  includes,
  join,
  split,
  trimStart,
  trimEnd,
}
