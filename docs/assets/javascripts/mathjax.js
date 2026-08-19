/* Configuração do MathJax para o Hillink.
 *
 * O `pymdownx.arithmatex` em modo genérico envolve as fórmulas em
 * <script type="math/tex">, e é isso que o MathJax procura abaixo.
 *
 * O bloco `document$.subscribe` é necessário por causa do
 * `navigation.instant`: o Material troca de página sem recarregar o
 * documento, então o MathJax precisa ser avisado para reprocessar — sem
 * isso, as fórmulas aparecem como texto cru ao navegar entre páginas.
 */
window.MathJax = {
  tex: {
    inlineMath: [["\\(", "\\)"]],
    displayMath: [["\\[", "\\]"]],
    processEscapes: true,
    processEnvironments: true,
    tags: "ams"          // numeração automática de equações
  },
  options: {
    ignoreHtmlClass: ".*|",
    processHtmlClass: "arithmatex"
  },
  chtml: {
    scale: 1.0,
    displayAlign: "left",
    displayIndent: "0"
  }
};

document$.subscribe(function () {
  if (window.MathJax && window.MathJax.typesetPromise) {
    MathJax.startup.output.clearCache();
    MathJax.typesetClear();
    MathJax.texReset();
    MathJax.typesetPromise();
  }
});
