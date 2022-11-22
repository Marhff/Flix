import { FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { FiChevronsUp } from "react-icons/fi";
import { Fade } from "react-reveal";

import logoCub from "../assets/icons/Marca_Principal_1.svg";

const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    })
  }

  return (
    <>
      <footer className="footer">
        <button className="up-btn" onClick={scrollToTop}>
          <span className="bg">
            <FiChevronsUp />
          </span>
        </button>
        <div className="container">
          <div className="footer-content">
          <Fade left>
            <div className="footer-title">
              <h3>Libertae Medical Tech</h3>
              <p className="text-14">
                Garatimos que os equipamentos médicos utilizados, operem com segurança e eficiência
              </p>
            </div>
          </Fade>
          <Fade right>
            <ul>
              <h6>Suporte</h6>
              <li className="text-14"><a href="#">Termos de Uso</a></li>
              <li className="text-14"><a href="#">Política de Privacidade</a></li>
              <li className="text-14"><a href="#">Fale Conosco</a></li>
            </ul>
            <div className="footer-social">
              <h6>Siga nossas redes sociais:</h6>
              <a href="#">
                <FaInstagram />
              </a>
              <a href="#">
                <FiTwitter />
              </a>
            </div>
          </Fade>
          </div>
          <div className="footer-copyright">
            <Fade left>
              <p className="text-14">©Copyright 2022. Todos os direitos reservados.</p>
            </Fade>
            <Fade right>
              <span className="text-14 footer-developers">
                Desenvolvido por:
                <a href="https://cubedev.com.br/" target="_blank" rel="noreferrer">
                  <img src={logoCub} className="logoCub" alt="logoCub" />
                </a>
              </span>
            </Fade>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer