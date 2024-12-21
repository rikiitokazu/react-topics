// Conditional Types
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

type IdLabel = {
    id: number
}

type NameLabel = {
    name: string
}
type NameOrId<T extends number | string> = T extends number ? IdLabel: NameLabel; 

function createLabel<T extends number| string>(arg: T): NameOrId<T> {
    console.log(arg)
    throw "unimplemented"
}
// let a = createLabel("hello")
// let b = createLabel(123)
// let c = createLabel(Math.random() ? "Hello" : 123)

// The one below throws an error because T can not be used to index, we don't know
// type Message<T> = T["message"];
// instead, we can do this:
type Message<T extends { message: unknown }> = T["message"]
type Email = { 
    message: string
}
type EmailMessageContents = Message<Email>

type MessageConditional<T> = T extends { message: unknown } ? T["message"] : never

// Remember, doing T[number] is getting the type of the elements in the array. 
type Flatten<T> = T extends unknown[] ? T[number] : T
type Str = Flatten<string[]>;

// We can do the same thing by using infer
type Flatten2<T> = T extends Array<infer Item> ? Item : T
type Str2 = Flatten2<string>

// using infer, we can also get the return type of a function
type GetReturnType<T> = T extends (...args: never) => infer R ? R : never
type Num = GetReturnType<() => number>
type SingleStr = GetReturnType<(x: string) => string>
type Bools = GetReturnType<(a: boolean, b: boolean) => boolean[]>


// Types are distribute
type ToArray<T> = T extends any ? T[] : never
type StrNum = ToArray<string | number>
// the type above is string[] or number[]

// but if we want to have it so that StrNum is (string | number)[], 
// we can surround the type with square brackets
type CombinedArr<T> = [T] extends [any] ? T[] : never
type StrNum2 = CombinedArr<string | number>
// the aboe type is now (string | number)[]




export function ConditionalTypes(): JSX.Element {
    return (
        <div className = "p-5 grid grid-cols-2 gap-4">
            <div>
                if a type extends another type, it basically just means
                whether the first type is a subset of the second type.
                If T extends U, it is asking if T is a subset of U, or basically
                contrains T to type U. 
                This is useful for generics when we want to reduce overload functions. 
            </div>
        </div>
    )
}