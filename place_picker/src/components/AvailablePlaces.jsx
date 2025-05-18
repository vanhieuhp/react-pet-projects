import Places from "./Places.jsx";
import {useEffect, useState} from "react";
import ErrorPage from "./ErrorPage.jsx";
import {sortPlacesByDistance} from "../loc.js";

import { fetchAvailablePlaces } from "../../http.js";

export default function AvailablePlaces({onSelectPlace}) {

    const [isFetching, setIsFetching] = useState(false);
    const [availablePlaces, setAvailablePlaces] = useState([]);
    const [error, setError] = useState();

    useEffect(() => {
        setIsFetching(true);

        async function fetchPlaces() {

            try {
                const places = await fetchAvailablePlaces();

                navigator.geolocation.getCurrentPosition((position) => {

                    const sortedPlaces = sortPlacesByDistance(
                        places,
                        position.coords.latitude,
                        position.coords.longitude
                    );
                    setAvailablePlaces(sortedPlaces);
                    setIsFetching(false);
                })
            } catch (error) {
                setError({message: error.message || "Could not fetch places, please try again later."});
                setIsFetching(false);
            }
        }

        fetchPlaces();

    }, []);

    if (error) {
        return <ErrorPage title="An error occurred!" message={error.message}/>
    }

    return (
        <Places
            title="Available Places"
            places={availablePlaces}
            isLoading={isFetching}
            loadingText="Loading places..."
            fallbackText="Sorting places by distance..."
            onSelectPlace={onSelectPlace}
        />
    );
}