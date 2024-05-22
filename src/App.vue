<template>
  <div class="app">
    <header>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand">
          <img src="../src/img/filme.jpg">
          <p class="text">Catálogo de Filmes</p>
        </a>
      </nav>
    </header>
    <router-view/>
  </div>
</template>

<style>
body, .app {
  margin: 0;
  padding: 0;
  background-color: var(--primary-color);
}

:root {
  --primary-color: #2e2e2e;
  --secondary-color: #000; 
}

header, .navbar, .navbar-brand, .text, .router-view {
  position: relative;
  z-index: 1; 
}

.app {
  font-family: 'Helvetica';
  margin: 0;
  width: 100vw;
  min-height: 100vh; 
  background-image: url('../src/img/cinema.jpg'); 
  background-size: cover; 
  background-repeat: repeat; 
  position: relative;
  opacity: 1;
  overflow: hidden;
}

.app::before {
  content: '';
  position: fixed; 
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.616); 
  z-index: 0;
  background-attachment: fixed;
}

.navbar {
  background-image: linear-gradient(to right, #ce5132, #A7133F);
  padding: 5px 5px;
  color: #ffffff; 
  text-align: center;
  padding-left: 20px; 
  padding-right: 20px; 
  border: 2.5px solid #c551518e;
}

.navbar-brand {
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
  font-size: 2.5rem; 
  margin-right: 20px; 
  font-family: 'Helvetica';
  text-shadow: black 0.1em 0.1em 0.2em;
}

.text {
  padding: 10px;
  font-family: Helvetica;
}

.navbar-brand img {
  margin-right: 10px; 
  width: 60px; 
  height: auto;
}

@media screen and (max-width: 768px) {
  .navbar-brand {
    font-size: 1.2rem; 
  }

  .navbar-brand img {
    width: 30px; 
  }
}
</style>