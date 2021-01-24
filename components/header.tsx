export default function Header() {
	return (
		<header className="flex justify-between pt-9 px-9">
			<div className="flex">
				<div className="mt-1 mr-8 bg-black rounded-full w-14 h-14"></div>
				<div className="text-xl">
					<h1 className="font-bold">Yevgeniy Astrakhantsev</h1>
					<h2 className="font-medium">
						Independent Animation Director <br /> & Animator
					</h2>
				</div>
			</div>

			<nav className="text-xl font-medium">
				<a className="mr-8" href="">
					Work
				</a>
				<a className="mr-8" href="">
					About
				</a>
				<a className="" href="">
					Contact
				</a>
			</nav>
		</header>
	);
}
