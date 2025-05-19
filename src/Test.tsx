import "./index.css";

interface TestProps {
  name: string;
  age?: number;
}

function Test({ name, age }: TestProps) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", borderRadius: 4 }}>
      <h2>Cześć, {name}!</h2>
      {age !== undefined && (
        <p>
          Masz {age} {age === 1 ? "rok" : "lat"}.
        </p>
      )}
    </div>
  );
}

export default Test;
