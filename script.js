function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSheet();
  var data = JSON.parse(e.postData.contents);
  var input = data.input;
  
  // Append the input data to the sheet
  sheet.appendRow([input]);

  return ContentService.createTextOutput(
    JSON.stringify({ result: "success" })
  ).setMimeType(ContentService.MimeType.JSON);
}

const input = document.querySelector('input');
const games = document.querySelectorAll('#games img');

input.addEventListener('input', () => {
  const searchTerm = input.value.toLowerCase();
  games.forEach(game => {
    if (game.alt.toLowerCase().includes(searchTerm)) {
      game.style.display = 'block';
    } else {
      game.style.display = 'none';
    }
  });
});

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
  openGame("https://encryptium.github.io/Battering-Ram/1v1.LOL/");
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
  openGame("https://games-site.github.io/projects/2048/index.html");
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

function motoxm2() {
  openGame("https://games-site.github.io/projects/moto-x3m-2/index.html");
}

function motoxmwinter() {
  openGame("https://games-site.github.io/projects/moto-x3m-winter/index.html");
}

function motoxmpoolparty() {
  openGame("https://games-site.github.io/projects/moto-x3m-pool-party/index.html");
}

function motoxmspookyland() {
  openGame("https://games-site.github.io/projects/moto-x3m-spooky-land/index.html");
}

function littlealchemy() {
  openGame("https://games-site.github.io/projects/little-alchemy/index.html");
}

function madalinstuntcars2() {
  openGame("https://games-site.github.io/projects/madalin-stunt-cars-2/index.html");
}

function fnaf2() {
  openGame("https://games-site.github.io/projects/fnaf-2/index.html");
}

function madalinstuntcars3() {
  openGame("https://games-site.github.io/projects/madalin-stunt-cars-3/index.html");
}

function ocarinaoftime() {
  openGame("https://games-site.github.io/emulation/N64/ocarina-of-time/index.html");
}

function gtaadvance() {
  openGame("https://games-site.github.io/emulation/GBA/gta-advance/index.html");
}

function pokemonfirered() {
  openGame("https://games-site.github.io/emulation/GBA/pokemon-fire-red/index.html");
}

function learntofly() {
  openGame("https://stickman-unblocked.lol/lessons/lesson-110/");
}

function eaglercraft() {
  openGame("https://svaaps.github.io/eaglercrafthtml/");
}
