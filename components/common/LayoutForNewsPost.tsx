import React, { PropsWithChildren } from 'react';
import { Footer } from '@/components/common/Footer';
import { Header } from '@/components/common/Header';
import { Inter } from '@next/font/google';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
})

export const LayoutForNewsPost: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className={`${inter.variable} font-sans text-customBlack p-0 m-0 min-h-screen grid grid-rows-[auto_1fr_auto]`}>
            <Header />
            <div className="container mx-auto mb-4 mt-4 bg-white grid grid-cols-[300px_minmax(400px,_1fr)_300px] gap-x-8">
                <aside>SIDEBAR 1</aside>
                {children}
                <aside>SIDEBAR 2</aside>
            </div>
            <Footer />
        </div>
    );
};
