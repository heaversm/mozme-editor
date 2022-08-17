const $codingArea = document.getElementById("coding_area");
const $sourceButton = document.querySelector(".source-btn");

const html = document.getElementById("html");
const css = document.getElementById("css");
const js = document.getElementById("js");
const code = document.getElementById("code").contentWindow.document;

let siteBoilerplate =
  '<div id="container"><h2>Template Code</h2><div id="user-code"><%- userHTML %></div></div>';

let htmlTemplate;

function init() {
  initialRender();
  addListeners();
}

function renderHTMLTemplate() {
  htmlTemplate = ejs.render(siteBoilerplate, { userHTML: html.value });
}

function initialRender() {
  renderHTMLTemplate();
  code.open();
  code.writeln(htmlTemplate);
  code.close();
}

function addListeners() {
  $sourceButton.addEventListener("click", function () {
    $codingArea.classList.toggle("js-hidden");
  });

  document.body.onkeyup = function () {
    renderHTMLTemplate();

    code.open();
    code.writeln(
      htmlTemplate +
        "<style>" +
        css.value +
        "</style>" +
        "<script>" +
        js.value +
        "</script>"
    );
    code.close();
  };
}

function compile() {}
init();
