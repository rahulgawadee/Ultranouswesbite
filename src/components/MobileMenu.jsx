import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'

const menuLinks = [
	{ label: 'Case studies', href: '#' },
	{ label: 'Pricing', href: '#' },
	{ label: 'Services', href: '#' },
	{ label: 'About us', href: '#' },
	{ label: 'Blog', href: '#' },
	{ label: 'Contact us', href: '#contact', cta: true },
]

export default function MobileMenu({ open, onClose }) {
	const menuRef = useRef(null)
	const hamburgerRef = useRef(null)

	useEffect(() => {
		if (open) {
			if (menuRef.current) {
				gsap.to(menuRef.current, {
					y: 0,
					opacity: 1,
					duration: 0.6,
					ease: 'power3.out',
					pointerEvents: 'auto',
				})
			}
			if (hamburgerRef.current) {
				gsap.to(hamburgerRef.current.querySelectorAll('.line'), {
					background: '#111',
					duration: 0.3,
				})
			}
			document.body.style.overflow = 'hidden'
		} else {
			if (menuRef.current) {
				gsap.to(menuRef.current, {
					y: '-100%',
					opacity: 0,
					duration: 0.5,
					ease: 'power2.in',
					pointerEvents: 'none',
				})
			}
			document.body.style.overflow = 'auto'
		}
	}, [open])

	return (
		<>
			{/* Hamburger Button */}
			<button
				id="toggle-btn"
				className="fixed top-0 right-0 z-[100] m-6 flex items-center justify-center w-14 h-14 bg-transparent border-none outline-none"
				onClick={open ? onClose : () => onClose(true)}
				aria-label="Toggle menu"
				style={{ background: 'none' }}
			>
				<span className="btn-outline btn-outline-1 absolute w-14 h-14 border border-[#111] pointer-events-none" />
				<span className="btn-outline btn-outline-2 absolute w-14 h-14 border border-[#111] pointer-events-none" />
				<span
					id="hamburger"
					ref={hamburgerRef}
					className={`relative w-10 h-10 flex flex-col justify-center items-center z-10 ${
						open ? 'active' : ''
					}`}
				>
					<span
						className="line line-1 block w-6 h-[2px] bg-[#111] mb-1 transition-all duration-300"
						style={{
							transform: open
								? 'rotate(45deg) translateY(6px)'
								: 'none',
						}}
					/>
					<span
						className="line line-2 block w-8 h-[2px] bg-[#111] transition-all duration-300"
						style={{
							transform: open
								? 'rotate(-45deg) translateY(-6px)'
								: 'none',
						}}
					/>
				</span>
			</button>
			{/* Menu Overlay */}
			<nav
				ref={menuRef}
				className="fixed inset-0 bg-white z-[99] flex flex-col items-center justify-center transition-all duration-500"
				style={{
					transform: open ? 'translateY(0)' : 'translateY(-100%)',
					opacity: open ? 1 : 0,
					pointerEvents: open ? 'auto' : 'none',
				}}
			>
				<ul className="flex flex-col gap-8 text-center">
					{menuLinks.map((link, idx) =>
						link.cta ? (
							<li key={link.label}>
								<a
									href={link.href}
									className="inline-block px-8 py-3 bg-[#4F3DFF] text-white rounded-full font-semibold text-lg shadow-md"
									onClick={onClose}
								>
									{link.label}
								</a>
							</li>
						) : (
							<li key={link.label}>
								<a
									href={link.href}
									className="text-2xl font-medium text-[#1a1a1a] hover:underline"
									onClick={onClose}
								>
									{link.label}
								</a>
							</li>
						)
					)}
				</ul>
			</nav>
		</>
	)
}
				
