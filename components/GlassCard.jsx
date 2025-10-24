export default function GlassCard({ children, className = "" }) {
  return <div className={`glass rounded-xl2 p-3 sm:p-4 md:p-5 ${className}`}>{children}</div>;
}
