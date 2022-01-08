import React from 'react'

export default function HomeLayout() {
    return (
        <section className="h-screen w-screen flex content-center">

            <div className="flex m-auto">
                {children}
            </div>

        </section>
    )
}
