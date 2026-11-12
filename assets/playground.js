// Pulsante "Prova nel Playground" per gli esercizi di codice.
// Markup: <pre class="play"><code>…codice Rust completo…</code></pre>
// Opzionale: data-mode="test" sul <pre> per un esercizio con #[test]
// (nel Playground poi scegli "Test" dal menu accanto a Run).
(function () {
  document.querySelectorAll("pre.play").forEach(function (pre) {
    var code = (pre.querySelector("code") || pre).textContent;
    var url = "https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&code=" + encodeURIComponent(code);
    var a = document.createElement("a");
    a.href = url; a.target = "_blank"; a.rel = "noopener";
    a.className = "play-btn";
    a.textContent = pre.dataset.mode === "test" ? "▶ Apri nel Playground (poi: Test)" : "▶ Apri nel Playground";
    pre.insertAdjacentElement("afterend", a);
  });
})();
