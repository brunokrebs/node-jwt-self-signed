## Using This Repo

```bash
npm i
npm run dev

# copy the token generated in the logs to the JWT variable and...

curl -H 'Authorization: Bearer '$JWT 0:3000/protected
```

## Generate RS256 Private/Public Key Pair

```bash
ssh-keygen -t rsa -b 4096 -f private.key
# Don't add passphrase
openssl rsa -in private.key -pubout -outform PEM -out public.key
cat private.key
cat public.key
```
> Credits: https://gist.github.com/ygotthilf/baa58da5c3dd1f69fae9