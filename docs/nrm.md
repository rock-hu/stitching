# nrm   


```bash
npm install -g nrm
```


```bash
nrm ls
```

```
* npm ---------- https://registry.npmjs.org/
  yarn --------- https://registry.yarnpkg.com/
  tencent ------ https://mirrors.tencent.com/npm/
  cnpm --------- https://r.cnpmjs.org/
  taobao ------- https://registry.npmmirror.com/
  npmMirror ---- https://skimdb.npmjs.com/registry/
  huawei ------- https://repo.huaweicloud.com/repository/npm/
```

```bash
nrm use huawei
```

```
 SUCCESS  The registry has been changed to 'huawei'.
```

```bash
nrm test 
```

```
  npm ---------- 2949 ms
  yarn --------- 1621 ms
  tencent ------ 1631 ms
  cnpm --------- 1451 ms
  taobao ------- 115 ms
  npmMirror ---- timeout (Fetch timeout over 5000 ms)
* huawei ------- 827 ms

```


```bash
nrm use taobao
```

```bash
npm config get registry
```