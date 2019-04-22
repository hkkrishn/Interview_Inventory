// Write a function that takes an array of integers and returns a new array with
// eeach element replaced by the sum of its neighbors.


const neighborSum = (array) =>{
  let sum = []
  
   for(let i = 0;i < array.length;i++){
     if(i === 0){
       sum.push(array[i+1])
     } else if(i === array.length-1){
       sum.push(array[i-1])
     }
     else{
       sum.push(array[i-1]+array[i+1]);
     }
   
    }
    return sum
  }
  
  //neighborSum([2,3,5])
  //neighborSum([7, 4, 2, 9, 3, 5])
  
  
  // #### Decode ####
  // # You are given an encoded string. The code is defined as follows:
  //  * Each character in the encoded string is followed by a single-digit number.
  //  * The number represents how many times the character appears in a row.
  // #
  // # Write a function that takes in an encoded string and returns the original.
  // #
  // # Example:
  // # encoded_string = "m1i1s2i1s2i1p2i1"
  // # decoded_string = decode(encoded_string)
  // # decoded_string # => "mississippi"
  
  // # decode("f1o2d1")
  // # "food"
  
  const decode =(str) =>{
     const arraystr = str.split('');
     let finalarr = []
     var curr = ''
     console.log(arraystr)
     for(let i = 0;i<arraystr.length;i++){
       if(parseInt(arraystr[i])){
         console.log('pass')
         
         finalarr.push(curr+arraystr[i-1].repeat(parseInt(arraystr[i])))
       }
     }
     console.log(finalarr)
     const word =finalarr.join('')
     if(word === "mississippi"){
       return true
     }
  }
  
  //decode("m1i1s2i1s2i1p2i1")
  
  
  
  // #### Next Prime ####
  // # Given an array of numbers, replace each prime number in the array with
  // # the next prime number, e.g. 7 is replaced by 11.
  // #
  // # examples:
  // # next_prime([11,13,17]) #=> [13, 17, 19]
  // # next_prime([4,6,8,10]) #=> [4,6,8,10]
  // # next_prime([2,5,4,7]) #=> [3,7,4,11]
  
  // result = [3,7,4,11]
  
  
  const nextPrime = (array) =>{
    console.log(array)
    let primearr = []
    for(let i = 0;i<array.length;i++){
      if(array[i] !== 2 && array[i]%2 !== 0){
        primearr.push(array[i]);
      }
    }
    if(primearr.length === 0){
      return array
    }
    primearr.forEach((prime,i)=>{
      if(i===0){
        primearr[i] = primearr[i+1]}
        else if(i !==0 && i !== primearr.length-1 ){
          console.log(primearr[i])
          primearr[i] = primearr[i+1]
        }
       else if(i === primearr.length-1){
          if(primearr[i]+2 % 2 !== 0){
            primearr[i] = primearr[i]+2
          }
      }
    })
    console.log(primearr)
  
  }
  
  nextPrime([2,4,6,8,11,13,17])
  nextPrime([4,6,8,10])
  
  
  // #### Alien Phone Number ####
  // # There is a nearby alien planet whose numbers are formatted as
  // # "xxxx xxxx" where "x" is any numerical digit (0-9). Write a function
  // # that determines whether a given string is a valid alien phone number.
  // #
  // # constraint: You may not use RegExp.
  // #
  // # examples:
  // # alien_phone_number?('1234 5678') #=> true
  // # alien_phone_number?('ar32 t19i) #=> false
  // # alien_phone_number?('123 45678') #=> false
  // # alien_phone_number?('12345678') #=> false
  // # alien_phone_number?('1234 567') #=> false
  // # alien_phone_number?('12345 12345') #=> false
  // # "12 3 5678"
  
  
  // #### Math Eval ####
  // # Eval is a function that takes a string and executes it as code. This
  // # can be very complicated to implement, so you will only need to
  // # implement a small subset.
  // #
  // # Write a function math_eval that takes a string and evaluates single-digit
  // # numbers as well as the 4 basic arithmetic functions ( + - * / ). Do not worry about
  // # parentheses or order of operations. Just evaluate everything from left
  // # to right. You may also assume that you will be given syntactically
  // # correct statements with no spaces or extra characters.
  // #
  // # Constraint: You may not call eval or any similar function.
  // #
  // # Examples:
  // # math_eval('5') => 5
  // # math_eval('5+5') => 10
  // # math_eval('1+2*3') => 9
  // #
  // # Bonus: If you have extra time, support double-digit numbers.
  // # math_eval('10*2/5+16') => 20
  
  
  
  // #### Aliquot Sequence ####
  // # A number's aliquot sum is the sum of all of its factors excluding itself.
  // #
  // # For example, the aliquot sum of 10 is: 1 + 2 + 5 = 8
  // #
  // # We can use the aliquot sum to define a special sequence, called the
  // # aliquot sequence. The aliquot sequence of a number begins with the
  // # number itself. The second number in the sequence is the first number's
  // # aliquot sum, the third number is the second number's aliquot sum, and
  // # so on.
  // #
  // # For example, the first 4 numbers in the aliquot sequence of 10 are: 10, 8, 7, 1
  // #
  // # Write a function that takes in two numbers, base and n, and returns the
  // # aliquot sequence of length n starting with base.
  // #
  // # Examples:
  // # aliquot_sequence(10, 4) # => [10, 8, 7, 1]
  // # aliquot_sequence(10, 2) # => [10, 8]
  // # aliquot_sequence(7, 4) # => [7, 1, 0, 0]