// Mappped Types
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

// Mapped types syntax are like index signatures, where
// you declare properties types ahead of time for an obj. 

type OptionsFlag<T> = {
    [Property in keyof T]: boolean
}
type Features = {
    darkMode: () => void,
    newUserProfile: () => void,
}

// This will now have the type of { darkMode: boolean, newUserProfile: boolean }
type FeatureOptions = OptionsFlag<Features>

// readonly and ? which affect mutability and optionality
type CreateMutable<T> = {
    -readonly [Property in keyof T]: T[Property];
}
type LockedAccount = {
    readonly id: string, 
    readonly name: string
}
// This will now have the type of { id: string, name: string }
type UnlockedAccount = CreateMutable<LockedAccount>

// The [Property] can be anything, but property refers to the "keys"
// of the object


// Removing optional 
// the - will remove the readonly or optional, whereas the + (default) will add
type Concreate<T> = {
    [Property in keyof T]-?: T[Property]; 
}
type MaybeUser = {
    id: string, 
    name?: string, 
    age?: number
}

type User = Concreate<MaybeUser>
// This will now have the type of { id: string, name: string, age: number }
// without the optionals



// Key Remapping
// Whatever is after the "as" is the new key name
// if it is just a default type, it will be 
// instead just be index signature of the type specified
type New<T> = { 
    [Property in keyof T as 'hello']: T[Property]
}
type User2 = New<{ id: number, name: string }>
// user2 is of type { hello: number | string }

type Getters<T> = {
    [Property in keyof T as `get${Capitalize<Property extends string ? Property : never>}`] : 
    () => T[Property]
}
type Person = {
    name: string, 
    age: number, 
    location: string
}
type LazyPerson = Getters<Person>
// LazyPerson is of type { getName: () => string, getAge: () => number, getLocation: () => string }

// If we want to remove a type, we can use Exclude
type RemoveKindField<T> = {
    [Property in keyof T as Exclude<Property, "kind">]: T[Property]
};
type Circle = {
    kind: "circle", 
    radius: number
}
type Kindlesscircle = RemoveKindField<Circle>

// Mapping over unions is distributive, so it works like a loop
type EventConfig<T extends { kind: string }> = {
    [E in T as E["kind"]]: (event: E) => void
}
// E in T is mapping over each union. 
// so think of it like for e in range(T)
type SquareEvent = { kind: "square", x: number, y: number }
type CircleEvent = { kind: "circle", radius: number }
type Config = EventConfig<SquareEvent | CircleEvent>


// Example of setting a boolean depending on if it extends
type Test<T> = {
    [Property in keyof T]: T[Property] extends { pii: boolean } ? true : false
}
type Fields = {
    id: { format: "uuid" }, 
    name: { pii: true }
}
type NewTest = Test<Fields>
// NewTest is of type { id: true, name: false }

export function MappedTypes(): JSX.Element {
    return (
        <div>
            Mapped types are usually used with keyof to create new types
        </div>
    )
}