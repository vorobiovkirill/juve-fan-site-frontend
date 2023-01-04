import React, { PropsWithChildren } from 'react'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className="p-0 m-0 min-h-screen grid grid-rows-[auto_1fr_auto]">
            <Header />
            <main className="grid grid-cols-3 gap-x-4">{children}</main>
            <Footer />
        </div>
    )
}
