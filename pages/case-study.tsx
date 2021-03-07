import Image from "next/image";

export default function CaseStudy() {
	return (
		<>
			<section className="max-w-screen-lg mx-auto mt-24 mb-24">
				<div className="px-32">
					<h1 className="mb-8 text-5xl font-bold leading-tight">
						Featured article from this blog about artificial intelligence
					</h1>
					<p className="text-2xl text-gray-500 mb-11">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor et velit a
						pellentesque. Donec hendrerit vitae lorem non efficitur. Fusce lobortis quis leo vitae
						pulvinar.
					</p>
					<video src="" width="1120" height="590"></video>
				</div>
			</section>

			<section className="flex items-center max-w-screen-lg mx-auto mb-24">
				<p className="mr-32 text-xl text-black">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit tempus erat egestas
					efficitur. In hac habitasse platea dictumst. Fusce a nunc eget ligula suscipit finibus.
					Aenean pharetra quis lacus at viverra.
					<br />
					<br />
					Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
					himenaeos. Aliquam quis posuere ligula. In eu dui molestie, molestie lectus eu, semper
					lectus.
				</p>

				<div className="flex-shrink-0">
					<Image src="/images/placeholder.png" alt="Placeholder" width="530" height="560" />
				</div>
			</section>

			<section className="flex items-center max-w-screen-lg mx-auto mb-24">
				<div className="flex-shrink-0 mr-32">
					<Image src="/images/placeholder.png" alt="Placeholder" width="530" height="560" />
				</div>

				<div className="text-xl text-black">
					<h2 className="text-3xl font-bold mb-7">Header</h2>
					<p className="mb-7">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit tempus erat
						egestas efficitur. In hac habitasse platea dictumst. Fusce a nunc eget ligula suscipit
						finibus. Aenean pharetra quis lacus at viverra.
					</p>
					<ul>
						<ListItem>First item in the list</ListItem>
						<ListItem>
							Second item in the list lorem ipsum dolor sit amet nunc felis dolor lorem ipsum sit
							amet
						</ListItem>
						<ListItem>Third item in the list</ListItem>
					</ul>
				</div>
			</section>

			<section className="py-12 bg-trueGray-900">
				<div className="flex items-center max-w-screen-lg mx-auto">
					<div className="mr-32 text-xl text-white">
						<h2 className="text-3xl font-bold mb-7">Header</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit tempus erat
							egestas efficitur. In hac habitasse platea dictumst. Fusce a nunc eget ligula suscipit
							finibus. Aenean pharetra quis lacus at viverra.
						</p>
					</div>

					<div className="flex-shrink-0 ">
						<Image src="/images/placeholder.png" alt="Placeholder" width="530" height="560" />
					</div>
				</div>
			</section>
		</>
	);
}

type ListItemProps = { children: string };
function ListItem({ children }: ListItemProps) {
	return (
		<li className="relative pl-5 mb-6 list-none last:mb-0">
			<span className="absolute inline-block w-1.5 h-1.5 transform rotate-45 bg-black top-2.5 left-0"></span>
			{children}
		</li>
	);
}
