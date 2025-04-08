export default function ItemPage({ params }) {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>The id of the item is {params.itemid}</h1>
    </div>
  );
}