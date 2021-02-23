## Objects

```js
let inrstructor ={
  firstName : 'Rob'
  isInstructor: true,
  favoriteNumbers: [1, 2, 3, 4, 5]
}
```
* Hashing

- Ther are very quick for insertion, removal and accessing data. 
- JavaScript is able to add elements to and remove elements from an object in constant time.
- There is no order, it doesn't matter where you insert the elements because there is no order.

There will be a section in this course about `hash tables` and `hash times`. 

Searching though will be O(n), for each element in the object we will have to inspect every single element, so as `n` grows the time complexity grows.

**Some Object methods**

``` js
//O(n) 
 Object.keys(instroctur)
 Object.entries(instroctur)
```

```js
//O(1)
  Object.hasOwnProperty("firstName")
  //true 
```

## Arrays

Arrays are ordered lists unlike objects. These are very useful for certain operation but they come with a cost, usually "time".

- If you need to store data but you don't care about the order then use objects, these sometimes perfom better than an array.

- If you care about the order you deffinetly want to use an array, specially when accessing and removing data.

    - Insertion - `it depends`
    - Removal - `it depends`
    - Searching - `O(N)`
    - Access- `O(1)`

```js
  let names = ["Michael", "Melissa", "Andrea"]
  let values = [true, {}, [], 2, "awesome"]
```

If we ask for name at index 2
the result will be:

```js
 names[2] = "Andrea"
```

Insertion 

```js
names.push("Raj")
let names = ["Michael", "Melissa", "Andrea", "Raj"]
```

Adding elements to the end of the array won't be as diffcult than inserting elements at the beginig of the array. When we add them JS will have to reindex all elemets  which it is not a trivial task. So there is some optimzation by adding elements at the end of the array.
If you add or remove elements try to do it at the end of the array not at the beginig of the array.

- `push` and `pop` will be more efficient
- `shift` or `unshift` come with a cost unless the array is empty

```js
names.unshift("Raj")
let names = ["Michael", "Melissa", "Andrea", "Raj"]
//               0           1         2       3
```

- If the array is unsorted we will have to check every single elemet, so time will grow as N grows.

## Array prototype methods and their complexity

- push O(1)
- pop O(1)
- shift O(n)
- unshift O(n)
- concat O(n)
- slice O(n)
- splice O(n)
- sort O(n*log n)
- forEach/ map/ filter/ reduce/ find/ etc. O(n)