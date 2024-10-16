'use client'
import React, { useCallback } from "react"
// useMemo vs useCallback

import { useMemo, useState } from "react"



function calculate():number {
    const start = performance.now()
    let res = 0
    for (let i = 0; i < 5000000; ++i) {
        res += 1
    }
    const end = performance.now() 
    console.log("-----TIME ELAPSED:", end-start)
    return res
}

const SlowComponent = React.memo(({clbck} :{clbck: () => void}) => {
    console.log("----SLOW COMPONENT")
    for (let i = 0; i < 10000000; ++i) {}
    return (
        <div>
            Slow component
        </div>
    )
})

const NotMemoized = ({clbck}: {clbck: () => void}) => {
    console.log("---not memoized")

    return (
        <div>
            Not memoized slow component
        </div>
    )
}

export default function MemoCallback(): JSX.Element {
    const [dummy, setDummy] = useState(false)
    const [dummy2, setDummy2] = useState(false)
    const [clback, setClbakc] = useState(false)
    const [memo, setMemo] = useState()
    const value = useMemo(calculate, [memo])


    const CallbackFunction = useCallback(() => {
        setDummy2(false)
    },[clback])

    const NormalFunction = () => {
        setDummy2(false)
    }

    return (
        <div className = "">
            <header className = "flex justify-center pt-10 pb-5 font-bold text-2xl bg-slate-50"> 
                useMemo vs. useCallback
            </header>
            <section className = "grid grid-cols-2">
                <div className = "border-r-2 border-black p-4">
                    <header className = "text-center text-lg font-semibold">
                    useMemo
                    </header>
                    <div className = "flex flex-col gap-2">
                        <section>
                        useMemo will memoized a computed expensive value,
                        unless the dependency array changes. This avoids computing
                        when its not necessary
                        </section>
                        <button className = "btn btn-neutral border-black btn-xsm" onClick = {() => setDummy(!dummy)}>
                            Trigger re-render
                          </button>
                          
                    </div>
                </div>
                
                <div className = "p-4">
                    <header className = "text-center text-lg font-semibold">
                    useCallback
                    </header>
                    <div className = "flex flex-col gap-2">
                        <section>
                        useCallback is used at the top level to cache a function
                        between re-renders. 
                        Usually paired with React.memo. React.memo is attatched to the 
                        child component, and this will ensure that it will only re-render if 
                        its props have changed. 
                        However, even when using React.memo, if we pass a function to 
                        the child component, the child will still be re-renderd. This is
                        because the function is being recreated with a different reference, 
                        so it sees the props as being "changed". This is different than passing
                        a literal/value. Best used if there is an expensive calculation 
                        in the child component. 
                        </section>
                        <button className = "btn btn-neutral border-black btn-xsm" onClick = {() => setDummy(!dummy)}>
                            Trigger re-render
                          </button>
                          <SlowComponent clbck = {CallbackFunction} />
                          <NotMemoized clbck={NormalFunction} />
                          
                    </div>
                </div>
            </section>
        </div>
    )
}

