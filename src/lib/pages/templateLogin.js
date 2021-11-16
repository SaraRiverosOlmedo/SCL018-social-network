export const drawLogin = () => {
  const templatePage = `
    <section>
      <section class = "containerWelcome">
        <h1>¡¡BIENVENIDOS A ESTUDIANDO!!</h1>
        <h2>¿Qué es EstudiAndo?</h2>
        <p>Es una App Web creada para que estudiantes compartan material educativo, en la cual encontrarán
        información, recursos, links y temas relacionados con la PTU, orientación vocacional y emocional,
        sobre el espectro de carreras profesional, etc.
        </p>
      </section>
      <section class = "containerLogin">
        <img src="" alt="" id="">
        <input type="text" id="loginMail">
        <input type="text" id="loginPassword">
        <button id="loginButton">Ingresa</button>
        <p>O</p>
        <img src="img/logo-google.png" alt="LogoGoogle" id="logoGoogle">
        <p>¿No tienes cuenta?</p>
        <a href="lib/pages/templateSignUp.js">Registrate aqui</a>
      </section>
    </section>
  `;
  return templatePage;
};
