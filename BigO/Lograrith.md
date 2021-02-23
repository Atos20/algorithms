
## Logarithms

What 's a log agian?

There are some expression that are more  complex.

The most common complexity examples are: O(1), O(n),O(n<sup>2</sup>).

Sometimes big O 
 expresssions involve more complex mathematical expressions


Logarithims is the invers of exponantiation, just like mutiplications and devision are a pair logarithms and exponatiation are a pair.

Examples:

you would read the following example

- Log base two of eight equals 3

 log<sub>2</sub>8 = 3 `=>` what power will give us 3 `=>` 2<sup>3</sup>
 = 8
 
 log<sub>2</sub>(value) = exponent `=>` 2<sup><exponent/sup> = value
 - The most commong logarith is the base 2, base 10 or base i
 - We are concern about the big picture
 - We will omit the 2

 log === log<sub>2</sub>
  - `log` always has to have a base, it will be more common to see is log instead log<sub>2</sub>
### Rule of thumb

The logarithm of a number roughly measures the number of times you can divide that number by 2 **before you get a value that's less  than or equal to one**

  ```
  
  8 ÷ 2            25       ÷ 2
  4 ÷ 2            12.5     ÷ 2
  2 ÷ 2            6.25     ÷ 2
  1                3.125    ÷ 2
                   1.5625   ÷ 2 //we only care about when the value is ≤ than 1
  log(8)= 3        0.78125  ÷ 2
                   log(25)  ≈ 4.64
 
  ```

  What matters here is that if we look it on the chart  O(logn) is really good even O(n log n) is worst but not as mcuh as the O(n<sup>2</sup>)

  - Certain searching algorthims have logarthmic time complexity
  - Efficient sortign algotithms involve algorithms
  - Recursion sometimes involves logarithimc space complexity