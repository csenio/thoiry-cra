import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/globalStyles";
import theme from "./styles/theme";
import "./fonts/Inter (web)/inter.css";
import HEADPHOTO from "./images/landing.JPG";
import styled from "styled-components";
import ImageModal from "./ImageModal";
import messages from "./messages";
import useLang from "./useLang";

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(
  require.context("./images", false, /\.(png|jpe?g|svg)$/i)
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
  background: #66c9ff;
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

  & button {
    font-family: inherit;
    font-weight: 500;
    border: none;
    background: #0046af;
    color: white;
    padding: 10px;
    border-radius: 4px;
    margin: 3px;
    cursor: pointer;
    &:hover {
      background: #1d6bc4;
    }
  }

  @media all and (max-width: 600px) {
    width: 70%;
  }
`;

const Buttons = styled.div`
  position: absolute;
  top: 30px;
  right: 30px;
  cursor: pointer;
  button {
    padding: 5px;
    font-family: inherit;
    font-weight: 500;
    background: ${p => p.theme.colors.grey};
    border: none;
    outline: none;
    cursor: pointer;
    margin: 2px;
    &:active {
      background: #bcbcbc;
    }
  }
`;

function App() {
  const [Modal, setModal] = useState(false);
  const [currentImageIndex, setCurrentImage] = useState(0);
  const { setLang, lang } = useLang();
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

  const { title, content, price, contact, form } = messages[lang];

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <GlobalStyles />
        <main>
          <Buttons>
            <button onClick={() => setLang("fr")}>fr</button>
            <button onClick={() => setLang("en")}>en</button>
          </Buttons>
          <Section>
            <header>
              <Img src={HEADPHOTO} alt="house" />
            </header>
            <Article>
              <H1>{title}</H1>
              <p>{content}</p>
              <H1>{contact.title}</H1>
              <p>{contact.content}</p>
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
            <H1>{form.title}</H1>
            <FormArticle>
              <form name="contact" method="post">
                <input type="hidden" name="form-name" value="contact" />
                <p>
                  <label for="name">
                    {form.name} <input required type="text" name="name" />
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
                  <button type="submit">{form.submit}</button>
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
