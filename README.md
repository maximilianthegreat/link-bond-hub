# Link.bond hub

Static PWA for fast copy-paste of Catchup / wMNST links and messages across devices.

## Live

- GitHub Pages: https://maximilianthegreat.github.io/link-bond-hub/
- Custom domain (pending DNS): https://link.bond

## Edit content

All copy blocks live in `app.js` in the `SECTIONS` array. Edit, commit, push — Pages redeploys automatically.

## Local dev

```bash
python3 -m http.server 8765
# open http://localhost:8765
```

## Roadmap

- [ ] Auth (login) + MongoDB-backed sections so copy is editable without redeploy
- [ ] Per-user link pages (web3 Linktree direction)
