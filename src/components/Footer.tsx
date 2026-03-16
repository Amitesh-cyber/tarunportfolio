const Footer = () => (
  <footer className="border-t border-border py-8 px-6 container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
    <p className="text-xs text-muted-foreground">© 2025 Amit Bhardwaj. All rights reserved.</p>
    <p className="text-xs text-muted-foreground">
      300+ DSA Problems on{" "}
      <a
        href="https://leetcode.com"
        target="_blank"
        rel="noopener noreferrer"
        className="underline underline-offset-4 decoration-accent/40 hover:decoration-accent"
      >
        LeetCode
      </a>
    </p>
  </footer>
);

export default Footer;
