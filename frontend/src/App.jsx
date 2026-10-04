import { useState } from "react";
import logo from "./assets/mathura-media-hub-logo.svg";

const WHATSAPP_NUMBER = "918755061507";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Mujhe aapki services ke baare mein jaankari chahiye.")}`;

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const message = [
      "Mujhe aapki services ke baare mein jaankari chahiye.",
      "",
      `Naam: ${formData.get("name")}`,
      `Phone: ${formData.get("phone")}`,
      `Business: ${formData.get("business")}`,
      `Need: ${formData.get("message") || "Please guide me."}`,
    ].join("\n");

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <><header className="site-header">
    <nav className="nav container" aria-label="Main navigation">
      <a className="brand" href="#top" aria-label="Mathura Media Hub home"><img className="brand-logo" src={logo} alt="Mathura Media Hub" /></a>
      <button className="menu-toggle" type="button" aria-label="Menu kholen" id="menuToggle" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen}>{menuOpen ? "×" : "☰"}</button>
      <div id="navLinks" className={`nav-links${menuOpen ? " open" : ""}`}>
        <a href="#services" onClick={closeMenu}>Services</a><a href="#work" onClick={closeMenu}>Work</a><a href="#pricing" onClick={closeMenu}>Pricing</a><a href="#faq" onClick={closeMenu}>FAQ</a><a href="#contact" onClick={closeMenu}>Contact</a>
      </div>
      <a className="btn btn-primary" href={WHATSAPP_URL} target="_blank" rel="noopener">WhatsApp par baat karein ↗</a>
    </nav>
  </header>

  <main id="top">
    <section className="hero">
      <div className="container hero-grid">
        <div>
          <div className="eyebrow">Mathura • Vrindavan • Local growth</div>
          <h1>Aapka business online <em>dikhega</em>, enquiries bhi badhengi.</h1>
          <p className="hero-copy">Hum banate hain simple websites, AI promo videos aur ads — taaki local customers seedha aapse jud sakein.</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href={WHATSAPP_URL} target="_blank" rel="noopener">Baat karein ↗</a>
            <a className="btn btn-outline" href="#work">Hamara kaam dekhein ↓</a>
          </div>
          <div className="hero-note"><span>•</span> Seedhi baat. Local kaam. Personal support.</div>
        </div>
        <div className="hero-card" aria-label="Website sample preview">
          <div className="mini-label">Aapke business ke liye</div>
          <h3>Online pehchaan jo bharosa banaye.</h3>
          <div className="mock-window">
            <div className="mock-top"><i></i><i></i><i></i></div>
            <div className="mock-lines"><div className="mock-line short"></div><div className="mock-line"></div><div className="mock-line"></div></div>
            <div className="mock-boxes"><div className="mock-box"></div><div className="mock-box"></div></div>
          </div>
        </div>
      </div>
    </section>
    <div className="trust-bar"><div className="container trust-items"><span>✓ Mobile-first</span><span>✓ Local business focused</span><span>✓ WhatsApp enquiries</span><span>✓ Simple monthly support</span></div></div>

    <section className="section" id="services">
      <div className="container">
        <div className="section-head"><div className="eyebrow">Hum kya karte hain</div><h2>Aapke business ke liye jo zaroori ho, wahi banate hain.</h2><p>Aap apna business sambhaliye. Online growth ki zimmedari hum sambhal lenge.</p></div>
        <div className="grid-3">
          <article className="service-card"><div className="icon">▣</div><h3>Website</h3><p>Aisi website jo phone par jaldi khule aur visitor ko seedha call ya WhatsApp karne ke liye guide kare.</p></article>
          <article className="service-card"><div className="icon">▶</div><h3>AI Video</h3><p>Aapke offers, classes ya properties ke liye engaging short videos — bina mehngi shooting ke.</p></article>
          <article className="service-card"><div className="icon">⌁</div><h3>Ads</h3><p>Google aur social media ads jo Mathura-Vrindavan ke sahi customers tak aapka message pahunchayein.</p></article>
        </div>
      </div>
    </section>

    <section className="section soft-section">
      <div className="container">
        <div className="section-head"><div className="eyebrow">Aapke jaise businesses</div><h2>Local business ke liye local samajh zaroori hai.</h2></div>
        <div className="audience-grid">
          <article className="audience-card"><div className="icon">▤</div><div><h3>Coaching centers</h3><p>Courses, results aur demo classes ko online dikhakar zyada admissions ke enquiries paaiye.</p></div></article>
          <article className="audience-card"><div className="icon">⌂</div><div><h3>Property dealers</h3><p>Properties ko professional tareeke se dikhakar serious buyers se enquiries paaiye.</p></div></article>
        </div>
      </div>
    </section>

    <section className="section" id="work">
      <div className="container">
        <div className="section-head"><div className="eyebrow">Hamara kaam</div><h2>Aapke ideas ko enquiry lane wala experience banate hain.</h2><p>Yeh sample concepts hain. Aapke business ke hisaab se har cheez customize hogi.</p></div>
        <div className="work-grid">
          <article className="work-card"><div className="sample-visual"><div className="sample-screen"><div className="title"></div><div className="bar"></div><div className="bar small"></div></div></div><div className="work-info"><div className="sample-tag">Sample • Website</div><h3>Coaching admission page</h3><p>Demo class aur enquiry button ke saath.</p></div></article>
          <article className="work-card"><div className="sample-visual yellow"><div className="sample-screen"><div className="title"></div><div className="bar"></div><div className="bar small"></div></div></div><div className="work-info"><div className="sample-tag">Sample • AI Video</div><h3>Property listing reel</h3><p>Property ke highlights ko short video mein dikhane ke liye.</p></div></article>
          <article className="work-card"><div className="sample-visual blue"><div className="sample-screen"><div className="title"></div><div className="bar"></div><div className="bar small"></div></div></div><div className="work-info"><div className="sample-tag">Sample • Ads</div><h3>Local lead campaign</h3><p>Sahi audience tak aapka offer pahunchane ke liye.</p></div></article>
        </div>
        <div style={{ textAlign: "center", marginTop: 30 }}><a className="btn btn-dark" href="#contact">Mere business ke liye strategy batayein ↗</a></div>
      </div>
    </section>

    <section className="section soft-section">
      <div className="container">
        <div className="section-head"><div className="eyebrow">Kaise hota hai</div><h2>Bas 4 seedhe steps.</h2></div>
        <div className="steps">
          <article className="step"><div className="step-number">01</div><h3>Baat-cheet</h3><p>Aap apne business aur goal ke baare mein batayein.</p></article>
          <article className="step"><div className="step-number">02</div><h3>Idea samjhiye</h3><p>Hum aapke business ke liye ek clear idea dikhayenge.</p></article>
          <article className="step"><div className="step-number">03</div><h3>Launch</h3><p>Aapko pasand aaye toh website ya campaign live karenge.</p></article>
          <article className="step"><div className="step-number">04</div><h3>Report</h3><p>Har mahine simple report aur agla step share karenge.</p></article>
        </div>
      </div>
    </section>

    <section className="section" id="pricing">
      <div className="container">
        <div className="section-head"><div className="eyebrow">Seedhi pricing</div><h2>Apni zaroorat ke hisaab se shuru kijiye.</h2><p>Exact price aapki requirements samajhne ke baad final hoga. Pehle humse baat kar lijiye.</p></div>
        <div className="pricing-grid">
          <article className="package"><h3>Starter</h3><div className="price">₹4,000 <small>/ project</small></div><ul><li>One-page website</li><li>WhatsApp enquiry button</li><li>Basic Google setup</li></ul><a className="btn btn-outline" href="#contact">Starter ke baare mein poochhein</a></article>
          <article className="package featured"><div className="popular">Sabse popular</div><h3>Growth</h3><div className="price">₹10,000 <small>/ project</small></div><ul><li>Website + AI promo video</li><li>Ad campaign setup</li><li>Monthly report</li></ul><a className="btn btn-primary" href="#contact">Growth ke baare mein poochhein</a></article>
          <article className="package"><h3>Premium</h3><div className="price">₹15,000 <small>/ project</small></div><ul><li>Complete online presence</li><li>Regular ads + content</li><li>Priority support</li></ul><a className="btn btn-outline" href="#contact">Premium ke baare mein poochhein</a></article>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div className="testimonial-wrap"><div className="quote-mark">“</div><h3>Aapka feedback yahan dikhega.</h3><p>Jab aapke business ke saath kaam shuru hoga, hum yahan aapka real result aur testimonial add karenge.</p></div>
      </div>
    </section>

    <section className="section" id="faq">
      <div className="container">
        <div className="section-head"><div className="eyebrow">Aksar pooche jaane wale sawaal</div><h2>Koi bhi sawaal ho, humse pooch lijiye.</h2></div>
        <div className="faq-list">
          <details><summary>Website banane ka kharcha kitna aayega?</summary><p>Har business ki zaroorat alag hoti hai. Starter, Growth aur Premium options upar diye hain. Baat-cheet ke baad exact price clear milega.</p></details>
          <details><summary>Website kitne samay mein taiyaar ho jaati hai?</summary><p>Simple one-page website aam taur par 5–7 working days mein taiyaar ho sakti hai, jab zaroori content mil jaaye.</p></details>
          <details><summary>Kya mujhe photos aur content dena hoga?</summary><p>Jo photos aur details aapke paas hain, woh bhej dijiye. Zaroorat padne par hum copy aur AI visuals se bhi shuru karwa sakte hain.</p></details>
          <details><summary>Kya ads ka budget alag se dena hota hai?</summary><p>Haan, Google ya social media ka ad budget alag hota hai. Aap chhote budget se shuru kar sakte hain; hum practical suggestion denge.</p></details>
          <details><summary>Website live hone ke baad support milega?</summary><p>Bilkul. Chhote updates aur guidance ke liye support available rahega. Monthly plans mein regular support included hai.</p></details>
        </div>
      </div>
    </section>

    <section className="section contact-section" id="contact">
      <div className="container contact-grid">
        <div>
          <div className="eyebrow">Chaliye baat karte hain</div><h2>Aapki agli enquiry yahin se shuru ho sakti hai.</h2>
          <p className="contact-intro">Form bhariye ya seedha WhatsApp kijiye. Hum aapke business ke liye sabse behtar option simple language mein samjhayenge.</p>
          <div className="contact-links">
            <a className="contact-link" href={WHATSAPP_URL} target="_blank" rel="noopener"><b>●</b> WhatsApp par message karein</a>
            <a className="contact-link" href={`tel:+${WHATSAPP_NUMBER}`}><b>☎</b> +91 87550 61507</a>
            <a className="contact-link" href="mailto:tanwarsahil775@gmail.com"><b>✉</b> tanwarsahil775@gmail.com</a>
            <span className="contact-link"><b>⌖</b> Mathura, Uttar Pradesh</span>
          </div>
        </div>
        <form className="contact-form" id="enquiryForm" onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="field"><label htmlFor="name">Aapka naam</label><input id="name" name="name" required placeholder="Jaise: Rahul ji" /></div>
            <div className="field"><label htmlFor="phone">Phone number</label><input id="phone" name="phone" type="tel" required placeholder="10 digit number" /></div>
            <div className="field full"><label htmlFor="business">Aapka business</label><select id="business" name="business" required><option value="">Select kijiye</option><option>Coaching center</option><option>Property dealer</option><option>Other local business</option></select></div>
            <div className="field full"><label htmlFor="message">Aapko kis cheez ki zarurat hai?</label><textarea id="message" name="message" placeholder="Website, video, ads ya kuch aur..."></textarea></div>
          </div>
          <button className="btn btn-primary form-submit" type="submit">WhatsApp par enquiry bhejein ↗</button>
          <p className="form-note">Button dabane par WhatsApp khulega. Message check karke send kar dijiye.</p>
        </form>
      </div>
    </section>
  </main>

  <footer>
    <div className="container footer-row">
      <div><div className="brand footer-brand"><img className="brand-logo" src={logo} alt="Mathura Media Hub" /></div><p style={{ marginTop: 8 }}>Mathura se local businesses ke liye digital growth.</p></div>
      <div className="socials"><a href="https://instagram.com/mathuramediahub" target="_blank" rel="noopener">Instagram ↗</a><a href="https://facebook.com/mathuramediahub" target="_blank" rel="noopener">Facebook ↗</a><a href="https://linkedin.com/company/mathuramediahub" target="_blank" rel="noopener">LinkedIn ↗</a></div>
    </div>
  </footer>
  <a className="floating-wa" href={WHATSAPP_URL} target="_blank" rel="noopener" aria-label="WhatsApp par baat karein">●</a>
    </>
  );
}

export default App;