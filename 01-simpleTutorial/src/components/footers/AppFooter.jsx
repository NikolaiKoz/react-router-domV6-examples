export default function AppFooter() {
  return (
    <footer className="bg-dark text-light p-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>Contacto</h5>
            <p>Correo: info@example.com</p>
            <p>Teléfono: +123 456 789</p>
          </div>
          <div className="col-md-6">
            <h5>Enlaces</h5>
            <ul className="list-unstyled">
              <li><a href="/">Inicio</a></li>
              <li><a href="/about">Acerca de</a></li>
              <li><a href="/contact">Contacto</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
