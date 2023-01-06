import React, { PropsWithChildren } from 'react'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

type LayoutProps = {
    className: string
}

export const Layout: React.FC<PropsWithChildren & LayoutProps> = ({ className, children }) => {
    return (
        <div className={className}>
            <Header />
            <div className="container mx-auto mb-4 mt-4">
                <main className="grid grid-cols-[400px_minmax(400px,_1fr)] gap-x-4">{children}</main>
            </div>
            <Footer />
        </div>
    )
}
