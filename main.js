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
    if(i=== arr.length-1){
    newArr =newArr + arr[i]}
    else{
  newArr =newArr + arr[i] + separator}
}
return newArr
}


function split(str, separator) {
  let newArr=[]
  for(let i=0; i <str.length; i++){
    if (str[i] === separator){
    newArr.push(str.slice(0,i) +separator)
    }
    else if (str[i-1] === separator){
      newArr.push(str.slice(i))
    
  }
return newArr
}
}

function trimStart(str) {
  let newStr = ''
  for(let i=0 ; i <str.length; i++){
    
    if (str[i] === ' '){
      if( str[i] === ' ' && str[i+1] !== ' ' && str[i-1] !== ' '){
        newStr = newStr + str[i]}
      
      newStr = newStr
    }
    if (str[i] !== ' '){
      newStr = newStr + str[i]
    }
    
    else if (str[0 ] !== ' '){
      newStr = newStr + str[i]}

    else if (str[str.length] === ' ')
    newStr = newStr + str[i]
    
} 
return newStr

}


function trimEnd(str) {
  let newStr = ''
  for(let i=0 ; i <str.length; i++){
    
    if (str[i] === ' '){
      if( str[i] === ' ' && str[i+1] !== ' ' && str[i-1] !== ' '){
        newStr = newStr + str[i]}
      
      newStr = newStr
    }
  }
    return newStr
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
