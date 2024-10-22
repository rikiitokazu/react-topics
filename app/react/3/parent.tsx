'use client'

import { useImperativeHandle, useRef, forwardRef, useState } from "react"
import { ChildComponent, type ChildHandle } from "./child"


export default function ParentComponent(): JSX.Element {
    const [dummy, setDummy] = useState(false)
    const ref = useRef<ChildHandle>(null)

    const button1Click = () => {
        ref.current?.alert()
    }
    const button2Click = () => {
        ref.current?.focus()
    }
    return (
        <div className = "">
            <header className = "flex justify-center pt-10 pb-5 font-bold text-2xl bg-slate-50"> 
                useImperativeHandle and forwardRef
            </header>
            <section className = "grid grid-cols-2">
                <div className = "border-r-2 border-black p-4">
                    <header className = "text-center text-lg font-semibold">
                        useImperativeHandle
                    </header>
                    <div className = "flex flex-col gap-2">
                        <section>
                            To use useImperativeHandle, we need to pair it with forwardRef. useImperativeHandle 
                            is used to customize a ref handle it exposes. In other words, we can specifically control 
                            the properties the parent component accesses, hence the child "exposes" it to the parent. 
                            We are customizing what this ref points to and any functionality that this parent component can 
                            access.  
                        </section>
                        <button className = "btn btn-neutral border-black btn-xsm" onClick = {button1Click}>
                            Button
                          </button>
                          <div className = "border-t-2 border-black">
                            <ChildComponent st = {dummy} ref = {ref}/>
                          </div>
                          
                    </div>
                </div>
                
                <div className = "p-4">
                    <header className = "text-center text-lg font-semibold">
                    forwardRef 
                    </header>
                    <div className = "flex flex-col gap-2">
                        <section>
                        forwardRef lets your component expose a DOM node to parent component with a ref. 
                        We are allowed to interact with the child DOM Node, as we can't directly assign a ref 
                        to a functional component and access its DOM or instance. 
                        So, in our child component, we create its own separate ref, and imperativeHandle will assign that childRef 
                        to the ref that was passed into it. Therefore, from the parent, we are able to access the input ref
                        </section>
                        <button className = "btn btn-neutral border-black btn-xsm" onClick = {button2Click}>
                            Button
                          </button>
                    </div>
                </div>
            </section>
        </div>
    )
}

