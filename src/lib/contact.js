/** Normalizes stored phone string for tel: links. */
export function telHref(phone) {
  return `tel:${phone.replace(/[\s-]/g, '')}`;
}
