'use client'
// useEffect vs useLayout

import { useImperativeHandle, useRef, forwardRef, useState } from "react"

export default function ImperativeHandleRef(): JSX.Element {
    const [dummy, setDummy] = useState(false)

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
                            Description:
                        </section>
                        <button className = "btn btn-neutral border-black btn-xsm" onClick = {() => setDummy(!dummy)}>
                            Button
                          </button>
                          
                    </div>
                </div>
                
                <div className = "p-4">
                    <header className = "text-center text-lg font-semibold">
                    forwardRef 
                    </header>
                    <div className = "flex flex-col gap-2">
                        <section>
                            Description:
                        </section>
                        <button className = "btn btn-neutral border-black btn-xsm" onClick = {() => setDummy(!dummy)}>
                            Button
                          </button>

                          
                    </div>
                </div>
            </section>
        </div>
    )
}

