import PropTypes from "prop-types";

export default function CoreConcept({image, title, description}) {
    return (
        <>
            <li>
                <img src={image} alt={title}/>
                <h2>{title}</h2>
                <p>{description}</p>
            </li>
        </>
    )
}

CoreConcept.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}