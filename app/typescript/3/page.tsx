/* eslint-disable @typescript-eslint/no-unused-vars */


type Point = {x : number, y: number}
type P = keyof Point

const x = {x: "1", y: 2}
function badExample<T>(obj: T, key: keyof T) {
    return obj[key]
}
// extend keyword makes it more strict and constrains the type of the generic
function goodExample<T, K extends keyof T>(obj: T, key: K) {
    return obj[key]
}
const a = badExample(x, "x")
const b = goodExample(x, "x")


type Arrayish = {
    [n: number]: unknown
}
// [n: number] is an index signature, meaning that the keys are numbers

// A is of type number and not an array. 
type A = keyof Arrayish

// So arrayish would be like { 0: 2, 1: "4", 3: null }

export default function KeyOfTypeOf(): JSX.Element {
    return (
        <div className = 'p-5 grid grid-cols-2'>
            <div>
                The Keyof is an operator that will 
                return a union of all the keys of an object/hash. 
                It is useful when you want to iterate over the keys of an object. 
                It is useful when you want to check if a key exists in an object. 
            </div>
            <div>
                On the other hand, typeof is an operator that will return 
                type of a variable. It is not that useful for most cases, but 
                we can leverage TypeScript bulit in ReturnType where it takes a function 
                type and produces its return type. 
            </div>
        </div>
    )
}

// function return type, so like (): return type
type funcRet = (x?: unknown) => boolean;
// copy is now of type boolean, the return type of a function, so () => HERE
type copy = ReturnType<funcRet>; 
// NOTE: We can not do ReturnType<function> like ReturnType<() => boolean>
function example() { 
    return { x: 1, y: 2};
}
// gets the return type of the example function
type copy2 = ReturnType<typeof example>;

// in an object of this type, length and name are required
interface NumberOrStringDictionary {
    [index: string]: number | string; // Index signature: values must be number or string
    length: number; // Specific property: must be a number
    name: string; // Specific property: must be a string
  }
