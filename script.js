var body = document.body,
  color = document.querySelector(".color"),
  r = document.querySelector("#r"),
  g = document.querySelector("#g"),
  b = document.querySelector("#b"),
  r_out = document.querySelector("#r_out"),
  g_out = document.querySelector("#g_out"),
  b_out = document.querySelector("#b_out"),
  rgb_out = document.querySelector("#rgb_out");
function setColor() {
  var rgb = "rgb(" + r.value + ", " + g.value + ", " + b.value + ")";
  color.style.backgroundColor = rgb;
  rgb_out.value = rgb;
}

function pad(n) {
  return n.length < 2 ? "0" + n : n;
}

r.addEventListener(
  "change",
  function () {
    setColor();
    r_out.value = r.value;
  },
  false
);

r.addEventListener(
  "input",
  function () {
    setColor();
    r_out.value = r.value;
  },
  false
);

g.addEventListener(
  "change",
  function () {
    setColor();
    g_out.value = g.value;
  },
  false
);

g.addEventListener(
  "input",
  function () {
    setColor();
    g_out.value = g.value;
  },
  false
);

b.addEventListener(
  "change",
  function () {
    setColor();
    b_out.value = b.value;
  },
  false
);

b.addEventListener(
  "input",
  function () {
    setColor();
    b_out.value = b.value;
  },
  false
);
