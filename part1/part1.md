## Part 1a
1. values added: 20
2. final result: 20
3. values added: 20
4. "result is not defined". This is because when declared with let, variables only exist within the scope of their code block
5. TypeError: Assignment to constant variable. You cannot update the value of a constant
6. Line 13 did not run due to previous error

## Part 1b
1. Prints 3, that is the number of times for loop runs, and i is a var so it has global scope
2. Prints 150, discounted price. It is also a var and has global scope. 
3. Prints 150, final price. It is also a var and has global scope. 
4. Prints [ 50, 100, 150 ]. For loop iterates through each item, applies the discount, and adds it to the discounted array, which is returned. 
5. i is not defined error. When using let, i is limited to the scope of the for loop. 
6. discountedPrice is not defined error. When using let, discountedPrice is limited to the scope of the for loop.  
7. Prints 150, since finalPrice is defined to the scope of the entire function.
8. Prints [50, 100, 150]. Same thing happens as before. Since we are storing the *values* in an array and returning it, the scope of the *variables* does not affect the result. 
9. i is not defined, only exists in the for loop
10. Prints 3, the length, since it exists in the scope of the function
11. Prints [50, 100, 150]. Same thing happens as before. Since we are storing the *values* in an array and returning it, the scope of the *variables* does not affect the result. 
12. notations
    a. student.name
    b. student['grad year']
    c. student.greeting();
    d. student['Favorite Teacher'].name
    e. student.courseLoad[0]
13. Arithmetic
    a. '32', 2 is casted to string
    b. 1, '3' is casted to integer
    c. 3, null maps to 0
    d.  '3null', null gets casted to string
    e. 4, true maps to 1
    f. 0, false and null map to 0
    g. '3undefined', undefined gets casted to string
    h. NaN, no possible conversions make sense
14. Comparison
    a. true, 2 gets mapped to int
    b. false, in ascii, '2' is greater than '1'
    c. true, == performs value check, no type
    d. false, === performs type check
    e. false, true maps to 1
    f. true, Boolean(2) maps to true
15. == checks for value without type, === checks for EVERYTHING to be the same, including type
16. See js file
17. The result is [2,4,6]. In the mod function, the for loop runs on every item in the array, applying the callback to each item, which simply multimplies the parameter b y 2. Then this is pushed back to newarr, which is then returned after processing the whole array. 
18. See js file
19. 1 4 3 2