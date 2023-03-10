import React, { PropsWithChildren } from 'react'
import { Footer } from '@/components/common/Footer'
import { Header } from '@/components/common/Header'
import { Inter } from '@next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const LayoutForNewsPost: React.FC<PropsWithChildren> = ({
  children,
}) => {
  return (
    <div
      className={`${inter.variable} font-sans text-customBlack p-0 m-0 min-h-screen grid grid-rows-[auto_1fr_auto]`}
    >
      <Header />
      <div className='container mx-auto mb-4 mt-4 bg-white grid grid-cols-[300px_minmax(400px,_1fr)_300px] gap-x-4'>
        <aside className=''>SIDEBAR 1</aside>
        {children}
        <aside className=''>SIDEBAR 2</aside>
        <aside
          aria-label='Related articles'
          className='col-span-3 w-full py-8 lg:py-24 bg-gray-50 dark:bg-gray-800'
        >
          <div className='px-4 mx-auto max-w-screen-xl'>
            <h2 className='mb-8 text-2xl font-bold text-gray-900 dark:text-white'>
              Related articles
            </h2>
            <div className='grid gap-12 sm:grid-cols-2 lg:grid-cols-4'>
              <article className='max-w-xs'>ARTICLE 1</article>
              <article className='max-w-xs'>ARTICLE 2</article>
              <article className='max-w-xs'>ARTICLE 3</article>
              <article className='max-w-xs'>ARTICLE 4</article>
            </div>
          </div>
        </aside>
      </div>
      <Footer />
    </div>
  )
}
