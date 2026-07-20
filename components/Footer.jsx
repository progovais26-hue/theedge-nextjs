export default function Footer() {
  return (
    <footer className="footer-new">
      <div className="footer-top">
        <div className="footer-brand-col">
          <img src="/logo-full-white.png" alt="The Hedge Media" className="brand-logo-footer" />
          <p className="footer-tagline">360° Media Solution.<br/>We create content that converts.</p>
        </div>

        <div className="footer-col">
          <h4 className="footer-col-title">Services</h4>
          <a href="/services/video-production">Video Production</a>
          <a href="/services/complete-event-management">Event Management</a>
          <a href="/services/social-media-management-marketing">Social Media</a>
          <a href="/services/ai-ads-video-production">AI Ads & Video</a>
          <a href="/services/photography-videography">Photography</a>
          <a href="/services/studio-rental-services">Studio Rental</a>
        </div>

        <div className="footer-col">
          <h4 className="footer-col-title">Company</h4>
          <a href="/#services">Our Services</a>
          <a href="/work">Our Work</a>
          <a href="/#process">Process</a>
          <a href="/#contact">Work With Us</a>
        </div>

        <div className="footer-col">
          <h4 className="footer-col-title">Follow Us</h4>
          <a href="#" target="_blank" rel="noopener">Instagram</a>
          <a href="#" target="_blank" rel="noopener">YouTube</a>
          <a href="#" target="_blank" rel="noopener">LinkedIn</a>
          <div className="footer-contact">
            <h4 className="footer-col-title" style={{marginTop:"24px"}}>Get In Touch</h4>
            <a href="mailto:info@thehedgemedia.com">info@thehedgemedia.com</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copy">© {new Date().getFullYear()} The Hedge Media. All rights reserved.</p>
        <p className="footer-copy">Karachi, Pakistan</p>
      </div>
    </footer>
  );
}
