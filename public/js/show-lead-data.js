const LocalStorageKey = "lead-info"; 

let db = JSON.parse(localStorage.getItem(LocalStorageKey) || "[]");

for (let i  in db ) {
  document.getElementById(
    "noContato"
  ).innerHTML += `<div class="lead"  draggable="true">
    <div class="indenfication">
      <div class="lead-foto" draggable="false">
        <img draggable="false" src="assets/utilites/user.png" alt="" />
      </div>
      <div class="lead-name">
        <p class="name-lead">${db[i]["nome"]}</p>
      </div>
    </div>
    <div class="infos">
      <div class="tel">
        <div class="tel-icon"><img src="../assets/utilites/tellicon.svg" alt=""></div>
        <div class="tel-area-text">
          <p id="Tell" class="Tell">${db[i]["tell"]}</p>
        </div>
      </div>
      <div class="mail">
        <div class="mail-icon"><img src="../assets/utilites/email-icon.svg" alt=""></div>
        <div class="mail-area-text">
          <p id="Mail" class="mail">${db[i]["email"]}</p>
        </div>
      </div>
    </div>
  </div>`;
}
