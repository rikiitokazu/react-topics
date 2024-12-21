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

export default function KeyOf(): JSX.Element {
    return (
        <div className = 'p-5'>
            <div>
                The Keyof is an operator that will 
                return a union of all the keys of an object/hash. 
                It is useful when you want to iterate over the keys of an object. 
                It is useful when you want to check if a key exists in an object. 
            </div>
        </div>
    )
}