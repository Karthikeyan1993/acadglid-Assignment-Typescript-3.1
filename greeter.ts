/**
 * Created by USER on 03/06/2017.
 */
/**
 * Greeter class for displaying greeting message
 */
class Greeter {
    greetMessage: string;

    constructor(_greetMessage: string) {
        this.greetMessage = _greetMessage;
    }

    greet(): void {
        console.log(`${this.greetMessage}...`);
    }
}
/**
 * Instance creation for Greeter class
 * @type {Greeter}
 */
let welcomeGreet = new Greeter('Welcome to the Angular World');
welcomeGreet.greet();