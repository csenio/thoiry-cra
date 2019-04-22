import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/globalStyles";
import theme from "./styles/theme";
import "./fonts/Inter (web)/inter.css";
import HEADPHOTO from "./images/Thoiry_15.jpg";
import styled from "styled-components";
import ImageModal from "./ImageModal";

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(
  require.context("./images", false, /\.(png|jpe?g|svg)$/)
);

console.log(images);

const Section = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  @media all and (max-width: 600px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

const Img = styled.img`
  width: 450px;
  @media all and (max-width: 600px) {
    width: 100%;
  }
`;

const Layout = styled.div`
  min-height: 100vh;
  width: 100%;
`;

const Article = styled.article`
  margin-left: 40px;
  width: 50%;
  @media all and (max-width: 600px) {
    width: 70%;
    text-align: center;
    margin: 0;
  }
`;

const ImgSection = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

const ImgPreview = styled.img`
  height: 200px;
  margin: 20px;
  cursor: pointer;
`;

const H1 = styled.h1`
  margin-bottom: 20px;
`;

const FormSection = styled.section`
  background: #9effd3;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const FormArticle = styled.article`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & input {
    margin: 3px;
    border: 1px solid #b2b2b2;
    min-width: 100%;
    height: 30px;
    border-radius: 4px;
    padding: 5px;
  }
  & textarea {
    border: 1px solid #b2b2b2;
    width: 100%;
    height: 90px;
    border-radius: 4px;
    padding: 5px;
  }

  @media all and (max-width: 600px) {
    width: 70%;
  }
`;

function App() {
  const [Modal, setModal] = useState(false);
  const [currentImageIndex, setCurrentImage] = useState(0);
  const openModal = index => {
    setModal(true);
    setCurrentImage(index);
  };
  const close = () => setModal(false);
  const next = () => {
    currentImageIndex + 1 < images.length &&
      setCurrentImage(currentImageIndex + 1);
  };
  const before = () => {
    currentImageIndex > 0 && setCurrentImage(currentImageIndex - 1);
  };

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <GlobalStyles />
        <main>
          <Section>
            <header>
              <Img src={HEADPHOTO} alt="house" />
            </header>
            <Article>
              <H1>A louer à Thoiry, Pays de Gex (France)</H1>
              <p>
                Maison de caractère de 1850 (220m2) entiérement rénovée.
                Magnifique jardin (1200m2) clôturé, ensoleillé et calme, belle
                terrasse avec vue sur le Mont-Blanc et terasse couverte dans la
                grange attaché à la maison. Grand salon/salle à manger (45 m2),
                cuisine equipée, 5 chambres, 2 salles de bains, cave voutée,
                garage, dépandances, chauffage à gaz. Proche du bus Y, grand
                centre commercial, école primaire au village.
              </p>
              <H1 as="h1">Prix</H1>
              <p>CHF 3400 (EUR 3000) par mois, disponible dès 16 juin 2019.</p>
              <H1>Contact</H1>
              <p>Henning Wuester, hwuester@yahoo.de, +491754789297</p>
            </Article>
          </Section>
          <ImgSection>
            {images.map((img, index) => {
              return (
                <ImgPreview
                  onClick={() => {
                    openModal(index);
                  }}
                  index={index}
                  src={img}
                />
              );
            })}
          </ImgSection>
          <FormSection>
            <H1>Contactez nous:</H1>
            <FormArticle>
              <form name="contact" method="post">
                <input type="hidden" name="form-name" value="contact" />
                <p>
                  <label for="name">
                    Nom: <input required type="text" name="name" />
                  </label>
                </p>
                <p>
                  <label>
                    Email: <input required type="email" name="email" />
                  </label>
                </p>
                <p>
                  <label>
                    Message: <textarea required name="message" />
                  </label>
                </p>
                <p>
                  <button type="submit">envoyer</button>
                </p>
              </form>
            </FormArticle>
          </FormSection>
        </main>
        {Modal && (
          <ImageModal
            next={next}
            before={before}
            close={close}
            src={images[currentImageIndex]}
          />
        )}
      </Layout>
    </ThemeProvider>
  );
}

export default App;
