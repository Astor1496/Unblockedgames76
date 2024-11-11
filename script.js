function openGame(url) {
  // Open a new tab
  var win = window.open();
  
  // Add styles to remove margins and padding in the new tab
  win.document.documentElement.style.margin = "0";
  win.document.documentElement.style.padding = "0";
  win.document.documentElement.style.height = "100%";
  win.document.body.style.margin = "0";
  win.document.body.style.padding = "0";
  win.document.body.style.height = "100%";
  
  // Create the iframe
  var iframe = win.document.createElement('iframe');
  iframe.style.position = "absolute";
  iframe.style.top = "0";
  iframe.style.left = "0";
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.style.border = "none";
  iframe.src = url;
  
  // Focus the iframe once it loads
  iframe.onload = function() {
    iframe.focus();
  };
  
  // Append the iframe to the new tab's body
  win.document.body.appendChild(iframe);
}

// Game-specific functions
function vlol() {
  openGame("https://games-site.github.io/projects/1v1.lol/index.html");
}

function superMario64() {
  openGame("https://mathadventure1.github.io/sm64/sm64/index.html");
}

function superMarioBros() {
  openGame("https://jcw87.github.io/c2-smb1/");
}

function subwaySurfers() {
  openGame("https://ug17.github.io/play/Subway-Surfers/");
}

function stickmanHook() {
  openGame("https://ug17.github.io/play/Stickman-HookUB/");
}

function stack() {
  openGame("https://ug17.github.io/play/Stack/");
}

function dogeMiner() {
  openGame("https://ug17.github.io/play/Doge-Miner/");
}

function flappyBird() {
  openGame("https://ug17.github.io/play/Flappy-Bird/");
}

function crossyRoad() {
  openGame("https://ug17.github.io/play/Crossy-Road/");
}

function geometryDash() {
  openGame("https://ug17.github.io/play/Geometry-Dash/");
}

function slope() {
  openGame("https://ug17.github.io/play/Slope/");
}

function bitLife() {
  openGame("https://games-site.github.io/projects/bitlife/index.html");
}

function dinoGame() {
  openGame("https://games-site.github.io/projects/chrome-dino/index.html");
}

function doodleJump() {
  openGame("https://games-site.github.io/projects/doodle-jump/index.html");
}

https://games-site.github.io/projects/drift-boss/index.html

function driftBoss() {
  openGame("https://games-site.github.io/projects/drift-boss/index.html");
}

https://games-site.github.io/projects/wbwwb/index.html

function wbwwb() {
  openGame("https://games-site.github.io/projects/wbwwb/index.html");
}

function worldguesser() {
  openGame("https://www.worldguessr.com/");
}

function tilegame() {
  openGame("https://ovolve.github.io/2048-AI/");
}

function basketStars() {
  openGame("https://ug17.github.io/play/Basketball-Stars/");
}

function rtroBowl() {
  openGame("https://ug17.github.io/play/Retro-Bowl/");
}

function snowRider() {
  openGame("https://drippy-cat.github.io/snowrider3D/");
}

function maskedForces() {
  openGame("https://maskedforcesunlimited.github.io/");
}

function amongUs() {
  openGame("https://games-site.github.io/projects/among-us/index.html");
}

function motoxm() {
  openGame("https://games-site.github.io/projects/moto-x3m/index.html");
}
