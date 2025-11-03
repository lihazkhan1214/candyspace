import { Facebook, Twitter, Youtube, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-6 py-12">
        <nav className="flex flex-wrap justify-center gap-6 mb-12 text-sm">
          <a href="#" className="hover:text-primary transition-colors">Home</a>
          <span className="text-white/30">|</span>
          <a href="#" className="hover:text-primary transition-colors">About Us</a>
          <span className="text-white/30">|</span>
          <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          <span className="text-white/30">|</span>
          <a href="#" className="hover:text-primary transition-colors">Terms and Conditions</a>
          <span className="text-white/30">|</span>
          <a href="#" className="hover:text-primary transition-colors">Support</a>
        </nav>

        <div className="border-t border-white/10 pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <p className="text-xs text-white/60 mb-2">Follow Us</p>
              <div className="flex gap-4">
                <a href="#" className="hover:text-primary transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-3xl font-semibold tracking-tight mb-2">CANDYSPACE</h2>
              <p className="text-xs text-white/60">© 2000-2025 CandySpace</p>
            </div>

            <div className="w-32"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
