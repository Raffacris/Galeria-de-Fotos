export function PhotoCard({ url, title }) {
  return (
    <div className="photo-item">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
}