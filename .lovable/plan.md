## Obiettivo

Aggiornare la sezione Hero della homepage (`src/components/Hero.tsx`) sostituendo l'immagine attuale (foto Unsplash) con la nuova immagine della dottoressa allegata, e rimuovere la card fluttuante "Prenota in un click / Risposta Rapida".

Mantenere intatti: stile, palette, font, layout split a 2 colonne, responsive behaviour, animazioni.

## Modifiche

### 1. Asset
- Salvare l'immagine caricata in `src/assets/hero-doctor.png` (tramite `code--copy` da `user-uploads://image-3.png`).
- Importarla nel componente come modulo ES6:  
  `import heroImage from '@/assets/hero-doctor.png';`

### 2. `src/components/Hero.tsx`

**Colonna destra — immagine:**
- Sostituire il `<img src="https://images.unsplash.com/...">` con `<img src={heroImage}>`.
- Aggiornare l'`alt` in qualcosa di pertinente (es. "Medico specialista Studi Medici Toscana").
- Mantenere il container con `rounded-[40px]`, `shadow-2xl`, `border border-natural-border` e l'effetto `grayscale-[20%] hover:grayscale-0`.
- Poiché l'immagine ha già uno sfondo bianco molto chiaro, valutare di rimuovere o ridurre il `grayscale` iniziale per non smorzare ulteriormente i toni (sfumatura: tengo un leggero `grayscale-[10%]` per coerenza con lo stile editoriale del sito).
- Aggiungere `bg-natural-bg` al container immagine così lo sfondo bianco della foto si fonde armoniosamente con il colore di sezione.

**Card fluttuante:**
- Rimuovere completamente il blocco `<motion.div>` "Prenota in un click / Risposta Rapida" (icona `ShieldCheck` inclusa, se non più usata altrove nel file).
- Verificare gli import: `ShieldCheck` resta usato nelle stat in basso (`D.Lgs 81/2008`), quindi l'import rimane.

### 3. Responsive
Il layout split esistente (`grid lg:grid-cols-2`) è già ottimizzato:
- **Desktop (≥1024px):** testo a sinistra, immagine a destra.
- **Mobile (<1024px):** immagine sotto al testo, full width della colonna.
Nessuna modifica necessaria al grid.

### 4. Cleanup
- Rimuovere l'import inutilizzato di `ShieldCheck` **solo se** dopo la rimozione della card non è più usato (verifica: è ancora usato nelle stats in basso → si tiene).

## File toccati
- `src/assets/hero-doctor.png` (nuovo, copia da upload)
- `src/components/Hero.tsx` (modifica)

## Note
L'immagine ha un alone circolare chiaro che funziona molto bene dentro il container `rounded-[40px]` con sfondo neutro: l'effetto risultante è un ritratto pulito ed editoriale, coerente con il resto del sito. Nessun gradient o overlay necessario.
