document.addEventListener("DOMContentLoaded", () => {
  console.log("DevCode Demos listo.");

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const service = document.getElementById("service");
  const message = document.getElementById("message");
  const whatsappBtn = document.getElementById("whatsappBtn");
  const emailBtn = document.getElementById("emailBtn");

  function buildText() {
    const sName = name?.value?.trim() || "";
    const sEmail = email?.value?.trim() || "";
    const sService = service?.value || "web";
    const sMessage = message?.value?.trim() || "";
    const lines = [
      `Hola, soy ${sName}.`,
      `Me interesa ${sService === "web" ? "una Web" : "un CV Online"}.`,
      sMessage && `Detalle: ${sMessage}`,
      sEmail && `Email: ${sEmail}`,
    ].filter(Boolean);
    return encodeURIComponent(lines.join("\n"));
  }

  whatsappBtn?.addEventListener("click", () => {
    const text = buildText();
    const url = `https://wa.me/?text=${text}`;
    window.open(url, "_blank");
  });

  emailBtn?.addEventListener("click", () => {
    const text = decodeURIComponent(buildText());
    const subject = encodeURIComponent("Solicitud DevCode");
    const body = encodeURIComponent(text);
    const url = `mailto:?subject=${subject}&body=${body}`;
    window.location.href = url;
  });
});