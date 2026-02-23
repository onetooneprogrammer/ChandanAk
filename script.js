function stepOne() {
  document.getElementById("step1").style.display = "none";
  document.getElementById("step2").style.display = "inline-block";
}

function stepTwo() {
  document.getElementById("step2").style.display = "none";
  document.getElementById("step3").style.display = "inline-block";
}

function finalYes() {
  document.getElementById("step3").style.display = "none";
  const celebration = document.getElementById("celebration");
  celebration.innerHTML = "💖💍🌸✨ She said YES! ✨🌸💍💖";
  celebration.style.fontSize = "2em";
  celebration.style.marginTop = "20px";

  // Burst crackers effect
  for (let i = 0; i < 30; i++) {
    let cracker = document.createElement("div");
    cracker.className = "cracker";
    document.body.appendChild(cracker);
    cracker.style.left = Math.random() * window.innerWidth + "px";
    cracker.style.top = Math.random() * window.innerHeight + "px";
    setTimeout(() => cracker.remove(), 2000);
  }

  // Play Band Baaja Baarat tune
  document.getElementById("bandbaja").play();
}
