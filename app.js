/** @type {{ id: string; title: string; body: string; snippets?: { label: string; text: string }[]; links?: { label?: string; url: string }[] }[]} */
const SECTIONS = [
  {
    id: "ian-bangers",
    title: "Ian — bangers (Elon interactions)",
    body: `Catchup is mega viral. Check out these bangers that we helped Ian get Elon Musk interactions wit

https://x.com/ianmiles/status/2046605710168060125
https://x.com/ianmiles/status/2046526565220032758
https://x.com/ianmiles/status/2046608174514602360
https://x.com/ianmiles/status/2046492221927539183`,
    links: [
      { url: "https://x.com/ianmiles/status/2046605710168060125" },
      { url: "https://x.com/ianmiles/status/2046526565220032758" },
      { url: "https://x.com/ianmiles/status/2046608174514602360" },
      { url: "https://x.com/ianmiles/status/2046492221927539183" },
    ],
  },
  {
    id: "announcements",
    title: "Official announcements",
    body: `We're rolling out official announcements for Catchup

https://x.com/sumfattytuna/status/2046436870079250590

https://x.com/CatchUpFeed/status/2046440294724350454

https://x.com/ianmiles/status/2046300144652423363`,
    links: [
      { url: "https://x.com/sumfattytuna/status/2046436870079250590" },
      { url: "https://x.com/CatchUpFeed/status/2046440294724350454" },
      { url: "https://x.com/ianmiles/status/2046300144652423363" },
    ],
  },
  {
    id: "fibonacki",
    title: "Unc dev / $catchup",
    body: `The unc dev loves us and he bought $catchup

https://x.com/fibonacki/status/2046612899607564594`,
    links: [{ url: "https://x.com/fibonacki/status/2046612899607564594" }],
  },
  {
    id: "elon-qt",
    title: "Elon quote tweet",
    body: `Elon is quote tweeting our posts

https://x.com/elonmusk/status/2046599400458178670`,
    links: [{ url: "https://x.com/elonmusk/status/2046599400458178670" }],
  },
  {
    id: "mega-bundle",
    title: "Mega bundle (one paste)",
    body: `Catchup is mega viral. Check out these bangers that we helped Ian get Elon Musk interactions wit

https://x.com/ianmiles/status/2046605710168060125
https://x.com/ianmiles/status/2046526565220032758
https://x.com/ianmiles/status/2046608174514602360
https://x.com/ianmiles/status/2046492221927539183
https://x.com/elonmusk/status/2046599400458178670
https://x.com/sumfattytuna/status/2046436870079250590
https://x.com/fibonacki/status/2046612899607564594
https://x.com/CatchUpFeed/status/2046440294724350454
https://x.com/ianmiles/status/2046300144652423363`,
    links: [
      { url: "https://x.com/ianmiles/status/2046605710168060125" },
      { url: "https://x.com/ianmiles/status/2046526565220032758" },
      { url: "https://x.com/ianmiles/status/2046608174514602360" },
      { url: "https://x.com/ianmiles/status/2046492221927539183" },
      { url: "https://x.com/elonmusk/status/2046599400458178670" },
      { url: "https://x.com/sumfattytuna/status/2046436870079250590" },
      { url: "https://x.com/fibonacki/status/2046612899607564594" },
      { url: "https://x.com/CatchUpFeed/status/2046440294724350454" },
      { url: "https://x.com/ianmiles/status/2046300144652423363" },
    ],
  },
  {
    id: "catchup-elevator",
    title: "$CATCHUP — elevator + links",
    body: `$CATCHUP — Stop doomscrolling, start catching up

🌐 Website: https://catchupfeed.io/
🐦 X: https://x.com/catchupfeed
💬 Telegram: https://t.me/catchupfeedio
👥 Community: https://x.com/i/communities/2026920639240761361

📜 Contract Address: C56AiUEwRWowWFWY1xg1guy6tdJZce5mr5bD4iR6pump

Share easily using this very shortcut: https://www.icloud.com/shortcuts/b60847b0f1d9498b9567986fb71e7271`,
    snippets: [
      {
        label: "Copy contract only",
        text: "C56AiUEwRWowWFWY1xg1guy6tdJZce5mr5bD4iR6pump",
      },
    ],
    links: [
      { label: "Website", url: "https://catchupfeed.io/" },
      { label: "X", url: "https://x.com/catchupfeed" },
      { label: "Telegram", url: "https://t.me/catchupfeedio" },
      { label: "Community", url: "https://x.com/i/communities/2026920639240761361" },
      {
        label: "iCloud Shortcut",
        url: "https://www.icloud.com/shortcuts/b60847b0f1d9498b9567986fb71e7271",
      },
    ],
  },
  {
    id: "wmnst",
    title: "$wMNST — /uncmode",
    body: `$wMNST links - /uncmode

https://t.me/+2nKIkVXdqUcwZmRh

https://ig.me/j/Abaedw7fQt_V-1Ov/

https://x.com/i/communities/1991644404160082370

Folow @wMNST0 on all platforms!
https://x.com/wMNST0
https://instagram.com/wMNST0
https://tiktok.com/wMNST0

Check out $wMNST on fomo and use ref code sumfattytuna for future rewards:
https://fomo.family/coin?address=wMNSTc9xcRegGgG8RBjz8dUefYrmtSyUCyAdoy1WexR&chainId=1399811149`,
    links: [
      { label: "Telegram", url: "https://t.me/+2nKIkVXdqUcwZmRh" },
      { label: "Instagram join", url: "https://ig.me/j/Abaedw7fQt_V-1Ov/" },
      { label: "X Community", url: "https://x.com/i/communities/1991644404160082370" },
      { label: "X @wMNST0", url: "https://x.com/wMNST0" },
      { label: "IG @wMNST0", url: "https://instagram.com/wMNST0" },
      { label: "TikTok @wMNST0", url: "https://tiktok.com/wMNST0" },
      {
        label: "Fomo (ref sumfattytuna)",
        url: "https://fomo.family/coin?address=wMNSTc9xcRegGgG8RBjz8dUefYrmtSyUCyAdoy1WexR&chainId=1399811149",
      },
    ],
  },
];

function toast(msg) {
  const el = document.getElementById("toast");
  if (!el) return;
  el.textContent = msg;
  el.classList.add("show");
  clearTimeout(toast._t);
  toast._t = setTimeout(() => el.classList.remove("show"), 1600);
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    toast("Copied");
    return;
  } catch {
    /* fall through */
  }
  const ta = document.createElement("textarea");
  ta.value = text;
  ta.setAttribute("readonly", "");
  ta.style.position = "fixed";
  ta.style.left = "-9999px";
  document.body.appendChild(ta);
  ta.select();
  try {
    document.execCommand("copy");
    toast("Copied");
  } catch {
    toast("Copy failed — select text manually");
  }
  document.body.removeChild(ta);
}

function shortUrl(u) {
  try {
    const p = new URL(u);
    return (p.hostname + p.pathname).replace(/^www\./, "");
  } catch {
    return u.slice(0, 48);
  }
}

function render() {
  const main = document.querySelector("main");
  if (!main) return;
  main.innerHTML = "";

  for (const sec of SECTIONS) {
    const card = document.createElement("section");
    card.className = "card";
    card.dataset.id = sec.id;

    const h2 = document.createElement("h2");
    h2.textContent = sec.title;
    card.appendChild(h2);

    const actions = document.createElement("div");
    actions.className = "actions";

    const copyAll = document.createElement("button");
    copyAll.type = "button";
    copyAll.textContent = "Copy message";
    copyAll.addEventListener("click", () => copyText(sec.body.trim()));
    actions.appendChild(copyAll);

    if (sec.snippets && sec.snippets.length) {
      for (const s of sec.snippets) {
        const b = document.createElement("button");
        b.type = "button";
        b.className = "secondary";
        b.textContent = s.label;
        b.addEventListener("click", () => copyText(s.text));
        actions.appendChild(b);
      }
    }

    card.appendChild(actions);

    const pre = document.createElement("pre");
    pre.className = "pre";
    pre.textContent = sec.body.trim();
    card.appendChild(pre);

    if (sec.links && sec.links.length) {
      const wrap = document.createElement("div");
      wrap.className = "links";
      for (const L of sec.links) {
        const row = document.createElement("div");
        row.className = "link-row";

        const a = document.createElement("a");
        a.href = L.url;
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        a.textContent = L.label || shortUrl(L.url);

        const b = document.createElement("button");
        b.type = "button";
        b.className = "secondary";
        b.textContent = "Copy URL";
        b.addEventListener("click", () => copyText(L.url));

        row.appendChild(a);
        row.appendChild(b);
        wrap.appendChild(row);
      }
      card.appendChild(wrap);
    }

    main.appendChild(card);
  }
}

function registerSw() {
  if (!("serviceWorker" in navigator)) return;
  navigator.serviceWorker.register("./sw.js").catch(() => {
    /* offline-first optional */
  });
}

render();
registerSw();
