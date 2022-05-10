import styled from 'styled-components'
const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 20%;
    height: 20%;
    background-color: ${(props) =>
        props.status === "Dead" ? "red" : props.status === "unknown" ? "gray" : ""};
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    margin: 10px;
    padding: 10px;
    h2 {
        font-size: 1.5rem;
        font-weight: bold;
    }
    p {
        font-size: 1rem;
    }
`;
function CardComponent({ card }) {
    return (
        <Card status={card.status}>
            <h2>{card.name}</h2>
            <img src={card.image} alt={card.name} />
            <p>{card.species}</p>
            <p>{card.type}</p>
            <p>{card.location.name}</p>
            <p>{card.origin.name}</p>
        </Card>
    )
}
export default CardComponent;
