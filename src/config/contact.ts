// ─────────────────────────────────────────────
//  Configurazione contatti – modifica qui
// ─────────────────────────────────────────────

export const CONTACT = {
  phone: '371 372 5768',
  email: 'studimedicitoscana.grosseto.19@gmail.com',

  // ⚠️  Sostituisci con il numero WhatsApp reale (solo cifre, prefisso 39)
  whatsappNumber: '393713725768',

  get whatsappUrl() {
    return `https://wa.me/${this.whatsappNumber}`;
  },
  whatsappMessage: (context?: string) =>
    `https://wa.me/393713725768?text=${encodeURIComponent(
      `Salve, vorrei prenotare una visita${context ? ` (${context})` : ''}.`
    )}`,

  get emailUrl() {
    return `mailto:${this.email}`;
  },
};
