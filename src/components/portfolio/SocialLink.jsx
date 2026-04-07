export function SocialLink({ href, children }) {
  if (!href) {
    return <span className="text-stone-400">{children}</span>;
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-white underline-offset-4 hover:underline transition-colors duration-200"
    >
      {children}
    </a>
  );
}
