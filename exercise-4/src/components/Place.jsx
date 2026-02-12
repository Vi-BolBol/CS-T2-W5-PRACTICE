export default function Place({p}) {
  return (
    <li className="place-item">
      <button>
        <img src={p.image.src} alt={p.image.alt} />
        <h3>{p.title}</h3>
      </button>
    </li>
  );
}
