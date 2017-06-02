/**
 * Created by USER on 03/06/2017.
 */
/**
 * Greeter class for displaying greeting message
 */
var Greeter = (function () {
    function Greeter(_greetMessage) {
        this.greetMessage = _greetMessage;
    }

    Greeter.prototype.greet = function () {
        console.log(this.greetMessage + "...");
    };
    return Greeter;
}());
/**
 * Instance creation for Greeter class
 * @type {Greeter}
 */
var welcomeGreet = new Greeter('Welcome to the Angular World');
welcomeGreet.greet();
