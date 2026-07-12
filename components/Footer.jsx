export default function Footer() {
  return (
    <footer>
      <div className="nav-brand">
        <img src="/logo-full-white.png" alt="The Hedge Media" className="brand-logo brand-logo-footer" />
      </div>
      <p className="footer-copy">© {new Date().getFullYear()} The Hedge Media. All rights reserved.</p>
      <div className="footer-links">
        <a href="#">Instagram</a>
        <a href="#">YouTube</a>
        <a href="#">LinkedIn</a>
      </div>
    </footer>
  );
}
