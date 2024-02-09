import React, { useState, useEffect } from "react";
import ComicCard from "./ComicCard";
import { useUser } from "../UserContext";
import { Container } from "reactstrap";

const ComicBoard = (props) => {
	const [currentUser, setCurrentUser] = useUser();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				await new Promise((resolve) => setTimeout(resolve, 2000));
				setLoading(false);
			} catch (error) {
				console.error("Error fetching data:", error);
				setLoading(false);
			}
		};
		fetchData();
	}, [props.comics]); // Add any dependencies that should trigger a re-fetch

	const comicData = props.comics.map((comic, index) => (
		<ComicCard
			key={index}
			user={currentUser}
			comicKey={comic.comicID}
			publisher={comic.publisher}
			series={comic.series}
			volume={comic.volume}
			issue={comic.issue}
			publicationDate={comic.publicationDate}
			comicTitle={comic.comicTitle}
			creators={comic.creators}
			principleCharacters={comic.principleCharacters}
			description={comic.description}
			value={comic.value}
			comic={comic.comic}
		/>
	));

	return (
		<Container>
			<h1 className={"Poppins-Bold text-white"}> Surf The Database</h1>
			<hr
				style={{
					height: "2px",
					borderWidth: "0",
					color: "white",
					backgroundColor: "white",
					marginBottom: "40px",
				}}
			/>
			{loading ? (
				<h2 className={'Poppins-Bold text-white'}>Loading...</h2> // Placeholder for loading state
			) : (
				<div className={"w-100 comicGrid"}>{comicData}</div>
			)}
		</Container>
	);
};

export default ComicBoard;