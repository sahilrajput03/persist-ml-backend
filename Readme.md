Command Used: `./node_modules/.bin/web-push generate-vapid-keys`

=======================================

Public Key:
BFugdzk0UG7lreiOS3NFxUTmlDJbfBMVmP1awqUO2bxKSeG9Svj2n-yUQv1PUOEdtGiSDQ2cHJLunHts0_zNB5I

Private Key:
ebJBIsTcClTBumIXHqZ9b-BS-RnU9Gf5iuBpGv42Vnw

=======================================

## Why i can't access `navigator.serviceWorker` on 192.168.18.3 but I can acees it via localhost though

Refer this amazing answer by this guy [here](https://stackoverflow.com/a/52300901/10012446).

You can check simply via executing: `window.isSecureContext` in browser console.

**-> Enable `isSecureContetx` by hack:**

Go to `chrome://flags` and find the option: "Insecure origins treated as secure" and added: `http://192.168.18.3:3000` and pressed enter key and click on Relaunch chrome to activate the changes. ** This works on mobile chrome browse as well.**

```txt
## Generating a self signed ssl certificate though it its of no use as suggest in the comments in [this question](https://stackoverflow.com/questions/11744975/enabling-https-on-express-js)

Though for learning curiosity here's the good process:

`openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -sha256 -days 365`

Use passphrase as atleast 4 characters as it'll warn about it as well. And not it down as well coz you need that to decrypt the certificate later in the node server as well while passing in the passphrase key in the credentials options. [Reference](https://stackoverflow.com/a/69458434/10012446)
```
