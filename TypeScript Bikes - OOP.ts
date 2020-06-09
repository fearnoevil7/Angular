class Bike {
    miles = 0;
    constructor(public price: number, public max_speed: number) {
        var self = this;
        this.price = price;
        this.max_speed = max_speed;
        this.miles = 0;
    }
    displayInfo(): any{
        console.log(this.price, this.max_speed)
        return this
    }
    ride(): any {
        console.log("riding...");
        this.miles += 10;
        return this
    }
    reverse(): any {
        console.log("reversing...");
        if (this.miles > 0) {
            this.miles -= 5;
        } else {
            console.log("cannot reverse because miles will go negative")
        }
        return this;
    }
}

var bike1 = new Bike(250, 25);
var bike2 = new Bike(700, 70);
var bike3 = new Bike(430, 52);
console.log(bike1)
console.log(bike2)
console.log(bike3)
// bike1.ride();
// bike1.ride();
// bike1.ride();
// bike1.reverse();
// bike1.displayInfo();
bike1.ride().ride().ride().reverse().displayInfo();
console.log(bike1)
// bike2.ride();
// bike2.reverse();
// bike2.reverse();
// bike2.displayInfo();
bike2.ride().reverse().reverse().displayInfo();
console.log("*******bike2")
console.log(bike2)
// bike3.reverse();
// bike3.reverse();
// bike3.reverse();
// bike3.displayInfo();
bike3.reverse().reverse().reverse().displayInfo();
console.log("*******bike3");
console.log(bike3);