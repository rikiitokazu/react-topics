/* eslint-disable @typescript-eslint/no-unused-vars */


type Union = "Dog" | "Cat"
type A = {
    name: string
}
type B = {
    email: string
}
type Intersection = A & B 

interface Person {
    name: string
}
interface Employee extends Person {
    id: number
}
export default function UnionIntersection():JSX.Element {
    const union :Union = "Cat" 
    const intersection: Intersection = {
        name:"John",
        email: "admin@admin"
    }


    return (
        <div className = 'p-5 grid grid-cols-2'>
            <div>
                One of the main differences between types and interfaces is that with interfaces, you could
                use the extend property whereas with types, you just use &. It performs the same functionality. 
                Interface is also merged, whereas type is standalone, meaning that you can have as many of the same 
                interfaces and it will become merged. Interface does not support unions. 
            </div>
            <div>
                So, usually using type is the best option in these cases. 
            </div>

        </div>
    )
}