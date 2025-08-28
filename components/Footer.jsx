export default function Footer() {
  return (
    <footer className="mt-20 border-t border-divider">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-10 text-sm text-text-muted">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} [Syed Uzair]. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="https://github.com/youknowzair" target="_blank" className="hover:text-text">GitHub</a>
            <a href="https://www.linkedin.com/in/syed-uzair-a31308256/" target="_blank" className="hover:text-text">LinkedIn</a>
            <a href="mailto:Uzairamansyed@gmail.com" className="hover:text-text">Email</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
