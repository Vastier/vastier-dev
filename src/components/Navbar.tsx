
import Link from 'next/link'
import { ThemeToggle } from './ThemeToggle'
import { buttonVariants } from './ui/Button'
import Icons from './Icons'

const Navbar = async () => {


	return (
	<div className='fixed backdrop-blur-sm bg-white/75 dark:bg-slate-900/75 z-50 top-0 left-0 right-0 h-20 border-b border-slate-300 dark:border-slate-700 shadow-sm flex items-center justify-between'>
		<div className='container max-w-7xl mx-auto w-full flex justify-between items-center'>
		<Link href='/' className={buttonVariants({ variant: 'link' })}>
			<Icons.Sprout className='text-green-700'/>
		Vastier&apos;s Home
		</Link>

		<div className='md:hidden flex gap-2 pr-4'>
			<ThemeToggle />
			<Link
			href='https://flowcv.com/resume/pt8st9mski'
			className={buttonVariants({ variant: 'default' })}>
			Currículo
			</Link>
		</div>

		<div className='hidden md:flex gap-4 pr-4'>
			<ThemeToggle />
			<Link
			href='https://flowcv.com/resume/pt8st9mski'
			className={buttonVariants({ variant: 'default' })}>
			Currículo
			</Link>

		</div>
		</div>
	</div>
	)
}

export default Navbar
