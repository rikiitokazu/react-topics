'use client'

import { useImperativeHandle, forwardRef, useRef } from "react"



export type ChildHandle = {
    alert: () => void,
    focus: () => void
}
type ChildProps = {
    st: boolean,
}
export const ChildComponent = forwardRef<ChildHandle, ChildProps>((props, ref) => {
    const childRef = useRef<HTMLInputElement>(null)

    useImperativeHandle(ref, () => {
        return{
            alert() {
                if (childRef.current) {
                    console.log("alerting")
                }
            },
            focus() {
                if (childRef.current) {
                    childRef.current.focus()
                }
            }
        }

    },[])
    return (
        <>
         <div>ChildComponent</div>
         <input ref={childRef} type="text" className = "border border-black " value = {"fdjklfjdskflksdfj"}/>
        </>
    
    )
})


