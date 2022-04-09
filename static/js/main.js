window.onload = async () => {
  const $ = (s) => document.querySelector(s);
  const dek = $("#dek");
  const list = [
    "n engineering fellow at The Texas Tribune.",
    " co-managing online editor at The Michigan Daily.",
    " computer science student at the University of Michigan.",
  ];

  const delay = (ms) =>
    new Promise((res) => {
      setTimeout(res, ms);
    });

  async function* generateList() {
    let i = 0;
    while (true) {
      yield list[i];
      await delay(700);
      i++;
      if (i === list.length) {
        i = 0;
      }
    }
  }

  await delay(2500);
  dek.style.visibility = "visible";

  for await (const l of " am a") {
    dek.textContent += l;
    await delay(95);
  }

  const typer = document.createElement("span");
  dek.appendChild(typer);

  for await (const c of generateList()) {

    for await (const l of c) {
      typer.textContent += l;
      await delay(95);
    }

    await delay(700);

    for await (const l of c) {
      typer.textContent = typer.textContent.slice(0, -1);
      await delay(80);
    }
  }
};
