import React from "react"
import { Link } from "react-router-dom"
import { Helmet } from "react-helmet"
import Navigation from "../components/navigation"
import Footer from "../components/footer"
import "./home.css"

const metaLogoSrc = "data:image/png;base64,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"
const googleAdsLogoSrc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARgAAAD/CAYAAAAquMkCAAAMDElEQVR4nO3dy3brOAxEUTvr/v8vuweJO44fehJEFXD2sAc2BRIlSMlNXy/Aj9vtdjv7Gdfr9TpiLaiBw9DUiDDZitDpi41vZGaoLCFw+mCji1MJlXcImvrY4KKUg+UdwqYmNrUYt2B5RtDUwmYW4R4sjwiZOtjIAiqFyyOCxh8baK5quDwiaHyxcaY6BMsjQsbTV/YCsF+3cLlcel5zBQSMmc6N1vnaXREwRmgwauCGgDFBY/2iFj4IGAM01Ctq4oGAEUcjfUZt9BEwwmigddRIGwEjisbZjlrp+pe9AOj79EtuNDbW8NuRgrIb9+hvzbquG3HYEDGZTTqqQStcA8bgEQnDm/Lx87KnGuQi7YXMbsZZd/uq14V1bISIDn/lv8M14i9+TN1MZuNdf2R9P+ZjswXMuLOrNXbHa+6ICaYBxUZTXBPGI2CSRd/JlRs5em38BCsfAZOoc7jcETK1ETAAwhAwSZhefjHF1EXAFOQULneOa8Y6AiZB5B2VRn2PKSYHAQMZhGM9BMxkTC/LIq+BKWY+AmYiDng+9mAuAqaICtPLXaVr6Y6AmYQ7pw72Yh4CpoCKd/yK19QRATMBd8xjeOHrj4ABEIaACcY/CTiHKcYbAROIA6yPPYpFwEBe9SmtMgImCHfGsXhU8kTAAAhDwATgjhiDKcYPAQMgDAEzGHfCWEwxXgiYgTig/tjDsQgY2OHH1j4ImEGy7nxd77g8KnkgYACEIWAG4I6XgylGHwFzEgexLvb2PAKmgM6NwAtfbQTMCZ0buwv2+BwCpojOjcAUo4uAOahzQyviha8mAqYQGgFqCJgDaGRNTDF6CJid1A+a+vqcUdv9CJiCOjcCL3y1EDA7dG5cfOMM7EPAFNW5EZhidBAwG3VuWEe88NVAwBRGIyAbAbNBZKNef0R9fmdMMfkImBXuB8l9/cqo7ToCJtHjHZa7bQymw1wEzILoR6Ooz8ZfhHceAkYIjYBqCJgPmF5qIbxzEDBiaARUQsC8wfRSE+E9HwHzROGg0AieqO0rAmYilemlcyOo7EEXBMwDpUcjGiEOE+I8BIwwGgHuCJgfStML4hHecxAwF+0DQSN4orbfCJhg6tNL50ZQ35sK2geMQ4PRCJ4czla09gETySUYOjeCyx65ah0wTi92aYQ4vOeK0zpg3NAIcNM2YJymF8QjvGO0DBjnDacRPHWtbcuAieQ+vXRthMvFf+8UtQuYCo9GNIKnjuHdLmCq4FEpBuE9VquAqTC9IB7hPU6rgKmGRoC6NgHD9II9CO8xWgRM5Q2lETx1qW2LgIlUfXrp0gjvVN/bGcoHTIdHI5V1VMSEeE75gOmCRoCi0gHTYXpBPML7uNIB0w2NADVlA4bpBSMR3seUDJjKG7aGRvBUtbYlAyZS9+mlaiNs0X3vjygXMDwa+azTERPiPuUCBt9oBCgoFTBML5iB8N6uTMBU25gRaARPlWpbJmAiMb28V6kR9uJMbFMiYDof9DU0gqcqZ7pEwESiQZdVaYQjOBvr7AOGF7vrqlyHIt5zLbMPGGxDIyCDdcAwvUAB4f2ZbcC4Fz4DjeDJuba2AROJ6eUY50Y4izPznmXA8Gh0XPXrq8o1vC0DBufwqBSD8H5lFzBML1BGeP9lFzAYg0bADFYBw/QCB4T3L5uAcSusAxrBk1NtbQImEtNLDKdGGI0z9c0iYHg0giMmRJOAQYwZh9SlERBDPmCYXuCs+xQjHzCIMfNwOjQCYkgHDNMLKug8xcgGjHrhnGXUlv2Mo1xb2YCJ1Hl6yTyMyo0QreuZkwwYHo1QUcdHJcmAQQyFQ6iwBswjFzBML6is2xQjFTCKBapCqbZKa6lGrbZSAROp8/SiduguF801zdLpLMoETOcDB4yk1EsyAROp0x3jmdJhe6a8tmhdzqREwPBiFx11eOErETCIoXLIljisEcelBwzTCzqrPsWkBoxCAapyqq3TWt1k1zZ9gonSeXrJPlRHOK55lMpnNS1geDQC5sgM77ITTFfRh6n6O4MsVW+KKQHD9OKJ2saqGN5MMIXMCu6KjYAY0wOG6QX4rFp4Tw0Y7k5xZgd3tUboYnZtyzwidZ5eKjZkxWvaqtJZnhYwPBp5WqotdY9TZUIsM8F0lX2nr9IIiDElYJhePFHbXBXCmwnGmEpwV2gExAgPGJUmABy5h3dowHD3iaMW3O6N0FV0bW0fkTpPLx0bruM13zmf9bCAUbvDYpsztWVf4rhOiLYTTFfqwe3aCIgREjDqTQA4cgzv4QHDXSaOS3A7NgJiamv1iNR5eqGxfnWuhVsPDA2YzhvvLOLQujUCvo3uYZsJpvOBJbhfda6JUy8MCxiX9wP4K7K27Fscl/dcwxapfEdxPugVgrvCNShyqOu/ER+iHC6Xy/v1dT6YqOF6vV6jeu92u91G9MjpRyT1cPnk9iN7HUsc7lDZ36W+h85G1NbmJW+U24PstTxSW4+yzrVSn8RPBUy1jVUMmggZh1K9EfDe2X5oP8G8kx00VUOOR6UYyuF9OGA6bGjFa1Q+jDhONbyZYFbMnmaqvNjNWEPFG4K7QwHTcSM7XjO8KIb37oDp3GjR00z16eVOsRGw7khteUQ6IOIQ0xjjdK6l0o3kctkZMJ037plTLdQO3eWiuaYqlCZEJpgTRoVMl0ejZ0qNgBibA4YNe4+6QJFKeDPBDHAmZLpOL3cqjYAYmwKGjVpHjaBGIbxXA4bGidN9erlTaATst6W2to9Iig205zBz8OfpXOvsPln8cpWN2VMkhTVvWS/TyytqEiertrIBM+JAqK6fRvqM2sTIquvHR6SM5rw+GPl5Iz4LcJb1nkvmHUz0X7efHTSfis4dehkvfGt5GzAzN2Jm82dPNBzwfJ33ICO80yaYzGaf9b2zg3rWd0WrdC3dvQTMjKZQOEAqj0yYr/NezJ5ipk8wCuFyN2OK6hLYo1W8JhUza/snYKKbQfXQOIeMak1H4IWvn+e6Tptg1BtBfX3ASLPO+/8Bw13WT4e6MsX4eaxr+ATj1AROa8UYnUNmxnmX+UU7FS4h47LOETpdazVfl0tcirseDNd1V8ajUoyout5rGjbB0KRxqC1GijxPPCJ9oNrEquuagSnGT0jAdG4CwFFUzzLBLFALSrX1ZGCK8fI1uqg0AZx1DpnRvXu73W5MMCtUAlNlHQqohQ8CxgAN9YpHJQ9DA4ZGALyN7mEmmA0yg5PQ/owpRh8BAyDMsIDhTjseNV3HFDPeyJoywQALuobMKATMRrOnCaaX7aiVLgJGEA2zH49KmggYAGEIGDFML8cxxeghYDbigIEzsB8BI4Tp5TxqqGVYwJDu6KDDOR95jUwwIrjzjkMtdRAwG3T9P14644WvhqEBQ+EBb6N7mAkmGdNLHKaYfATMCg4SPuFsLLter9eviL/DOfLzKmN6iUeNt4voXSaYBYRlDTwq5QkJGIq+jjsrlET1LBPMB5EhSbjMxxSTIyxgnIvuvHbkcD4zkWv/ulzi0t256FGYXvJQ+1dRPXqvNY9ITwhFHMXZeRUeME5F558E1Be9B5z3vzX+evcfR3MoOuHSByEzb43THpGUi668NnhSPlMz1/YnYDom+4w1Mb3ombEnHc/7c12nv+RVKrrSWlCT0hnLWEvKT5FuPzK++3ENM76H6UXXrL1ROOtZa3gJmJkNkXHRCuGGfrLO3czvfJcdH8NkdjEqPhMzvXioeC5UrkkmYO4iip9xLYSLlypnRK1vFy8w81HibPGzH4MIGC/u50W1V2UD5tHW4rutF1oUzs+es+Ow3tWLUbgIJ4SLN877PmvnffXH1DQMOuG8b7elVpt+D4aib0Od0MXWs775F+1onmXUpw72ctme+vD3YAbgQNbDnr63ty67Aoaiv6ImdbG3fx2px+4JhqL/ohb1scfnHHpEoujUoBP2+ngNTheu4+8NcOB64qzvd/olb7dm63a9+NVt70dc77CCVU/3bocLyyqf95Fnvcy/5oxEuOAdzvqGzxv5YXdVCk+wYAvO+8Jnjv7AR66FJ1hwBOf9zWdHffAjl8ITLBjB4bzPOuvTG0qx+AQLoqid99lnPbWxVP8KFxBB7c9ZTvnurC9+J3IDCBSoiTrvSmf9P0ZEtbapfhPYAAAAAElFTkSuQmCC"

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>PPC Atlas - Master Google Ads &amp; Meta Ads</title>
        <meta property="og:title" content="PPC Atlas - Master Google Ads &amp; Meta Ads" />
      </Helmet>
      <Navigation />
      <div className="home-hero">
        <div className="home-hero-content">
          <div className="home-text-section">
            <h1 className="home-heading">Master PPC Advertising</h1>
            <p className="home-description">
              Your comprehensive knowledge base for Google Ads and Meta Ads. Learn strategies, best practices, and advanced techniques to elevate your digital advertising campaigns.
            </p>
            <div className="home-cta-buttons">
              <Link to="/google-ads-hub" className="home-button home-button-google">
                <span className="home-button-icon">
                  <img src={googleAdsLogoSrc} alt="Google Ads" style={{ width: "18px", height: "18px", objectFit: "contain" }} />
                </span>
                Google Ads Atlas
              </Link>
              <Link to="/meta-ads-hub" className="home-button home-button-meta">
                <span className="home-button-icon">
                  <img src={metaLogoSrc} alt="Meta" style={{ width: "20px", height: "20px", objectFit: "contain" }} />
                </span>
                Meta Ads Atlas
              </Link>
            </div>
          </div>
          <div className="home-animation-section">
            <div className="home-animation-placeholder">
              <div className="home-compass-container">
                <div className="home-compass-inner">
                  <div className="home-compass-n">N</div>
                  <div className="home-compass-needle">
                    <div className="home-compass-needle-north"></div>
                    <div className="home-compass-needle-south"></div>
                  </div>
                  <div className="home-compass-center"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-features">
        <div className="home-features-grid">
          <div className="home-feature-card">
            <div className="home-feature-icon">📊</div>
            <h3 className="home-feature-title">Comprehensive Guides</h3>
            <p className="home-feature-description">In-depth articles covering every aspect of PPC advertising from foundations to advanced optimization.</p>
          </div>
          <div className="home-feature-card">
            <div className="home-feature-icon">🎯</div>
            <h3 className="home-feature-title">Best Practices</h3>
            <p className="home-feature-description">Learn proven strategies and techniques used by top PPC professionals worldwide.</p>
          </div>
          <div className="home-feature-card">
            <div className="home-feature-icon">🚀</div>
            <h3 className="home-feature-title">Actionable Insights</h3>
            <p className="home-feature-description">Practical tips and tactics you can implement immediately to improve your campaigns.</p>
          </div>
        </div>
      </div>
      <div className="home-help-section">
        <div className="home-help-content">
          <h2 className="home-help-title">Need Help?</h2>
          <p className="home-help-description">Get in touch with us for personalized guidance and support with your PPC campaigns.</p>
          <form className="home-help-form" id="contact">
            <div className="home-form-group">
              <input type="text" placeholder="Your Name" className="home-form-input" required />
            </div>
            <div className="home-form-group">
              <input type="email" placeholder="Your Email" className="home-form-input" required />
            </div>
            <div className="home-form-group">
              <textarea placeholder="How can we help you?" className="home-form-textarea" rows="4" required></textarea>
            </div>
            <button type="submit" className="home-form-submit">Send Message</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home
