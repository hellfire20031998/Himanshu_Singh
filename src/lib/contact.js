/** Normalizes stored phone string for tel: links. */
export function telHref(phone) {
  return `tel:${phone.replace(/[\s-]/g, '')}`;
}

/** Opens the user's default mail client (mailto:). */
export function mailtoHref(email) {
  const trimmed = String(email).trim();
  return `mailto:${trimmed}`;
}
