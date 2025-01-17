import { Link, Outlet } from "react-router-dom";
import Cabecera from "../COMPONENTS/Layout/Cabecera";
import { Col, Container, Image, Row, Stack } from "react-bootstrap";
import logo_footer from "../IMAGES/WEBP/image.png";

export const Layout = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        position: "relative",
      }}
    >
      <Cabecera />
      <main>
        <Outlet />
      </main>
      <footer
        style={{
          backgroundColor: "rgb(130, 119, 120)",
          color: "#ffffff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container fluid className="p-5">
          <Row className="text-center text-lg-start">
            {/* Logo (más ancho) */}
            <Col
              xs={12}
              md={6}
              lg={4}
              className="mb-3 mb-lg-0 d-flex justify-content-center align-items-center"
            >
              <Image src={logo_footer} fluid />
            </Col>

            {/* Productos */}
            <Col xs={12} sm={6} md={3} lg={2} className="mb-3 mb-lg-0">
              <Stack gap={2}>
                <Link>
                  <h5>Productos</h5>
                </Link>
                <Link>Productos populares</Link>
                <Link>Productos</Link>
                <Link>Kits</Link>
              </Stack>
            </Col>

            {/* Sobre Nosotros */}
            <Col xs={12} sm={6} md={3} lg={2} className="mb-3 mb-lg-0">
              <Stack gap={1}>
                <Link>
                  <h5>Sobre nosotros</h5>
                </Link>
                <Link>Pacis</Link>
                <Link>¿Por qué elegirnos?</Link>
                <Link>Propuesta de valor</Link>
                <Link>Sobre nuestros productos</Link>
                <Link>Reseñas</Link>
              </Stack>
            </Col>

            {/* Asistencia */}
            <Col xs={12} sm={6} md={3} lg={2} className="mb-3 mb-lg-0">
              <Stack gap={1}>
                <Link>
                  <h5>Asistencia</h5>
                </Link>
                <Link>Contacto</Link>
                <Link>Preguntas frecuentes</Link>
                <Link>Métodos de pago</Link>
                <Link>Devoluciones</Link>
                <Link>Cancelar pedido</Link>
                <Link>Términos y condiciones</Link>
              </Stack>
            </Col>

            {/* Seguinos */}
            <Col xs={12} sm={6} md={3} lg={2} className="mb-3 mb-lg-0">
              <Stack gap={1}>
                <Link>
                  <h5>Seguinos</h5>
                </Link>
                <Link>Redes sociales</Link>
              </Stack>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};
