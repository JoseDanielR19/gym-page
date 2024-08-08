import "../../css/footer.css";

export const Footer = () => {
  return (
    <>
      <div className="background-footer">
        <div className="footer">
          <div className="brand-social">
            <div className="brand">
              <img src="img/Tiven.png" alt="tivenfit" />
            </div>
            <div className="social-network">
              <a href="#">
                <img src="icons/instagram.svg" alt="instagram" />
              </a>
              <a href="#">
                <img src="icons/facebook.svg" alt="facebook" />
              </a>
              <a href="#">
                <img src="icons/whatsapp.svg" alt="whatsapp" />
              </a>
              <a href="#">
                <img src="icons/twitter.svg" alt="twitter" />
              </a>
            </div>
          </div>
          <div className="name-brand">
            <h2>Stevens Rivas:</h2>
            <p>
              Entrenador Personalizado, especializado en diseñar programas de
              entrenamiento adaptados a las necesidades y objetivos individuales
              de cada cliente.
            </p>
          </div>
          <div className="contact">
            <h2>Contáctame:</h2>
            <div className="phone">
              <img src="icons/phone.svg" alt="phone" />
              <p>+57 321 4567890</p>
            </div>
            <div className="mail">
              <img src="icons/mail.svg" alt="mail" />
              <p>info@stevensrivas.com</p>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>
            © 2024 <span style={{ fontWeight: "bold" }}>Stevens rivas</span>.
            Todos los derechos reservados.
          </p>
        </div>
      </div>
    </>
  );
};
