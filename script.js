(() => {
  const formEl = document.getElementById("e2e");
  formEl.addEventListener("submit", async e => {
    e.preventDefault();
    text = e.target.elements["inputText"].value;
    const encoder = new TextEncoder();
    const data = encoder.encode(text);
    const hashBuffer = await crypto.subtle.digest("SHA-1", data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray
      .map(b => b.toString(16).padStart(2, "0"))
      .join("");
    text = e.target.elements["inputText"].value = hashHex;

    console.log(hashHex);
  });
})();
