import React, { PropsWithChildren } from 'react'
import { Inter } from '@next/font/google'
import { Footer } from '@/components/common/Footer'
import { Header } from '@/components/common/Header'

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter',
})

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
	return (
		<div
			className={`${inter.variable} font-sans text-customBlack p-0 m-0 min-h-screen grid grid-rows-[auto_1fr_auto]`}
		>
			<Header />
			<div className='container mx-auto mb-4 mt-4 grid grid-cols-[400px_minmax(400px,_1fr)] gap-x-4'>
				{children}
			</div>
			<Footer />
		</div>
	)
}
