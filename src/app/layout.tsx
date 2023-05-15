import Navbar from '@/components/Navbar'
import Providers from '@/components/Providers'
import { Toaster } from '@/components/ui/toast'
import { cn } from '@/lib/utils'
import '@/styles/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html
			lang="en"
			className='bg-white text-slate-900 antialiased'>
			<body className={cn('min-h-screen bg-slate-50 dark:bg-slate-900 antialiased', inter.className)}>{children}
				<Providers>
				
				<Toaster position='bottom-left'/>

				{/* @ts-expect-error Server Component */}
				<Navbar  />

				</Providers>
				{/* Giving some height to mobiles */}
				<div className='h-40 md:hidden' />
			</body>
		</html>
	)
}
