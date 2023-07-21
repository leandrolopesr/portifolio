// Função para alternar para o modo claro
function enableLightMode() {
    document.body.classList.remove("dark-mode");
    document.body.classList.add("light-mode");
  }
  
  // Função para alternar para o modo
  function enableDarkMode() {
    document.body.classList.remove("light-mode");
    document.body.classList.add("dark-mode");
  }
  
  // Event listeners para os botões de alternância
  document.getElementById("light-mode-btn").addEventListener("click", enableLightMode);
  document.getElementById("dark-mode-btn").addEventListener("click", enableDarkMode);
  