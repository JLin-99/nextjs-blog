import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = 'AvoidingCoffee';
export const siteTitle = 'Next.js Sample Website';

export default function Layout({ children, home }) {
	return (
		<>
			<div className={utilStyles.customShapeDividerTop}>
				<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
					<path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className={utilStyles.shapeFill}></path>
					<path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className={utilStyles.shapeFill}></path>
					<path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className={utilStyles.shapeFill}></path>
				</svg>
			</div>
			<div className={`${styles.container} ${utilStyles.front}`}>
				<Head>
					{/* `meta` tags used to describe a page's content */}
					<meta
						name="description"
						content="Learning how to build a personal website using Next.js"
					/>
					<meta
						property="og:image"
						content={`https://og-image.vercel.app/${encodeURI(
							siteTitle,
						)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
					/>
					<meta name="og:title" content={siteTitle} />
					<meta name="twitter:card" content="summary_large_image" />
				</Head>
				<header className={styles.header}>
					{home ? (
						<>
							<Image
								priority
								src="/images/coffee.gif"
								className={utilStyles.borderCircle}
								height={144}
								width={144}
								alt={name}
							/>
							<h1 className={utilStyles.heading2X1}>{name}</h1>
						</>
					) : (
						<>
							<Link href="/">
								<a>
									<Image
										priority
										src="/images/coffee.gif"
										className={utilStyles.borderCircle}
										height={108}
										width={108}
										alt={name}
									/>
								</a>
							</Link>
							<h2 className={utilStyles.headingLg}>
								<Link href="/">
									<a className={utilStyles.colorInherit}>{name}</a>
								</Link>
							</h2>
						</>
					)}
				</header>
				<main>{children}</main>
				{!home && (
					<div className={styles.backToHome}>
						<Link href="/">
							<a>← Back to home</a>
						</Link>
					</div>
				)}
			</div>
		</>
	);
}
