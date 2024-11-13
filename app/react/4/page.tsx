'use client'

import { Suspense, Usable } from "react"
import { ChildComponent } from "./child"
import { ErrorBoundary } from "react-error-boundary"

export default function UseHook(): JSX.Element {
    const fetchData = (): Promise<string>=> {
        return new Promise((resolve) => {
            setTimeout(() => {
              console.log("1 seconds passed");
            //   const randomNumber = Math.floor(Math.random() * 2)
            //   if (randomNumber < 1) {
            //     reject("failed")
            //   }
              resolve("Hello"); 
            }, 1000);
          });
    }

    const promise: Usable<string> = fetchData()
    

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
                            The {"use"} API lets you read the value of a resource like a Promise or a context. With a Context, 
                            it can replace the useContext({"content"}) method to access the provider valuess, and instead we can just to use. 
                            This is better becaues this can be placed inside conditionals and {"doesn't"} behave like a normal hook. This is more 
                            preferable, in that it {"doesn't"} have to be called at the top-level of the component

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
                            In terms of using it for Promises, it is used with a Suspsense Fallback and an ErrorBoundary to catch the errors 
                            or wait for the promise to resolve. We can stream data from a server to client component, by passing in 
                            a promise as prop. Then in the child component, we use the use API on that prop, and display it. The Suspense and Error 
                            would be at the parent level. 
                        </section>
                        <button className = "btn btn-neutral border-black btn-xsm" onClick = {() => {}}>
                            Button
                          </button>
                          <ErrorBoundary fallback = {<>ERROR</>}>
                          <Suspense fallback = {<>Loading...</>}>
                            <ChildComponent promise={promise}/>
                          
                          </Suspense>
                          </ErrorBoundary>

                          
                    </div>
                </div>
            </section>
        </div>
    )
}

