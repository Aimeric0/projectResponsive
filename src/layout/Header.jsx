function Header()  {
  return (
    <header>
      <div className="logo">
        <img src="logo.png" alt="Logo de l'application" />
        <h1>Responsive App</h1>
      </div>

      <nav>
        <ul>
          <li><a href="/">Accueil</a></li>
          <li><a href="/search">Recherche</a></li>
          <li><a href="/users">Users</a></li>
        </ul>
      </nav>
    </header>
  )
}