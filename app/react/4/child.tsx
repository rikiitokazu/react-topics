import { Usable, use } from "react"

export function ChildComponent({promise}:{promise:Usable<string>}): JSX.Element {
    const value = use(promise)
    return <div>{String(value)}</div>
}