# Greatest Movies !
***Look carefully at the documentation of every higher order functions, reduce, filter, sort, map etc...***  
***before using them !***  

***Make little tests on the side to get comfortable with them first, once you're comfortable with them it***  
***should be easier to go through the iterations.***


****MDN and google are your best friends !****


#### Iteration 6
You should make a copy of the original array and it's objects, there are many ways to achieve this.  
Have a look at [object.assign](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign).  

Arrays and objects are copied by reference and not by value meaning:  

``const person1 = { name : "Tom" }``  
``const person2 = person1``  

If you do this, person2 is referencing the same object as person1.  
Now try this:  

``person2.name = "Jimmy"``  
``console.log(person1)``  

You now notice that person1 has been modified aswell while assigning a new value to person2.  
Same goes for arrays but you're in luck ! `filter()` and `map()` create a new array :).

Hope this image helps you.

![](https://i.stack.imgur.com/AWKJa.jpg)