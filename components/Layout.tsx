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
            {children}
            <Footer />
        </div>
    )
}
