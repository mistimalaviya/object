let sir=[ { name: "John", age: 20, "grade": "A" }, { name: "Alice", "age": 22, "grade": "B" }, { name: "Bob", "age": 21, "grade": "C" }]

sir.forEach((element,index)=>{
    if(element.age>21)
    {
        console.log(element.name)
    }
})