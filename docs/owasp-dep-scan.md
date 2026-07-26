# owasp-dep-scan    

## install  

```bash
npm install -g @cyclonedx/cdxgen
```


```bash
depscan --src $PWD --reports-dir $PWD/reports
```


```
[11:57:42] WARNING  The selected vulnerability database is large (~42.36 GiB uncompressed) for a source-only scan. For faster downloads, consider an app-only image: `depscan-vdb download --scope app`.
```


```
depscan-vdb download --scope app
```