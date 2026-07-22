# npm-dependencies  

## npm install --dry-run  


```bash
# Dry run to see what would be installed
npm install --dry-run
```


## npm info   

```bash
npm info @react-navigation/native
```

```
@react-navigation/native@7.3.13 | MIT | deps: 6 | versions: 369
React Native integration for React Navigation
https://reactnavigation.org

keywords: react-native, react-navigation, ios, android

dist
.tarball: https://registry.npmmirror.com/@react-navigation/native/-/native-7.3.13.tgz
.shasum: fef2868ff405cb9b6da1029b1c81e4f637fbd41f
.integrity: sha512-eiNUieNCJxCdHSVBUJWwoACspqlUGULHj36Z8CQRlymwPxOD8fXA23vXAqdWJ6VT3MmVh7akLLPvs9aKMArgxg==
.unpackedSize: 290.4 kB

dependencies:
@react-navigation/core: ^7.21.10, escape-string-regexp: ^4.0.0, fast-deep-equal: ^3.1.3, nanoid: ^3.3.11, standard-navigation: ^0.0.8, use-latest-callback: ^0.2.4

maintainers:
- satya164 <satyajit.happy@gmail.com>
- ericvicenti <ericvicenti@gmail.com>
- brentvatne <brentvatne@gmail.com>
- osdnk <micosa97@gmail.com>
- kacperkapusciak <kapusciak.k@gmail.com>
- okwasniewski <oskar@okwasniewski.com>

dist-tags:
latest: 7.3.13
next: 8.0.0-alpha.39
5.x: 5.9.8
4.x: 3.8.4

published yesterday by satya164 <satyajit.happy@gmail.com>

```

### npm info peerDependencies

```bash
npm info @react-navigation/native peerDependencies
```

```
{ react: '>= 18.2.0', 'react-native': '*' }
```

### npm info dependencies

```bash
npm info @react-navigation/native dependencies
```

```json
{
  '@react-navigation/core': '^7.21.10',
  'escape-string-regexp': '^4.0.0',
  'fast-deep-equal': '^3.1.3',
  nanoid: '^3.3.11',
  'standard-navigation': '^0.0.8',
  'use-latest-callback': '^0.2.4'
}
```




## npm audit    
```bash
npm audit
```

```
# npm audit report
fast-xml-parser  <5.7.0
Severity: moderate
fast-xml-parser XMLBuilder: XML Comment and CDATA Injection via Unescaped Delimiters - https://github.com/advisories/GHSA-gh4j-gqv2-49f6
fix available via `npm audit fix --force`
Will install @react-native-community/cli@20.2.0, which is outside the stated dependency range
node_modules/fast-xml-parser
  @react-native-community/cli-config-android  <=20.1.1
  Depends on vulnerable versions of fast-xml-parser
  node_modules/@react-native-community/cli-config-android
    @react-native-community/cli-platform-android  15.1.1 - 20.1.1
    Depends on vulnerable versions of @react-native-community/cli-config-android
    node_modules/@react-native-community/cli-platform-android
      @react-native-community/cli-doctor  13.2.0 - 20.1.1
      Depends on vulnerable versions of @react-native-community/cli-platform-android
      Depends on vulnerable versions of @react-native-community/cli-platform-apple
      Depends on vulnerable versions of @react-native-community/cli-platform-ios
      node_modules/@react-native-community/cli-doctor
        @react-native-community/cli  13.2.0 - 20.1.1
        Depends on vulnerable versions of @react-native-community/cli-doctor
        node_modules/@react-native-community/cli
  @react-native-community/cli-platform-apple  <=20.1.1
  Depends on vulnerable versions of fast-xml-parser
  node_modules/@react-native-community/cli-platform-apple
    @react-native-community/cli-platform-ios  13.2.0 - 20.1.1
    Depends on vulnerable versions of @react-native-community/cli-platform-apple
    node_modules/@react-native-community/cli-platform-ios

7 moderate severity vulnerabilities
```

## npm ls --prod|dev

```bash
npm ls --prod
```

```
├── @react-native-masked-view/masked-view@0.3.2
├── @react-native/new-app-screen@0.86.0
├── @react-navigation/bottom-tabs@7.18.13
├── @react-navigation/devtools@7.1.10
├── @react-navigation/drawer@7.13.4
├── @react-navigation/elements@2.9.35
├── @react-navigation/material-top-tabs@7.6.12
├── @react-navigation/native-stack@7.18.5
├── @react-navigation/native@7.3.13
├── react-native-gesture-handler@3.1.0
├── react-native-reanimated@4.5.2
├── react-native-safe-area-context@5.8.0
├── react-native-screens@4.26.2
├── react-native-worklets@0.11.1
├── react-native@0.86.0
└── react@19.2.3
```


```bash
npm ls --dev
```

```
├── @babel/core@7.29.7
├── @babel/preset-env@7.29.7
├── @babel/runtime@7.29.7
├── @cyclonedx/cyclonedx-npm@6.0.0
├── @react-native-async-storage/async-storage@3.1.1
├── @react-native-community/cli-platform-android@20.1.0
├── @react-native-community/cli-platform-ios@20.1.0
├── @react-native-community/cli@20.1.0
├── @react-native-masked-view/masked-view@0.3.2
├── @react-native/babel-preset@0.86.0
├── @react-native/eslint-config@0.86.0
├── @react-native/metro-config@0.86.0
├── @react-native/new-app-screen@0.86.0
├── @react-native/typescript-config@0.86.0
├── @react-navigation/bottom-tabs@7.18.13
├── @react-navigation/devtools@7.1.10
├── @react-navigation/drawer@7.13.4
├── @react-navigation/elements@2.9.35
├── @react-navigation/material-top-tabs@7.6.12
├── @react-navigation/native-stack@7.18.5
├── @react-navigation/native@7.3.13
├── @types/jest@29.5.14
├── @types/react-test-renderer@19.1.0
├── @types/react@19.2.17
├── babel-loader@10.1.1
├── eslint@8.57.1
├── jest@29.7.0
├── prettier@2.8.8
├── react-native-gesture-handler@3.1.0
├── react-native-reanimated@4.5.3
├── react-native-safe-area-context@5.8.0
├── react-native-screens@4.26.2
├── react-native-worklets@0.11.1
├── react-native@0.86.0
├── react-test-renderer@19.2.3
├── react@19.2.3
├── terser-webpack-plugin@5.6.1
├── typescript@5.9.3
└── webpack@5.108.4
```


## npm outdated --prod|dev

```bash
npm outdated --prod
```

```
Package                                       Current  Wanted  Latest  Location                                                   Depended by
@babel/runtime                                 7.29.7  7.29.7   8.0.0  node_modules/@babel/runtime                                stitching
@react-native-community/cli                    20.1.0  20.1.0  20.2.0  node_modules/@react-native-community/cli                   stitching
@react-native-community/cli-platform-android   20.1.0  20.1.0  20.2.0  node_modules/@react-native-community/cli-platform-android  stitching
@react-native-community/cli-platform-ios       20.1.0  20.1.0  20.2.0  node_modules/@react-native-community/cli-platform-ios      stitching
react                                          19.2.3  19.2.3  19.2.8  node_modules/react                                         stitching
typescript                                      5.9.3   5.9.3   7.0.2  node_modules/typescript                                    stitching
```

```bash
npm outdated --dev
```


```
Package                                       Current   Wanted  Latest  Location                                                   Depended by
@babel/runtime                                 7.29.7   7.29.7   8.0.0  node_modules/@babel/runtime                                stitching
@react-native-community/cli                    20.1.0   20.1.0  20.2.0  node_modules/@react-native-community/cli                   stitching
@react-native-community/cli-platform-android   20.1.0   20.1.0  20.2.0  node_modules/@react-native-community/cli-platform-android  stitching
@react-native-community/cli-platform-ios       20.1.0   20.1.0  20.2.0  node_modules/@react-native-community/cli-platform-ios      stitching
@types/jest                                   29.5.14  29.5.14  30.0.0  node_modules/@types/jest                                   stitching
eslint                                         8.57.1   8.57.1  10.7.0  node_modules/eslint                                        stitching
jest                                           29.7.0   29.7.0  30.4.2  node_modules/jest                                          stitching
prettier                                        2.8.8    2.8.8   3.9.6  node_modules/prettier                                      stitching
react                                          19.2.3   19.2.3  19.2.8  node_modules/react                                         stitching
react-test-renderer                            19.2.3   19.2.3  19.2.8  node_modules/react-test-renderer                           stitching
typescript                                      5.9.3    5.9.3   7.0.2  node_modules/typescript                                    stitching

```


## npm list 

```
├── @babel/core@7.29.7
├── @babel/preset-env@7.29.7
├── @babel/runtime@7.29.7
├── @cyclonedx/cyclonedx-npm@6.0.0
├── @react-native-async-storage/async-storage@3.1.1
├── @react-native-community/cli-platform-android@20.1.0
├── @react-native-community/cli-platform-ios@20.1.0
├── @react-native-community/cli@20.1.0
├── @react-native-masked-view/masked-view@0.3.2
├── @react-native/babel-preset@0.86.0
├── @react-native/eslint-config@0.86.0
├── @react-native/metro-config@0.86.0
├── @react-native/new-app-screen@0.86.0
├── @react-native/typescript-config@0.86.0
├── @react-navigation/bottom-tabs@7.18.13
├── @react-navigation/devtools@7.1.10
├── @react-navigation/drawer@7.13.4
├── @react-navigation/elements@2.9.35
├── @react-navigation/material-top-tabs@7.6.12
├── @react-navigation/native-stack@7.18.5
├── @react-navigation/native@7.3.13
├── @types/jest@29.5.14
├── @types/react-test-renderer@19.1.0
├── @types/react@19.2.17
├── babel-loader@10.1.1
├── eslint@8.57.1
├── jest@29.7.0
├── prettier@2.8.8
├── react-native-gesture-handler@3.1.0
├── react-native-reanimated@4.5.3
├── react-native-safe-area-context@5.8.0
├── react-native-screens@4.26.2
├── react-native-worklets@0.11.1
├── react-native@0.86.0
├── react-test-renderer@19.2.3
├── react@19.2.3
├── terser-webpack-plugin@5.6.1
├── typescript@5.9.3
└── webpack@5.108.4
```



## npm why  


```bash
npm why @babel/core
```


## npm list react 

```
├─┬ @react-native-async-storage/async-storage@3.1.1
│ └── react@19.2.3 deduped
├─┬ @react-native-masked-view/masked-view@0.3.2
│ └── react@19.2.3 deduped
├─┬ @react-native/new-app-screen@0.86.0
│ └── react@19.2.3 deduped
├─┬ @react-navigation/bottom-tabs@7.18.13
│ └── react@19.2.3 deduped
├─┬ @react-navigation/devtools@7.1.10
│ └── react@19.2.3 deduped
├─┬ @react-navigation/drawer@7.13.4
│ ├─┬ react-native-drawer-layout@4.2.9
│ │ └── react@19.2.3 deduped
│ ├── react@19.2.3 deduped
│ └─┬ use-latest-callback@0.2.6
│   └── react@19.2.3 deduped
├─┬ @react-navigation/elements@2.9.35
│ ├── react@19.2.3 deduped
│ └─┬ use-sync-external-store@1.6.0
│   └── react@19.2.3 deduped
├─┬ @react-navigation/material-top-tabs@7.6.12
│ ├─┬ react-native-pager-view@8.0.4
│ │ └── react@19.2.3 deduped
│ ├─┬ react-native-tab-view@4.3.2
│ │ └── react@19.2.3 deduped
│ └── react@19.2.3 deduped
├─┬ @react-navigation/native-stack@7.18.5
│ └── react@19.2.3 deduped
├─┬ @react-navigation/native@7.3.13
│ ├─┬ @react-navigation/core@7.21.10
│ │ └── react@19.2.3 deduped
│ ├── react@19.2.3 deduped
│ └─┬ standard-navigation@0.0.8
│   └── react@19.2.3 deduped
├─┬ react-native-gesture-handler@3.1.0
│ └── react@19.2.3 deduped
├─┬ react-native-reanimated@4.5.3
│ ├─┬ react-native-is-edge-to-edge@1.3.1
│ │ └── react@19.2.3 deduped
│ └── react@19.2.3 deduped
├─┬ react-native-safe-area-context@5.8.0
│ └── react@19.2.3 deduped
├─┬ react-native-screens@4.26.2
│ ├─┬ react-freeze@1.0.4
│ │ └── react@19.2.3 deduped
│ └── react@19.2.3 deduped
├─┬ react-native-worklets@0.11.1
│ └── react@19.2.3 deduped
├─┬ react-native@0.86.0
│ ├─┬ @react-native/virtualized-lists@0.86.0
│ │ └── react@19.2.3 deduped
│ └── react@19.2.3 deduped
├─┬ react-test-renderer@19.2.3
│ └── react@19.2.3 deduped
└── react@19.2.3
```