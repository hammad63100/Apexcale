export default function AuroraBackground({
  intensity = 'normal',
}: {
  intensity?: 'normal' | 'strong';
}) {
  const opacity = intensity === 'strong' ? 0.30 : 0.18;
  return (
    <div className="aurora-field" aria-hidden="true">
      <div
        className="aurora-blob animate-aurora"
        style={{
          width: 560,
          height: 560,
          top: '-10%',
          left: '-8%',
          background: `radial-gradient(circle, rgba(0, 82, 204, ${opacity}) 0%, transparent 70%)`,
        }}
      />
      <div
        className="aurora-blob animate-aurora-slow"
        style={{
          width: 480,
          height: 480,
          top: '10%',
          right: '-10%',
          background: `radial-gradient(circle, rgba(255, 140, 0, ${opacity * 0.6}) 0%, transparent 70%)`,
        }}
      />
      <div
        className="aurora-blob animate-aurora"
        style={{
          width: 420,
          height: 420,
          bottom: '-15%',
          left: '20%',
          background: `radial-gradient(circle, rgba(0, 82, 204, ${opacity * 0.7}) 0%, transparent 70%)`,
        }}
      />
      <div
        className="aurora-blob animate-aurora-slow"
        style={{
          width: 380,
          height: 380,
          bottom: '5%',
          right: '15%',
          background: `radial-gradient(circle, rgba(10, 25, 47, ${opacity * 0.5}) 0%, transparent 70%)`,
        }}
      />
    </div>
  );
}
