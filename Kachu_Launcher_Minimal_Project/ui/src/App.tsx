export default function App() {
  return (
    <div style={{ padding: 24, fontFamily: "system-ui, sans-serif" }}>
      <h1 style={{ margin: 0 }}>Kachu Launcher</h1>
      <p style={{ opacity: 0.8 }}>
        Minimal build template. Next: Feather-style tabs (Play / Mods / Skin / Servers).
      </p>
      <div style={{ marginTop: 16, display: "flex", gap: 12 }}>
        <button style={{ padding: "10px 14px", borderRadius: 10 }}>Play</button>
        <button style={{ padding: "10px 14px", borderRadius: 10 }}>Mods</button>
        <button style={{ padding: "10px 14px", borderRadius: 10 }}>Skin</button>
        <button style={{ padding: "10px 14px", borderRadius: 10 }}>Servers</button>
      </div>
    </div>
  );
}
