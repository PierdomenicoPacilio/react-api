export default function Card({ name, birth, nazionality, img, bio, awards }) {
    return <li className="card">
        <h3>{name}</h3>
        <span>{birth}</span>
        <p>{nazionality}</p>
        <img src={img} alt={name} />
        <p>{bio}</p>
        <small>{awards}</small>
    </li>
}