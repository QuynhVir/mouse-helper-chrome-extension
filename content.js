if (!document.getElementById('ext-mouse-move')) {
  let elem = document.createElement("div");
  elem.id = 'ext-mouse-move';
  document.body.appendChild(elem);
}
if (!document.getElementById('ext-mouse-down')) {
  let elem = document.createElement("div");
  elem.id = 'ext-mouse-down';
  document.body.appendChild(elem);
}
if (!document.getElementById('ext-mouse-up')) {
  let elem = document.createElement("div");
  elem.id = 'ext-mouse-up';
  document.body.appendChild(elem);
}

var mouseMoveHighlight = document.getElementById("ext-mouse-move");
var mouseDownHighlight = document.getElementById("ext-mouse-down");
var mouseUpHighlight = document.getElementById("ext-mouse-up");

var mouseMoveColor = 'rgba(255, 10, 10, 0.7)',
  mouseMoveSize = '25',
  mouseMoveBorderColor = 'rgba(65,65,190,0.7)',
  mouseMoveBorderSize = '0',
  mouseDownColor = 'rgba(255,255,255,0)',
  mouseDownSize = '5',
  mouseDownBorderColor = 'rgba(64,64,191,0.5)',
  mouseDownBorderSize = '5',
  mouseUpColor = 'rgba(255,255,255,0)',
  mouseUpSize = '5',
  mouseUpBorderColor = 'rgba(65,65,190,0.6)',
  mouseUpBorderSize = '4';

function mouseMove(e) {
  var x = e.clientX - mouseMoveHighlight.offsetWidth / 2;
  var y = e.clientY - mouseMoveHighlight.offsetHeight / 2;

  if (!mouseMoveHighlight.parentNode) {
    mouseMoveHighlight = document.createElement("div");
    mouseMoveHighlight.id = "ext-mouse-move";
    document.body.appendChild(mouseMoveHighlight);
  }

  if (!mouseDownHighlight.parentNode) {
    mouseDownHighlight = document.createElement("div");
    mouseDownHighlight.id = "ext-mouse-down";
    document.body.appendChild(mouseDownHighlight);
  }

  if (!mouseUpHighlight.parentNode) {
    mouseUpHighlight = document.createElement("div");
    mouseUpHighlight.id = "ext-mouse-up";
    document.body.appendChild(mouseUpHighlight);
  }

  mouseMoveHighlight.style.cssText = `position: fixed; z-index: 99999999; pointer-events: none; top: ${y}px; left: ${x}px; border-radius: 50%; width: ${mouseMoveSize}px; height: ${mouseMoveSize}px; border: ${mouseMoveBorderSize}px solid ${mouseMoveBorderColor}; background-color: ${mouseMoveColor}; display: inline;`;
}

function mouseDown(e) {
  var x = e.clientX - mouseDownHighlight.offsetWidth / 2;
  var y = e.clientY - mouseDownHighlight.offsetHeight / 2;

  if (mouseDownHighlight.offsetHeight === 0) {
    mouseDownHighlight.style.borderRadius = "50%";
    mouseDownHighlight.style.width = mouseDownSize + 'px';
    mouseDownHighlight.style.height = mouseDownSize + 'px';
    mouseDownHighlight.style.border = mouseDownBorderSize + "px solid " + mouseDownBorderColor;
    x = e.clientX - mouseDownHighlight.offsetWidth / 2;
    y = e.clientY - mouseDownHighlight.offsetHeight / 2;
  }

  mouseDownHighlight.style.position = 'fixed';
  mouseDownHighlight.style.zIndex = '99999999';
  mouseDownHighlight.style.pointerEvents = 'none';
  mouseDownHighlight.style.top = y + 'px';
  mouseDownHighlight.style.left = x + 'px';
  mouseDownHighlight.style.borderRadius = "50%";
  mouseDownHighlight.style.width = mouseDownSize + 'px';
  mouseDownHighlight.style.height = mouseDownSize + 'px';
  mouseDownHighlight.style.border = mouseDownBorderSize + "px solid " + mouseDownBorderColor;
  mouseDownHighlight.style.backgroundColor = mouseDownColor;
  mouseDownHighlight.style.display = "inline";

  setTimeout(function () {
    mouseDownHighlight.style.display = 'none';
  }, 300);
}

function mouseUp(e) {
  var x = e.clientX - mouseUpHighlight.offsetWidth / 2;
  var y = e.clientY - mouseUpHighlight.offsetHeight / 2;

  if (mouseUpHighlight.offsetHeight === 0) {
    mouseUpHighlight.style.borderRadius = "50%";
    mouseUpHighlight.style.width = mouseUpSize + 'px';
    mouseUpHighlight.style.height = mouseUpSize + 'px';
    mouseUpHighlight.style.border = mouseUpBorderSize + "px solid " + mouseUpBorderColor;
    x = e.clientX - mouseUpHighlight.offsetWidth / 2;
    y = e.clientY - mouseUpHighlight.offsetHeight / 2;
  }

  mouseUpHighlight.style.position = 'fixed';
  mouseUpHighlight.style.zIndex = '99999999';
  mouseUpHighlight.style.pointerEvents = 'none';
  mouseUpHighlight.style.top = y + 'px';
  mouseUpHighlight.style.left = x + 'px';
  mouseUpHighlight.style.borderRadius = "50%";
  mouseUpHighlight.style.width = mouseUpSize + 'px';
  mouseUpHighlight.style.height = mouseUpSize + 'px';
  mouseUpHighlight.style.border = mouseUpBorderSize + "px solid " + mouseUpBorderColor;
  mouseUpHighlight.style.backgroundColor = mouseUpColor;
  mouseUpHighlight.style.display = "inline";

  setTimeout(function () {
    mouseUpHighlight.style.display = 'none';
  }, 300);
}

function ext_on() {
  window.addEventListener('mousemove', mouseMove);
  window.addEventListener('mousedown', mouseDown);
  window.addEventListener('mouseup', mouseUp);
}

function ext_off() {
  window.removeEventListener('mousemove', mouseMove);
  window.removeEventListener('mousedown', mouseDown);
  window.removeEventListener('mouseup', mouseUp);

  mouseMoveHighlight.style.display = 'none';
  mouseDownHighlight.style.display = 'none';
  mouseUpHighlight.style.display = 'none';
}

ext_on();