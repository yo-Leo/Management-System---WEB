export function initProfileMenu() {
  const profileImage = document.getElementById("profileimage");
  const menu = document.getElementById("profile-menu");
  const addUserBtn = document.getElementById("addUserBtn");
  const logoutBtn = document.getElementById("logoutBtn");

  if (!profileImage || !menu) return;

  profileImage.addEventListener("click", (e) => {
    e.preventDefault();
    menu.classList.toggle("hidden");
  });

  document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && e.target !== profileImage) {
      menu.classList.add("hidden");
    }
  });

  if (addUserBtn) {
    addUserBtn.addEventListener("click", () => {
      alert("Função: Adicionar usuário");
    });
  }

  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      alert("Saindo do sistema...");
    });
  }
}