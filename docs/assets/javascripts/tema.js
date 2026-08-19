/* Define o tema CLARO como padrão.
 *
 * Por que isto existe: quando nenhuma paleta do Material declara uma
 * `media` que case, o script do tema acaba aplicando a última da lista —
 * o escuro — em quem está com o sistema em modo noturno. O site foi pedido
 * branco, então a escolha inicial não pode depender do sistema do visitante.
 *
 * Só age quando NÃO há preferência salva. Assim que a pessoa usa o botão de
 * alternância, o Material grava `__palette` no navegador e este script sai
 * do caminho — a escolha dela vale nas próximas visitas.
 *
 * `document$` é o observável do Material: dispara a cada troca de página do
 * modo `navigation.instant`, que não recarrega o documento.
 */
(function () {
  "use strict";

  function haEscolhaSalva() {
    try {
      var bruto = localStorage.getItem("__palette");
      if (!bruto) return false;
      var dados = JSON.parse(bruto);
      return dados && typeof dados.index === "number";
    } catch (e) {
      return false;   // localStorage bloqueado: trata como sem escolha
    }
  }

  function aplicarClaro() {
    if (haEscolhaSalva()) return;
    var corpo = document.body;
    if (!corpo) return;
    corpo.setAttribute("data-md-color-scheme", "default");
    corpo.setAttribute("data-md-color-primary", "white");
    corpo.setAttribute("data-md-color-accent", "blue");
  }

  if (typeof document$ !== "undefined" && document$.subscribe) {
    document$.subscribe(aplicarClaro);
  } else if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", aplicarClaro);
  } else {
    aplicarClaro();
  }
})();
