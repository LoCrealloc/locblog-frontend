import { Link } from "react-router-dom";

function PostOverview() {
	let countPosts = -1;

	function fetchPosts() {
		// TODO fetch posts from API
		// return [{ title: "Titel123", link: "/dev/null" }];
		return [1, 2, 3, 4, 5, 6, 7, 8, 9];
	}

	function CreateTreePart(post) {
		console.log(countPosts);
		countPosts += 1;
		let pos = countPosts * 100;
		let path;
		if (countPosts % 2 === 0) {
			path = (
				<>
					<path
						fill="none"
						stroke="black"
						d={`M 250,${pos}
						 	 c 0,200 -200,0 -200,200
					`}
					/>
					<text x="0" y={pos + 215} textLength="100">
						TextTextText
					</text>
				</>
			);
		} else {
			path = (
				<>
					<path
						fill="none"
						stroke="black"
						d={`M 250,${pos}
               c 0,200 200,0 200,200
            `}
					/>
					<text x="400" y={pos + 215} textLength="100">
						TextTextText
					</text>
				</>
			);
		}

		return <Link to="/">{path}</Link>;
	}

	let posts = fetchPosts();
	let len = posts.length * 100 + 100;

	return (
		<div className="container">
			<div>
				<svg viewBox={`0 0 500 ${len}`} className="mx-auto">
					<path fill="none" stroke="black" d={`M 250,0 V ${len}`} />
					{posts.map(CreateTreePart)}
				</svg>
			</div>
		</div>
	);
}
export default PostOverview;
