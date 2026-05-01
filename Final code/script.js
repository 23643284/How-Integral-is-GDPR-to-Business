

function checkConsent() {
  const banner = document.getElementById("consentBanner");


  if (banner) {
    banner.style.display = "block";
  }
}


function giveConsent() {
  const banner = document.getElementById("consentBanner");
  if (banner) {
    banner.style.display = "none";
  }
}

function declineConsent() {
  const banner = document.getElementById("consentBanner");
  if (banner) {
    banner.style.display = "none";
  }
}




function saveResult(score, total, level) {
  let results = JSON.parse(localStorage.getItem("quizResults")) || [];

  results.push({
    score: score,
    total: total,
    level: level,
    date: new Date().toLocaleString()
  });

  localStorage.setItem("quizResults", JSON.stringify(results));
}