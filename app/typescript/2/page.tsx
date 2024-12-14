/* eslint-disable @typescript-eslint/no-unused-vars */


type Lengthwise = {
    length: number
}

function loggingIdentity<Type extends Lengthwise>(arg: Type): Type {
    console.log(arg.length)
    return arg
}
loggingIdentity("Hello")
loggingIdentity([1,2,3])
loggingIdentity({length: 10, value: "Hello"})
// error
// loggingIdentity(10);

// Type parameters with generic constraints
// extends restricts a generic type to ensure it meets a certain criteria
function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
    return obj[key]
}
const x = { a: 1, b: 2, c: 3 }
getProperty(x, "a")
// error
// getProperty(x, "m")

// Using class types in Generics. Necessary to refer to class types by their constructor function. 
class BeeKeeper {
    hasMask: boolean = true;
}

class ZooKeeper { 
    nametag: string = "Mikle";
}

class Animal {
    numLegs: number = 4;
}

class Bee extends Animal {
    numLegs = 6;
    keeper: BeeKeeper = new BeeKeeper();
}

class Lion extends Animal {
    keeper: ZooKeeper = new ZooKeeper();
}

function createInstance<A extends Animal>(c: new () => A): A {
    return new c();
}

const x2 = createInstance(Bee).keeper.hasMask;
const y2 = createInstance(Lion).keeper.nametag;

// generic paramter defaults

export default function Generics(): JSX.Element {
    return (
        <div className = 'p-5 grid grid-cols-2'>
            <div>
                Generics are a way to create reusable components that can work with a variety of data types. 
                They allow you to define a function or class that can operate on any data type, rather than being 
                limited to a specific one.
            </div>
            <div>
            </div>
        </div>
    )
}