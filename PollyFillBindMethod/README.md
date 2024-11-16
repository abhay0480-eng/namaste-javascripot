{/* Steps to do pollyfill for mybind method */}
{/*
     1. watch carefully to this bind method, Every function has access to this bind method. So we also do that same thing with "mybind" method using Funtion.prototype
        If we keep any method in Function.prototype then each and every method what we write has access to those methods

        eg:  Function.prototype.mybind = () =>{
    
        }

    2. when we write bind method it gives us a function which call later, we do this behaviour to "mybind" method. So we retun function from this
        eg: return  () => {

            }
    
    3. Another thing  to noticed is if we call "callPerson1Later" then "showGreeting" will be executed. so we use this variable to get "showGreeting" function inside my bind.
        eg: const fn = this
            fn.call();
        But we need to call this function with arguments , we do with like (...args)
        eg: Function.prototype.mybind = (...args) 
*/}