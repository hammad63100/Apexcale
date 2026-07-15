export default function AuroraBackground({
  intensity = 'normal',
}: {
  intensity?: 'normal' | 'strong';
}) {
  const opacity = intensity === 'strong' ? 0.55 : 0.38;
  return (
    <div className="aurora-field" aria-hidden="true">
      <div
        className="aurora-blob animate-aurora"
        style={{
          width: 560,
          height: 560,
          top: '-10%',
          left: '-8%',
          background: `radial-gradient(circle, rgba(58,166,240,${opacity}) 0%, transparent 70%)`,
        }}
      />
      <div
        className="aurora-blob animate-aurora-slow"
        style={{
          width: 480,
          height: 480,
          top: '10%',
          right: '-10%',
          background: `radial-gradient(circle, rgba(125,211,252,${opacity}) 0%, transparent 70%)`,
        }}
      />
      <div
        className="aurora-blob animate-aurora"
        style={{
          width: 420,
          height: 420,
          bottom: '-15%',
          left: '20%',
          background: `radial-gradient(circle, rgba(196,181,253,${opacity * 0.8}) 0%, transparent 70%)`,
        }}
      />
      <div
        className="aurora-blob animate-aurora-slow"
        style={{
          width: 380,
          height: 380,
          bottom: '5%',
          right: '15%',
          background: `radial-gradient(circle, rgba(2,132,199,${opacity * 0.7}) 0%, transparent 70%)`,
        }}
      />
    </div>
  );
}
