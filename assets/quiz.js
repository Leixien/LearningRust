// Quiz riutilizzabile.
// Markup: <div class="quiz"> con dentro blocchi
//   <div class="q"><p>Domanda</p>
//     <button class="opt">…</button> <button class="opt" data-ok>…</button> …
//     <p class="why">Spiegazione mostrata dopo la risposta</p></div>
// e opzionalmente <p class="score"></p> per il punteggio.
// Con data-id="0001" sul .quiz il risultato viene salvato nel browser
// (localStorage) e mostrato nell'indice del corso.
(function () {
  document.querySelectorAll(".quiz").forEach(function (quiz) {
    var qs = quiz.querySelectorAll(".q");
    var score = quiz.querySelector(".score");
    var answered = 0, correct = 0;
    var id = quiz.dataset.id;
    function save() {
      if (!id) return;
      try { localStorage.setItem("lr:quiz:" + id, JSON.stringify({ correct: correct, total: qs.length, date: new Date().toISOString().slice(0, 10) })); } catch (e) {}
    }
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
          if (answered === qs.length) save();
        });
      });
    });
    update();
  });
})();
