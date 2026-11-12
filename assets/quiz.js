// Quiz riutilizzabile.
// Markup: <div class="quiz"> con dentro blocchi
//   <div class="q"><p>Domanda</p>
//     <button class="opt">…</button> <button class="opt" data-ok>…</button> …
//     <p class="why">Spiegazione mostrata dopo la risposta</p></div>
// e opzionalmente <p class="score"></p> per il punteggio.
(function () {
  document.querySelectorAll(".quiz").forEach(function (quiz) {
    var qs = quiz.querySelectorAll(".q");
    var score = quiz.querySelector(".score");
    var answered = 0, correct = 0;
    function update() {
      if (score) score.textContent = answered < qs.length
        ? "Risposte: " + answered + " / " + qs.length
        : "Punteggio: " + correct + " / " + qs.length + (correct === qs.length ? " (perfetto!)" : ". Rileggi le spiegazioni e riprova tra qualche giorno.");
    }
    qs.forEach(function (q) {
      var opts = q.querySelectorAll("button.opt");
      opts.forEach(function (b) {
        b.type = "button";
        b.addEventListener("click", function () {
          if (q.classList.contains("done")) return;
          q.classList.add("done");
          answered++;
          if (b.hasAttribute("data-ok")) correct++; else b.classList.add("ko");
          opts.forEach(function (o) { o.disabled = true; if (o.hasAttribute("data-ok")) o.classList.add("ok"); });
          update();
        });
      });
    });
    update();
  });
})();
