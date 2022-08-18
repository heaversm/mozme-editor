const $codingArea = document.getElementById("coding_area");
const $codingPlayground = document.getElementById("coding_playground_outer");
const $sourceButton = document.querySelector(".source-btn");

const html = document.getElementById("html");
const css = document.getElementById("css");
const js = document.getElementById("js");
const code = document.getElementById("code").contentWindow.document;

const socials = `<div style="display: flex; flex-wrap:wrap; align-items: center; justify-content: center;"><a href="https://www.linkedin.com/in/stlhood/" target="_blank" rel="noopener noreferrer" style="text-decoration:none;border:0;width:36px;height:36px;padding:2px;margin:5px;color:#11CBE9;border-radius:15%;background-color:#0d2744;"><svg class="niftybutton-twitter" style="display:block;fill:currentColor" data-tag="twi" data-name="Twitter" viewBox="0 0 512 512" preserveAspectRatio="xMidYMid meet">
<path d="M419.6 168.6c-11.7 5.2-24.2 8.7-37.4 10.2 13.4-8.1 23.8-20.8 28.6-36 -12.6 7.5-26.5 12.9-41.3 15.8 -11.9-12.6-28.8-20.6-47.5-20.6 -42 0-72.9 39.2-63.4 79.9 -54.1-2.7-102.1-28.6-134.2-68 -17 29.2-8.8 67.5 20.1 86.9 -10.7-0.3-20.7-3.3-29.5-8.1 -0.7 30.2 20.9 58.4 52.2 64.6 -9.2 2.5-19.2 3.1-29.4 1.1 8.3 25.9 32.3 44.7 60.8 45.2 -27.4 21.4-61.8 31-96.4 27 28.8 18.5 63 29.2 99.8 29.2 120.8 0 189.1-102.1 185-193.6C399.9 193.1 410.9 181.7 419.6 168.6z"></path>
</svg></a><a href="mailto:mailto:contact@stephenhood.com" target="_blank" rel="noopener noreferrer" style="text-decoration:none;border:0;width:36px;height:36px;padding:2px;margin:5px;color:#11CBE9;border-radius:15%;background-color:#0d2744;"><svg class="niftybutton-email" style="display:block;fill:currentColor" data-donate="true" data-tag="ema" data-name="Email" viewBox="0 0 512 512" preserveAspectRatio="xMidYMid meet">
<path d="M101.3 141.6v228.9h0.3 308.4 0.8V141.6H101.3zM375.7 167.8l-119.7 91.5 -119.6-91.5H375.7zM127.6 194.1l64.1 49.1 -64.1 64.1V194.1zM127.8 344.2l84.9-84.9 43.2 33.1 43-32.9 84.7 84.7L127.8 344.2 127.8 344.2zM384.4 307.8l-64.4-64.4 64.4-49.3V307.8z"></path>
</svg></a><a href="https://www.linkedin.com/in/stlhood/" target="_blank" rel="noopener noreferrer" style="text-decoration:none;border:0;width:36px;height:36px;padding:2px;margin:5px;color:#11CBE9;border-radius:15%;background-color:#0d2744;"><svg class="niftybutton-linkedin" style="display:block;fill:currentColor" data-donate="true" data-tag="lin" data-name="LinkedIn" viewBox="0 0 512 512" preserveAspectRatio="xMidYMid meet">
<path d="M186.4 142.4c0 19-15.3 34.5-34.2 34.5 -18.9 0-34.2-15.4-34.2-34.5 0-19 15.3-34.5 34.2-34.5C171.1 107.9 186.4 123.4 186.4 142.4zM181.4 201.3h-57.8V388.1h57.8V201.3zM273.8 201.3h-55.4V388.1h55.4c0 0 0-69.3 0-98 0-26.3 12.1-41.9 35.2-41.9 21.3 0 31.5 15 31.5 41.9 0 26.9 0 98 0 98h57.5c0 0 0-68.2 0-118.3 0-50-28.3-74.2-68-74.2 -39.6 0-56.3 30.9-56.3 30.9v-25.2H273.8z"></path>
</svg></a><a href="https://uniquehazards.com/" target="_blank" rel="noopener noreferrer" style="text-decoration:none;border:0;width:36px;height:36px;padding:2px;margin:5px;color:#11CBE9;border-radius:15%;background-color:#0d2744;"><svg class="niftybutton-tumblr" style="display:block;fill:currentColor" data-donate="true" data-tag="tum" data-name="Tumblr" viewBox="0 0 512 512" preserveAspectRatio="xMidYMid meet">
<path d="M210.8 80.3c-2.3 18.3-6.4 33.4-12.4 45.2 -6 11.9-13.9 22-23.9 30.5 -9.9 8.5-21.8 14.9-35.7 19.5v50.6h38.9v124.5c0 16.2 1.7 28.6 5.1 37.1 3.4 8.5 9.5 16.6 18.3 24.2 8.8 7.6 19.4 13.4 31.9 17.5 12.5 4.1 26.8 6.1 43 6.1 14.3 0 27.6-1.4 39.9-4.3 12.3-2.9 26-7.9 41.2-15v-55.9c-17.8 11.7-35.7 17.5-53.7 17.5 -10.1 0-19.1-2.4-27-7.1 -5.9-3.5-10-8.2-12.2-14 -2.2-5.8-3.3-19.1-3.3-39.7v-91.1H345.5v-55.8h-84.4v-90H210.8z"></path>
</svg></a></div>`;

const frameStyle = `
#container {
  text-align: center;
  font-family: Inter, sans-serif;
}
.description-container {
  max-width: 80%;
  margin: 0 auto;
}
`;

let siteBoilerplate = `<div id="container">
    <img src="./assets/images/avatar.png"/>
    <div class="socials-container">${socials}</div>
    
    <div id="user-code"><%- userHTML %></div>
  </div>`;

let descriptionBoilerplate = `
<h1>Stephen Hood</h1>
<div class="description-container">
  <p>Mozilla emerging products by day, Storium co-founder and CEO by night. Multiclass founder, geek, music lover, pet rescuer, chef. I level slowly but wear plate.</p>
</div>`;

let htmlTemplate;
let cssTemplate;

function init() {
  renderInitHTML();
  renderTemplate();
  addListeners();
}

function renderHTMLTemplate() {
  htmlTemplate = ejs.render(siteBoilerplate, { userHTML: html.value });
}

function renderCSSTemplate() {
  cssTemplate = frameStyle + css.value;
}

function writeCode() {
  code.open();
  code.writeln(
    htmlTemplate +
      "<style>" +
      cssTemplate +
      "</style>" +
      "<script>" +
      js.value +
      "</script>"
  );
  code.close();
}

function renderInitHTML() {
  html.value = descriptionBoilerplate;
}

function renderTemplate() {
  renderHTMLTemplate();
  renderCSSTemplate();
  writeCode();
}

function addListeners() {
  $sourceButton.addEventListener("click", function () {
    $codingPlayground.classList.toggle("js-hidden");
  });

  document.body.onkeyup = function () {
    renderTemplate();
  };
}

function compile() {}
init();
