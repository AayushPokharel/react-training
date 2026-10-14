export default function App() {
  return (
    <main style={{ fontFamily: 'system-ui, sans-serif', padding: '3rem', maxWidth: 760, margin: '0 auto' }}>
      <p style={{ textTransform: 'uppercase', letterSpacing: '.12em', color: '#2563eb', fontWeight: 700 }}>
        DevOps Revision Lab
      </p>
      <h1>React → Docker → Ubuntu VM</h1>
      <p>This page was built in GitHub Actions, published to Docker Hub, and deployed automatically.</p>
      <p><strong>Release identifier:</strong> supplied at build/deploy time in the pipeline log.</p>
    </main>
  );
}