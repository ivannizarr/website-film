// Carousel untuk nav film
document.addEventListener('DOMContentLoaded', function() {


  // Dropdown profil
  const profileBtn = document.querySelector('.profile');
  const profileDropdown = document.getElementById('profileDropdown');

  if (profileBtn && profileDropdown) {
    profileBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      profileDropdown.classList.toggle('show');
    });

    // Tutup dropdown klik di luar
    document.addEventListener('click', function() {
      profileDropdown.classList.remove('show');
    });

    // Cegah dropdown tertutup ketika klik di dalamnya
    profileDropdown.addEventListener('click', function(e) {
      e.stopPropagation();
    });
  }

  // Fungsi dropdown footer mobile
  const genreHeader = document.querySelector('.genre-col h4');
  const helpHeader = document.querySelector('.help-col h4');
  const genreCol = document.querySelector('.genre-col');
  const helpCol = document.querySelector('.help-col');

  if (genreHeader && genreCol) {
    genreHeader.addEventListener('click', function() {
      genreCol.classList.toggle('expanded');
    });
  }

  if (helpHeader && helpCol) {
    helpHeader.addEventListener('click', function() {
      helpCol.classList.toggle('expanded');
    });
  }
});