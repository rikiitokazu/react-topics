'use client'
// useEffect vs useLayout

import { useState } from "react"

export default function EffectLayout(): JSX.Element {
    const [dummy, setDummy] = useState(false)
    const [dummy2, setDummy2] = useState(false)


    return (
        <div className = "">
            <header className = "flex justify-center pt-10 pb-5 font-bold text-2xl bg-slate-50"> 
                useEffect vs. useLayoutEffect
            </header>
            <section className = "grid grid-cols-2">
                <div className = "border-r-2 border-black p-4">
                    <header className = "text-center text-lg font-semibold">
                    useEffect
                    </header>
                    <div className = "flex flex-col gap-2">
                        <section>
                            useEffect
                        </section>
                        <button className = "btn btn-neutral border-black btn-xsm" onClick = {() => setDummy(!dummy)}>
                            Button
                          </button>
                          
                    </div>
                </div>
                
                <div className = "p-4">
                    <header className = "text-center text-lg font-semibold">
                    useLayoutEffect 
                    </header>
                    <div className = "flex flex-col gap-2">
                        <section>
                        description
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

