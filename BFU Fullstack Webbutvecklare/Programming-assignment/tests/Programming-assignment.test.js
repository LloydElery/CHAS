const { priceCalculator, pizzaCalculator, removeCheapest, combineOrders, checkTopping, customPizzaPrice, reversePizzasToNewArray, reversePizzasInExistingArray } = require('../Programming-assignment');

describe('priceCalculator', () => {
    it('should return the sum of these random numbers in the array', () => {
        let order = [];
        const items = Math.floor(Math.random() * (10 - 3 + 1) + 3);

        for (let i = 0; i <= items; i++) {
            order.push(Math.floor(Math.random() * (10 - 1 + 1) + 1))
        }
        const result = priceCalculator(order);
        let sum = order.reduce((pv, cv) => pv + cv, 0);
        console.log(`Task 1: \n\nThis is the original array: ${order} \n\nYour result: ${result} \n\nThis is the expected result: ${sum}`);

        expect(result).toBe(sum);
    });
});

describe('pizzaCalculator', () => {
    it('should return the amount of pizzas in the order array', () => {
        let pizzas = ["Margherita", "Marinara", "Quattro Stagioni", "Carbonara", "Frutti di Mare", "Quattro Formaggi", "Crudo", "Napoletana", "Pugliese", "Montanara", "Emiliana", "Romana", "Fattoria", "Schiacciata", "Prosciutto", "Americana", "Prosciutto e Funghi", "Braccio di Ferro", "Tonno", "Gorgonzola"];
        let order = [];
        const items = Math.floor(Math.random() * (6 - 3 + 1) + 3);
        
        for (let i = 0; i <= items; i++) {
            order.push(pizzas[Math.floor(Math.random() * ((pizzas.length - 1) - 1 + 1) + 1)]);
        }

        const result = pizzaCalculator(order);
        const test = order.length;

        console.log(`Task 2: \n\nThis is the order array: ${order} \n\nThis is your result: ${result} \n\nThis is the expected result: ${test}`);

        expect(result).toBe(test);
    })
})

describe('removeCheapest', () => {
    it('should find the cheapest price from the array, remove it from the total price and then return the total price and the cheapest price', () => {
        let order = [];
        const items = Math.floor(Math.random() * (10 - 4 + 1) + 4);

        for (let i = 0; i <= items; i++) {
            order.push(Math.floor(Math.random() * (20 - 6 + 1) + 6));
        }
        const [totalPrice, cheapest] = removeCheapest(order);
        const orderCopy = new Int32Array([...order]);
        orderCopy.sort();
        const testCheapest = orderCopy[0];
        orderCopy[0] = 0;
        const testPrice = orderCopy.reduce((pv, cv) => pv + cv, 0);
        console.log(`Task 3: \n\nThis is the original array: ${order} \n\nThese are your results: ${totalPrice}, ${cheapest} \n\nThese are the expected results: ${testPrice}, ${testCheapest}`);

        expect(totalPrice).toBe(testPrice);
        expect(cheapest).toBe(testCheapest);
    });
});

describe('combineOrders', () => {
    it('should take two orders (arrays) containing pizza names and combine them into one order (new array) and return the new array', () => {
        let pizzas = ["Margherita", "Marinara", "Quattro Stagioni", "Carbonara", "Frutti di Mare", "Quattro Formaggi", "Crudo", "Napoletana", "Pugliese", "Montanara", "Emiliana", "Romana", "Fattoria", "Schiacciata", "Prosciutto", "Americana", "Prosciutto e Funghi", "Braccio di Ferro", "Tonno", "Gorgonzola"];
        let order1 = [];
        let order2 = [];
        const items = Math.floor(Math.random() * (6 - 3 + 1) + 3);

        for (let i = 0; i <= items; i++) {
            order1.push(pizzas[Math.floor(Math.random() * ((pizzas.length - 1) - 1 + 1) + 1)]);
            order2.push(pizzas[Math.floor(Math.random() * ((pizzas.length - 1) - 1 + 1) + 1)]);
        }
        
        const result = combineOrders(order1, order2);
        const test = order1.concat(order2);

        console.log(`Task 4: \n\nThese are the original arrays: ${order1} and ${order2} \n\nThis is your result: ${result} \n\nThis is the expected result: ${test}`)

        let same;
        for (let i = 0; i <= test.length; i++) {
            if (result[i] !== test[i]) {
                same = false;
                break;
            } else {
                same = true;
            }
        }

        expect(same).toBeTruthy();
    })
})

describe('checkTopping', () => {
    it('should check if the given topping is available in the topping array and if it is return "Topping available" and if not return "Topping not available"', () => {
        let toppings = ["Pepperoni", "Mushroom", "Extra cheese", "Sausage", "Onion", "Black olives", "Green pepper", "Fresh garlic", "Tomato", "Fresh basil", "Chicken", "Chorizo", "Mussels", "Olive oil", "Parsley", "Pineapple", "Ham"];
        let notToppings = ["Avocado", "Salmon", "Mayonnaise", "Wasabi", "Bacon", "Crab", "Cilantro", "Black beans", "Blue cheese", "Parmesan", "Hot chili powder", "Manchego cheese", "Eggplant", "Eggs", "Goat cheese", "Minced meat", "BBQ Sauce"];
        let topping;
        let test;
        const randomValue = Math.floor(Math.random() * 2);

        if (randomValue) {
            topping = toppings[Math.floor(Math.random() * toppings.length)]
        } else {
            topping = notToppings[Math.floor(Math.random() * notToppings.length)]
        }

        let result = checkTopping(topping, toppings);

        if (toppings.includes(topping)) {
            test = "Topping available"
        } else {
            test = "Topping not available"
        }

        console.log(`Task 5: \n\nThis is the topping: ${topping} \n\nThis is your result: ${result} \n\nThis is the expected result: ${test}`);

        expect(result === test).toBeTruthy();
    })
})

describe('customPizzaPrice', () => {
    it('should check if chosen toppings are cheap or expensive and update the pizza price accordingly', () => {
        let cheapToppings = ["Pepperoni", "Mushroom", "Extra cheese", "Sausage", "Onion", "Black olives", "Green pepper", "Fresh garlic", "Tomato", "Fresh basil", "Chicken", "Chorizo", "Mussels", "Olive oil", "Parsley", "Pineapple", "Ham"];
        let expensiveToppings = ["Avocado", "Salmon", "Mayonnaise", "Wasabi", "Bacon", "Crab", "Cilantro", "Black beans", "Blue cheese", "Parmesan", "Hot chili powder", "Manchego cheese", "Eggplant", "Eggs", "Goat cheese", "Minced meat", "BBQ Sauce"];
        let toppings = [];
        let testPrice = 9;

        for (let i = 0; i < 4; i++) {
            const randomValue = Math.floor(Math.random() * 2);
            if (randomValue) {
                toppings.push(cheapToppings[Math.floor(Math.random() * cheapToppings.length)])
            } else {
                toppings.push(expensiveToppings[Math.floor(Math.random() * expensiveToppings.length)])
            }
        }

        const result = customPizzaPrice(toppings, cheapToppings, expensiveToppings);

        toppings.forEach(topping => {
            if (cheapToppings.includes(topping)) {
                testPrice += 1;
            } else {
                testPrice += 2;
            }
        });

        console.log(`Task 6: \n\nThis is the original array: ${toppings} \n\nThis is your result: ${result} \n\nThis is the expected result: ${testPrice}`)

        expect(result).toBe(testPrice);
    })
})

describe('reversePizzasToNewArray', () => {
    it('should create a new array, reverse provided array to the new array and return the new array', () => {
        let pizzas = ["Margherita", "Marinara", "Quattro Stagioni", "Carbonara", "Frutti di Mare", "Quattro Formaggi", "Crudo", "Napoletana", "Pugliese", "Montanara", "Emiliana", "Romana", "Fattoria", "Schiacciata", "Prosciutto", "Americana", "Prosciutto e Funghi", "Braccio di Ferro", "Tonno", "Gorgonzola"];
        let queue = [];
        const items = Math.floor(Math.random() * (10 - 3 + 1) + 3);

        for (let i = 0; i <= items; i++) {
            let index = Math.floor(Math.random() * ((pizzas.length - 1) - 1 + 1) + 1);
            queue.push(pizzas[index]);
        }
        let queueTest = [...queue];
        let queueCopy = [...queue];
        const result = reversePizzasToNewArray(queueTest);
        let reversed = queueCopy.reverse();
        console.log(`Task 7: \n\nThis is the original queue: ${queue} \n\nYour result: ${result} \n\nThis is the expected result: ${reversed}`);
        
        let same;
        for (let i = 0; i <= items; i++) {
            if (result[i] !== reversed[i]) {
                same = false;
                break;
            } else {
                same = true;
            }
        }

        expect(same).toBeTruthy();
    })
})

describe('reversePizzasInExistingArray', () => {
    it('should reverse the array provided to the function and return it', () => {
        let pizzas = ["Margherita", "Marinara", "Quattro Stagioni", "Carbonara", "Frutti di Mare", "Quattro Formaggi", "Crudo", "Napoletana", "Pugliese", "Montanara", "Emiliana", "Romana", "Fattoria", "Schiacciata", "Prosciutto", "Americana", "Prosciutto e Funghi", "Braccio di Ferro", "Tonno", "Gorgonzola"];
        let queue = [];
        const items = Math.floor(Math.random() * (10 - 3 + 1) + 3);

        for (let i = 0; i <= items; i++) {
            let index = Math.floor(Math.random() * ((pizzas.length - 1) - 1 + 1) + 1);
            queue.push(pizzas[index]);
        }
        let queueTest = [...queue];
        let queueCopy = [...queue];
        const result = reversePizzasInExistingArray(queueTest);
        let reversed = queueCopy.reverse();
        console.log(`Task 8: \n\nThis is the original queue: ${queue} \n\nYour result: ${result} \n\nThis is the expected result: ${reversed}`);
        
        let same;
        for (let i = 0; i <= items; i++) {
            if (result[i] !== reversed[i]) {
                same = false;
                break;
            } else {
                same = true;
            }
        }

        expect(same).toBeTruthy();
    });
})