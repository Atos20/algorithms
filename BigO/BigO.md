## Big O notation

### Intro

First I want to address that I was so hesitant to learn about Big because I never consider myself to be good at math. I started my journey to become a  software developer  back in May 2020 and I thought I didn't have to use math  but Oh! I was worong.

I am happy I was wrong because after all this time one thing I can say with certanty is that software development has removed from me the fear of not knowing and normalizing  the state to allow more space for my natural curiosity. This has allowed me to tackle complex and intimidating problem with fresh-new eyes.

### Why the Fuzz Big O ?

The first thing I wanted to know is why is  `Big O` so important. I remember having a class about this topic but nothing landed on me. I heard about many unfammiliar concepts in the lesson that it didn't click at the time. 

After some research and looking at my notes I found some of the main reason `Big O` is so important in the software engineering world.

## Reasons

- `Big O` enriches you  vocabulary when talking about code by giving you a numerical representaiton of the performance of your code.

- When making decisions about what code should be implemented, talking about time comaplexity will save you lines of dialogue 

- Gives you the poser to discern between the code that works for you from the one that does't.

### Who cares?

- Should it just only matter if the code works. Well it depends, when we are talking things like interviews or working for a large company that make use of large pieces data, the code will have an impact the company. 

- One algorithm implementation can save an hour everytime it runs 
compared to another implementation.

- Perfomance matter at this point. Ther is actually a best solution, so it is importnat to have the vocabulary to talk about the differente approaches.

- One solution can be sometime better than others.

- When your code slows dow or crashes, BigO allows us to identify parts of the code that are inneficient helping us to find pain points in our application

- It comes up in intervews all the time.

- Rememeber it is imoportant to have a precise vocabulary to talk about how our code perfoms


**To see an example go to:** `BigO/BigO.js`


The problem with time
depending with the especifiacions of the machine the time result will bre different. the exact same code will differ everytime and it will no be precices

For fast algorithms the code runs very fast and sometime the timing function might not be able to catch it. How do we walk through our code and actually talk about our which code is better.

It would be cool if there was a nrew way to quantify this code without running a code tt  may take 4 hours. here is wher `Big O` comes in.

### Big 0
Big 0 Notation  is  a way to formalize fuzzy counting 
it allows us to talk formally about how the run time of an algorithm grows as the input grows.

Describes the relations between hthe input to a function sa it grows and how that changes  the run time of that function. THe relation of the input size and the time relative to that input.

If we are not using time then what we can unse. Rather than counting seconds which are so variables. Let's count the number of simple operations that the computer has to perfom.

```js
  function addUpTo(n) {
    return n * (n +1 ) / 2 //only 3 operations 
  }

  // or 
//depends on the on an input, as N grows time will accordingly 
  function addIpTo(n) {
    let total = 0;
    for ( let i = 1; i <= n; i++> {
      total += i;
    }
    return total
  }
```

`f(n) could be linear (f(n) = n)`
`f(n) could be quadratic (f(n) = n^2)`
`f(n) could be constant (f(n) = 1)`
`f(n) could be something entirely different`

The thing to keep in minds ins that Big 0 is all about keeping in mind the worst case scenario.When N grows what the chart is going to look like, is is going to be `constant`, `log n`,`quadratic` etc.



## Simplifying Big 0

- There are two loops so we have O(n) & 0(n) = 0(2n) => 0(n)
- The chart says that it has a big 0 of n
- For a nested loop to 0(n) + 0(n) = 0(n *n ) => 0(n^2)

### Rules

Analizying complexity with BigO can get complicated 
There are severla rules of thumn  than can help
These rules won't  **ALWAYS** work but are a helpful starting point
consequesnces of definition of Big O

1- Arithmetic operations are constant
1- Variable assignment is constant
1- Accessing elements in an array(by index) or object (by key) is contant
1- In a loop, the, the complexity is the length of the loop times the complelxity of whatever happens inside of the loop

- Constants don't matter
```js
  O(2n)  => O(n)
  O(500) => O(1)
  o(13n^2) => O(n^2)
```
- Smaller terms don't matter

```js
  O(n + 10) => O(n)
  O(1000n + 50) => O(n)
  O(n^2 + 5n + 8) => O(n^2)
```

```js

//the following funciton n will be anything grater that 5 
//if  n is less than 5, n will be 5
  function logAtLeast5(n){
    for (let i =q; i <= Math.max(5, n); i++){
      console.log(i)
    }
  }

  logAtLeast(5)//

  //AS n startst to grow to infinity, if n is ten million the loop will grops in proportion to n
```

```js
  function logAtMost5(n){
    for(let i = 0; i <= Math.min(5, n); i ++){
      console.log(i);
    }
  }
  logAtMost5(100000000)
  //if n grows the BigO will always be constant
```

So the Big O will be =>
```js

  logAtLeast5(1000) => O(n)
  logAtMost5(1000)  => O(1)

```