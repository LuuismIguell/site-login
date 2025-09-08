// Selecionando elementos
const form = document.querySelector('.form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

// Função para mostrar/ocultar senha
function togglePassword() {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
  } else {
    passwordInput.type = 'password';
  }
}
form.addEventListener('submit', function(e) {
  e.preventDefault(); // previne envio real

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  if (!username || !password) {
    alert('Preencha todos os campos!');
    return;
  }

  // Aqui você pode adicionar validação real (ex: verificar usuário/senha)
  alert(`Login realizado!\nUsuário: ${username}\nSenha: ${password}`);
});
