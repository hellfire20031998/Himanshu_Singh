export function SocialLink({ href, children }) {
  if (!href) {
    return <span className="text-zinc-600">{children}</span>;
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-zinc-400 hover:text-violet-300 underline-offset-4 hover:underline transition-colors duration-200"
    >
      {children}
    </a>
  );
}
