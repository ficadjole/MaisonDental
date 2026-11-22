# Maison Dental & Aesthetic — sajt

Statički sajt ordinacije [maisondental.rs](https://maisondental.rs). Jedanaest stranica čistog HTML/CSS/JS — bez build koraka i bez zavisnosti.

---

## Struktura foldera

```
index.html                  # naslovna strana
o-nama.html                 # o ordinaciji
galerija.html               # foto galerija
cenovnik.html               # cenovnik usluga
kontakt.html                # kontakt i lokacija
politika-privatnosti.html   # pravna strana
uslovi-koriscenja.html      # pravna strana
usluge/
  invisalign.html           # Invisalign usluga
  stomatologija.html        # stomatološke usluge
  anti-ageing.html          # anti-ageing usluge
css/
  style.css                 # jedinstven stylesheet
js/
  main.js                   # UI logika (meni, scroll, galerija...)
  i18n.js                   # srpski i engleski rečnik prevoda
images/                     # sve slike sajta
  galerija/                 # slike za foto galeriju
  sertifikati/              # sertifikati i logoi partnera
favicon.svg                 # favicon
robots.txt                  # robots direktivne
sitemap.xml                 # mapa sajta za pretraživače
_headers                    # Netlify HTTP hederi
_redirects                  # Netlify preusmeravanja (301/302)
netlify.toml                # Netlify konfiguracija
```

---

## Lokalno pokretanje

```bash
python3 -m http.server 8000
```

Pa otvori `http://localhost:8000` u pregledaču.

Radi i duplim klikom na `index.html` direktno — sve putanje su relativne.

---

## Podizanje na GitHub

```bash
git init
git add .
git commit -m "Inicijalni commit"
git branch -M main
git remote add origin https://github.com/<nalog>/<repo>.git
git push -u origin main
```

---

## Povezivanje sa Netlify-om

1. Prijavi se na [netlify.com](https://netlify.com)
2. **Add new site → Import an existing project → GitHub**
3. Odaberi repo
4. Build command: ostaviti **prazno**
5. Publish directory: `.`
6. Klikni Deploy

Svaki `git push` na granu `main` automatski objavljuje novu verziju sajta.

---

## Domen

U Netlify kontrolnoj tabli, pod **Domain settings**, dodaj `maisondental.rs`. DNS zapisi (A ili CNAME) podešavaju se kod registrara domena.

---

## Izmena sadržaja

| Strana | Fajl |
|---|---|
| Naslovna | `index.html` |
| O nama | `o-nama.html` |
| Galerija | `galerija.html` |
| Cenovnik | `cenovnik.html` |
| Kontakt | `kontakt.html` |
| Invisalign | `usluge/invisalign.html` |
| Stomatologija | `usluge/stomatologija.html` |
| Anti-ageing | `usluge/anti-ageing.html` |
| Izgled | `css/style.css` |

**Važno — dvojezičnost:** `js/i18n.js` nosi srpski i engleski rečnik. Tekstovi u HTML-u i u `i18n.js` moraju biti usklađeni. Svaka izmena vidljivog teksta u HTML-u mora da se preslika i u `i18n.js`, inače se pri prebacivanju jezika vrati stara formulacija. Tekstovi se vezuju za rečnik putem `data-i18n` atributa u HTML-u.

---

## Pre puštanja u rad — otvoreno

**`_redirects` je prazan** (samo zakomentarisani primeri). Pre prebacivanja DNS-a treba uporediti stare URL-ove iz Google Search Console sa novim stranama i svaki nestali URL preusmeriti sa `301`. Bez toga se gube postojeće pozicije u pretrazi.

**Zakazivanje ide na `booking.dentify.io`** — to je spoljni sistem; kroz sajt postoji 25 linkova ka Dentify bokingu. Izgled te strane usklađuje Dentify tim.

---

## Sitno, kad bude vremena

- U `js/main.js` (linije ~96–97) i u `css/style.css` ostao je kod za kontakt formu koja je uklonjena sa `kontakt.html`. Ne smeta ničemu, ali je mrtav kod.
- Četiri slike se nigde ne koriste: `favicon-512.png`, `images/maisondental-logo-primary.svg`, `images/sertifikati/invisalign-provider-charcoal.png`, `images/sertifikati/invisalign-provider.png` (ukupno ~114 KB).

---

Izrada: Rondo — rondo.rs
