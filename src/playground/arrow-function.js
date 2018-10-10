const city ={
    name:'chytra',
    cities:['NY','LA','LV'],
    citiLived(){
        return this.cities.map((live)=>this.name + 'lived in'+ live);
    }

    
}
console.log(city.citiLived());


const mul ={
    numbers:[1,3,5],
    mul:5,
    multiply(){
        return this.numbers.map((mu)=>mu*this.mul);
    }
}

console.log(mul.multiply());

const add ={
    addition:99,
    num:[14,45,55,"c"],
    addit(){
        return this.num.map((sum)=>sum+this.addition);
    }
}

console.log(add.addit());