## Prerekvizity

**Docker Desktop**
https://www.docker.com/products/docker-desktop/

**Git**
https://git-scm.com/downloads

**Node.js (není podmínkou)**
https://nodejs.org/en/download

## Zadání

Repozitář obsahuje jednoduchou backend aplikaci v Node.js, která zaznamenává přístupy a vypisuje jejich historii. Celou aplikaci je možné spustit přes Docker Compose pomocí následujícího příkazu:

```bash
docker compose run --build --rm --service-ports app
```

Případně, pokud máte nainstalovaný Node.js:

```bash
npm run start:docker
```

Po nastartování je aplikace dostupná skrze webový prohlížeč na adrese http://localhost:3000.

Součástí aplikace je zároveň jednoduchý test, který však v současné chvíli selhává. Test je možné spustit pomocí následujícího příkazu:

```bash
docker compose run --build --rm app npm run test
```

V případě nainstalovaného Node.js stačí pouze:

```bash
npm run test:docker
```

Vaším úkolem je následující:

- [ ] Vyklonovat si tento repozitář přes HTTPS
- [ ] Spustit aplikaci a ověřit funkčnost skrze webový prohlížeč
- [ ] Spustit test a zjistit, proč selhává
- [ ] Opravit implementaci serveru tak, aby vyhovovala testu
- [ ] Zacommitovat provedené změny do Gitu
- [ ] Pushnout provedené změny zpět do GitHubu, a to do vlastní větve

Užitečné Git příkazy:

```bash
git clone <url repozitáře>

git add .

git commit -m "<commit message>"

git push origin main:<název větve>
```
