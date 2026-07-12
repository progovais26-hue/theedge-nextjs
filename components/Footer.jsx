export default function Footer() {
  return (
    <footer>
      <div className="nav-brand">
        <div
          className="brand-icon"
          style={{ width: "34px", height: "34px", fontSize: "16px", borderRadius: "8px" }}
        >
          ▶
        </div>
        <span className="brand-name" style={{ fontSize: "18px" }}>
          THE<span>EDGE</span>.
          <span style={{ fontSize: "11px", opacity: 0.6 }}> MEDIA</span>
        </span>
      </div>
      <p className="footer-copy">© {new Date().getFullYear()} TheEdge Media. All rights reserved.</p>
      <div className="footer-links">
        <a href="#">Instagram</a>
        <a href="#">YouTube</a>
        <a href="#">LinkedIn</a>
      </div>
    </footer>
  );
}
