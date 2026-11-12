# Rust Resources

## Knowledge

- [Libro: _The Rust Programming Language_ ("il Book")](https://doc.rust-lang.org/book/)
  Il testo ufficiale, gratuito. Fonte primaria per tutto il linguaggio di base. Use for: sintassi, ownership, struct/enum, errori, trait, generics, lifetimes, concorrenza.
- [Libro interattivo: il Book con quiz (Brown University)](https://rust-book.cs.brown.edu/)
  Stesso testo del Book con quiz di richiamo e visualizzazioni dell'ownership. Use for: pratica di retrieval dopo ogni capitolo, capire la memoria.
- [Rustlings](https://rustlings.rust-lang.org/)
  Piccoli esercizi ufficiali da risolvere nel terminale, pensati da fare in parallelo al Book. Use for: pratica breve (perfetto per le sessioni da 10 minuti).
- [Rust by Example](https://doc.rust-lang.org/rust-by-example/)
  Il linguaggio spiegato tramite esempi eseguibili. Use for: vedere subito un concetto in codice.
- [Comprehensive Rust (Google), versione italiana](https://google.github.io/comprehensive-rust/it/)
  Corso di Google usato internamente per formare gli ingegneri; c'è una traduzione italiana (in parte automatica, poi rivista). Use for: ripasso in italiano, panoramica compatta.
- [Documentazione della libreria standard](https://doc.rust-lang.org/std/)
  Il riferimento per tipi e metodi (`Vec`, `String`, `Option`, `Result`…). Use for: cercare cosa sa fare un tipo.
- [The Cargo Book](https://doc.rust-lang.org/cargo/)
  Riferimento ufficiale di Cargo. Use for: dipendenze, workspace, profili di build, pubblicazione.
- [Tutorial di Tokio](https://tokio.rs/tokio/tutorial)
  Il runtime async più usato. Use for: async/await, task, I/O di rete, prerequisito per i framework web.
- [axum: documentazione](https://docs.rs/axum/latest/axum/) ed [esempi](https://github.com/tokio-rs/axum/tree/main/examples)
  Framework web del progetto Tokio. Use for: routing, handler, estrattori, JSON, stato condiviso.
- [Libro: _Zero To Production In Rust_ di Luca Palmieri](https://www.zero2prod.com/)
  A pagamento. Costruisce da zero un'API di produzione (newsletter): test, database, telemetria, deploy. Il libro usa actix-web; esiste una versione del codice con axum. Use for: la parte backend "vera", quando le basi sono solide.
- [Rust Playground](https://play.rust-lang.org/)
  Compila ed esegue Rust nel browser. Use for: provare codice quando non sei al tuo computer.

## Wisdom (Communities)

- [Rust Users Forum](https://users.rust-lang.org/)
  Forum ufficiale, molto accogliente con i principianti. Use for: domande "come si fa", revisione del codice.
- [r/rust](https://www.reddit.com/r/rust/)
  Subreddit grande e moderato. Use for: notizie, opinioni sull'ecosistema (quale crate usare).
- [Rust Milano (Meetup)](https://www.meetup.com/rust-language-milano/)
  Il gruppo italiano più attivo trovato, con incontri dal vivo e un canale Telegram indicato sulla pagina. Use for: confronto in italiano, talk, workshop.
- [This Week in Rust](https://this-week-in-rust.org/)
  Newsletter settimanale. Ogni numero elenca le issue "Call for Participation" adatte a chi vuole contribuire. Use for: trovare il primo contributo open source.

## Gaps

- Nessuna community italiana online stabile e verificata (Discord/Telegram nazionale): da ricercare
- Fonte di teoria generale (come funziona un computer/compilatore, HTTP) in italiano e di alta qualità: da cercare quando arriveremo alla parte di rete
