# Note del docente

- Lingua: italiano. Termini tecnici in inglese quando sono quelli usati davvero (borrow checker, crate, trait…).
- Background: C, Java, Apex, un po' di Python. Fermo da anni → ripassare la teoria generale prima di darla per scontata, ma usare C e Java come ponte per i paragoni (C per memoria/puntatori, Java per tipi/oggetti).
- Sessioni da 10 minuti a 3 ore, variabili. Ogni lezione ~10-15 minuti, con una sezione facoltativa "Se hai più tempo" per le sessioni lunghe.
- Potrebbe studiare anche dal telefono / sessione cloud: offrire sempre il Rust Playground come alternativa al terminale locale.
- Ha chiesto di non escludere nulla dal percorso.
- Esercizi pratici: nella cartella `pratica/` del repo (progetti Cargo creati dall'utente).
- **Pubblicazione:** le lezioni si leggono su GitHub Pages (https://leixien.github.io/LearningRust/), pubblicate dal workflow `.github/workflows/pages.yml` a ogni push su `main`. Viene pubblicato solo `index.html`, `lessons/`, `reference/`, `assets/`: i link a file `.md` vanno fatti verso github.com, non relativi.
- **Ogni nuova lezione:** aggiungerla a `index.html` (con `<span class="badge" data-quiz="NNNN">`), dare `data-id="NNNN"` al quiz e includere `assets/playground.js`. Gli esercizi di codice vanno in `<pre class="play">` con un programma completo e compilabile (con `data-mode="test"` se contiene `#[test]`), così si possono fare anche dal browser.
