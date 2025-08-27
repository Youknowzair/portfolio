export default function GlassCard({ children, className = "" }) {
  return <div className={`glass rounded-xl2 p-4 ${className}`}>{children}</div>;
}
