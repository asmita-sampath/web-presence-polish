const Footer = () => (
  <footer className="bg-secondary text-secondary-foreground py-10">
    <div className="max-w-6xl mx-auto px-6 text-center">
      <p className="text-secondary-foreground/70 text-sm">
        © {new Date().getFullYear()} Amazing Minds. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
