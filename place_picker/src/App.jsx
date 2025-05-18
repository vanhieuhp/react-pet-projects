import {useCallback, useEffect, useRef, useState} from 'react';

import Places from './components/Places.jsx';
import Modal from './components/Modal.jsx';
import DeleteConfirmation from './components/DeleteConfirmation.jsx';
import logoImg from './assets/logo.png';
import AvailablePlaces from "./components/AvailablePlaces.jsx";
import {fetchUserPlaces, updateUserPlaces} from "../http.js";
import ErrorPage from "./components/ErrorPage.jsx";

function App() {
    const selectedPlace = useRef();
    const [isFetching, setIsFetching] = useState(false);
    const [error, setError] = useState();

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [pickedPlaces, setPickedPlaces] = useState([]);
    const [errorUpdatePlaces, setErrorUpdatePlaces] = useState();

    useEffect(() => {
        async function fetchPlaces() {
            setIsFetching(true);
            try {
                const places = await fetchUserPlaces();
                setPickedPlaces(places);
            } catch (error) {
                setError({message: error.message || "Failed to fetch user places."});
            }

            setIsFetching(false);
        }

        fetchPlaces();
    }, []);

    function handleStartRemovePlace(id) {
        setModalIsOpen(true);
        selectedPlace.current = id;
    }

    function handleStopRemovePlace() {
        setModalIsOpen(false);
    }

    async function handleSelectPlace(selectedPlace) {
        setPickedPlaces((prevPickedPlaces) => {
            if (!prevPickedPlaces) {
                prevPickedPlaces = []
            }
            if (prevPickedPlaces.some((place) => place.id === selectedPlace.id)) {
                return prevPickedPlaces;
            }
            return [selectedPlace, ...prevPickedPlaces];
        });

        try {
            await updateUserPlaces([selectedPlace, ...pickedPlaces]);
        } catch (error) {
            setPickedPlaces(pickedPlaces);
            setErrorUpdatePlaces({message: error.message || "Failed to update places."})
        }
    }

    const handleRemovePlace = useCallback(
        async function handleRemovePlace() {
            setPickedPlaces((prevPickedPlaces) =>
                prevPickedPlaces.filter((place) => place.id !== selectedPlace.current.id)
            );

            try {
                await updateUserPlaces(
                    pickedPlaces.filter((place) => place.id !== selectedPlace.current.id)
                );
            } catch (error) {
                setPickedPlaces(pickedPlaces);
                setErrorUpdatePlaces({message: error.message || "Fail to delete place!"})
            }

            setModalIsOpen(false);
        }, [pickedPlaces]);

    function handleError() {
        setErrorUpdatePlaces(null);
    }

    return (
        <>
            <Modal open={errorUpdatePlaces} onClose={handleError}>
                {errorUpdatePlaces && (
                    <ErrorPage title="An error occurred!"
                               messsage={errorUpdatePlaces.message}
                               onConfirm={handleError}
                    />
                )}
            </Modal>
            <Modal open={modalIsOpen} onClose={handleStopRemovePlace}>
                <DeleteConfirmation
                    onConfirm={handleRemovePlace}
                    onCancel={handleStopRemovePlace}
                />
            </Modal>

            <header>
                <img src={logoImg} alt="Stylized globe"/>
                <h1>PlacePicker</h1>
                <p>
                    Create your personal collection of places you would like to visit or
                    you have visited.
                </p>
            </header>
            <main>
                {error && <ErrorPage title="An error occurred!" message={error.message}/>}
                <Places
                    title="I'd like to visit ..."
                    fallbackText={'Select the places you would like to visit below.'}
                    places={pickedPlaces}
                    isLoading={isFetching}
                    loadingText="Fetching your places..."
                    onSelectPlace={handleStartRemovePlace}
                />
                <AvailablePlaces onSelectPlace={handleSelectPlace}/>
            </main>
        </>
    );
}

export default App;
