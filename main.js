let menu = {
    courses: {},
        appetizers: [],
        mains: [],
        desserts: []
    ,
    addDishToCourse(courseName, dishName, dishPrice) {
        let dish = {
            name: dishName,
            price: dishPrice,
        };
       courses.appetizers.addDishToCourse()
    },
    getRandomDishFromCourse(courseName) {
        let dishes = this.courses[courseName];
        let randomIndex = Math.floor(Math.random() * dishes.length);

        return dishes[randomIndex];
    },
    generateRandomMeal() {
        const appetizer = this.getRandomDishFromCourse(this.appetizers)
        const main = this.getRandomDishFromCourse(this.mains)
        const dessert = this.getRandomDishFromCourse(this.desserts)
        const totalPrice = appetizer.dishPrice + main.dishPrice + dessert.dishPrice

        return appetizer + main + dessert + totalPrice
    }
}

let meal = menu.generateRandomMeal()
console.log(meal)
