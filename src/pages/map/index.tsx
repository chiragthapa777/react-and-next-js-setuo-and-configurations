import React, { useState, useMemo } from "react";
import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";

export default function index() {
	const [first, setfirst] = useState("");
	const { isLoaded } = useLoadScript({
		googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY || "",
	});
	if (!isLoaded) {
		<div>loading...</div>;
	} else {
		return (
			<>
				<Map />
				<input type="text" onChange={(e) => e.target.value} />
			</>
		);
	}
}

function Map() {
	const center = useMemo(() => ({ lat: 27.657791, lng: 445.312998 }), []);
	return (
		<GoogleMap
			zoom={10}
			center={center}
			mapContainerClassName="w-[1000px] h-[750px]"
            onClick={(e)=>{console.log(e.latLng?.lat)}}
		>
			<MarkerF position={center} />
		</GoogleMap>
	);
}
