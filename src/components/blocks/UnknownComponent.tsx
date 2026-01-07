interface UnknownComponentProps {
  type: string;
}

export default function UnknownComponent({ type }: UnknownComponentProps) {
  return (
    <div style={{ padding: "2rem", border: "1px dashed #ccc" }}>
      <strong>Unknown component:</strong> <code>{type}</code>
    </div>
  );
}
