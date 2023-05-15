import LargeHeading from "@/ui/LargeHeading"
import Paragraph from "@/ui/Paragraph"
import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
	title: "Vastier's Homepage",
	description: "Vastier's portfolio and homepage, be welcome."
}
export default function Home() {
	return (
		<div className='relative h-screen flex items-center justify-center overflow-x-hidden'>
			<div className='container pt-32 max-w-7xl w-full mx-auto h-full'>
				<div className='h-full gap-6 flex flex-col justify-start lg:justify-center items-center lg:items-start'>
					<LargeHeading
						size='lg'
						className='three-d text-black dark:text-white'>
						Olá. <br /> Seja bem vindo!
					</LargeHeading>

					<Paragraph className='max-w-xl lg:text-left'>
						Essa é a minha casa na internet. <br />
						Ainda em construção, em breve mais conteúdo.
					</Paragraph>

					<div className='relative w-full max-w-xl lg:max-w-3xl lg:left-1/2 aspect-square lg:absolute'>
						<Image
							priority
							className='img-shadow '
							quality={100}
							style={{ objectFit: 'contain' }}
							fill
							src='/jack.jpg'
							alt='a picture of myself'
						/>
					</div>
				</div>
			</div>
		</div>
	)
}
