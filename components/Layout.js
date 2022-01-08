import React from 'react'

export default function Layout({ children }) {
    return (

        <section className="h-screen w-screen flex content-center">

            <div className="flex m-auto">
                {children}
            </div>

            {/* <h1 className="flex m-auto border-2 border-black sm:text-4xl text-3xl font-medium text-gray-900">Microdosing synth tattooed vexillologist</h1> */}


            {/* <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Microdosing synth tattooed vexillologist</h1>
            </div> */}
        </section>

        // <div className="flex flex-col w-full max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
            
        //         {children}
            
        // </div>
    )
}
