## Generate RS256 Private/Public Key Pair

```bash
ssh-keygen -t rsa -b 4096 -f private.key
# Don't add passphrase
openssl rsa -in private.key -pubout -outform PEM -out public.key
cat private.key
cat public.key
```
