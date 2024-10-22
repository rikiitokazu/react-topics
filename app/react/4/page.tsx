'use client'

import { use } from "react"

export default function UseHook(): JSX.Element {

    return (
        <div className = "">
            <header className = "flex justify-center pt-10 pb-5 font-bold text-2xl bg-slate-50"> 
                use (with Suspsense and ErrorBoundary)
            </header>
            <section className = "grid grid-cols-2">
                <div className = "border-r-2 border-black p-4">
                    <header className = "text-center text-lg font-semibold">
                        use
                    </header>
                    <div className = "flex flex-col gap-2">
                        <section>
                            Description: 
                        </section>
                        <button className = "btn btn-neutral border-black btn-xsm" onClick = {() => {}}>
                            Button
                          </button>
                          
                    </div>
                </div>
                
                <div className = "p-4">
                    <header className = "text-center text-lg font-semibold">
                        Error and Suspense Boundary
                    </header>
                    <div className = "flex flex-col gap-2">
                        <section>
                            Description:
                        </section>
                        <button className = "btn btn-neutral border-black btn-xsm" onClick = {() => {}}>
                            Button
                          </button>

                          
                    </div>
                </div>
            </section>
        </div>
    )
}

