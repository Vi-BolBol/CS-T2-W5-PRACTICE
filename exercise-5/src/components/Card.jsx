export default function Card({c}){
    return(
        <div className="card">
            <h4>{c.name}</h4>
            <small>Personality</small>
            <p>{c.para}</p>
            <img src={c.image.src} alt={c.image.alt} />
        </div>
    )
};