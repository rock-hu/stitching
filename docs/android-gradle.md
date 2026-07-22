# android-gradle    


`android/gradle/wrapper/gradle-wrapper.properties`

```diff
-distributionUrl=https\://services.gradle.org/distributions/gradle-9.3.1-bin.zip
+distributionUrl=https:\//mirrors.cloud.tencent.com/gradle/gradle-9.3.1-bin.zip
```


```bash
gradle dependencyCheckAnalyze --info
```




```
rock@rock-EQ:~/workspace/github/stitching$ npm run build:android --stacktrace
npm warn Unknown cli config "--stacktrace". This will stop working in the next major version of npm.

> stitching@0.0.1 build:android
> cd android && ./gradlew assembleRelease

> Task :react-native-masked-view_masked-view:compileReleaseJavaWithJavac FAILED

> Task :app:createBundleReleaseJsAndAssets

                        ▒▒▓▓▓▓▒▒
                     ▒▓▓▓▒▒░░▒▒▓▓▓▒
                  ▒▓▓▓▓░░░▒▒▒▒░░░▓▓▓▓▒
                 ▓▓▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▓▓
                 ▓▓░░░░░▒▓▓▓▓▓▓▒░░░░░▓▓
                 ▓▓░░▓▓▒░░░▒▒░░░▒▓▒░░▓▓
                 ▓▓░░▓▓▓▓▓▒▒▒▒▓▓▓▓▒░░▓▓
                 ▓▓░░▓▓▓▓▓▓▓▓▓▓▓▓▓▒░░▓▓
                 ▓▓▒░░▒▒▓▓▓▓▓▓▓▓▒░░░▒▓▓
                  ▒▓▓▓▒░░░▒▓▓▒░░░▒▓▓▓▒
                     ▒▓▓▓▒░░░░▒▓▓▓▒
                        ▒▒▓▓▓▓▒▒


 WARN  the transform cache was reset.
                Welcome to Metro v0.84.4
              Fast - Scalable - Integrated


LOG:Writing bundle output to: /home/rock/workspace/github/stitching/android/app/build/generated/assets/react/release/index.android.bundle
LOG:Writing sourcemap output to: /home/rock/workspace/github/stitching/android/app/build/intermediates/sourcemaps/react/release/index.android.bundle.packager.map
LOG:Done writing bundle output
LOG:Done writing sourcemap output
Copying 2 asset files
Done copying assets
```

```
FAILURE: Build failed with an exception.

* What went wrong:
Execution failed for task ':react-native-masked-view_masked-view:compileReleaseJavaWithJavac'.
> Could not resolve all files for configuration ':react-native-masked-view_masked-view:androidJdkImage'.
   > Failed to transform core-for-system-modules.jar to match attributes {artifactType=_internal_android_jdk_image, org.gradle.libraryelements=jar, org.gradle.usage=java-runtime}.
      > Execution failed for JdkImageTransform: /home/rock/Android/Sdk/platforms/android-36/core-for-system-modules.jar.
         > jlink executable /home/rock/.vscode/extensions/redhat.java-1.55.0-linux-x64/jre/21.0.11-linux-x86_64/bin/jlink does not exist.
```


```bash
s -l /home/rock/.vscode/extensions/redhat.java-1.55.0-linux-x64/jre/21.0.11-linux-x86_64/bin
```

```
- jar
- jarsigner
- java
- javac
- javadoc
- javap
- jcmd
- jconsole
- jdb
- jdeprscan
- jdeps
- jfr
- jhsdb
- jinfo
- jmap
- jps
- jrunscript
- jshell
- jstack
- jstat
- jstatd
- jwebserver
- keytool
- rmiregistry
- serialver
```

```bash
sdk install java 21.0.11-ms
```

```
Installing: java 21.0.11-ms
Done installing!


Setting java 21.0.11-ms as default.
```


```
BUILD SUCCESSFUL in 7m 6s
420 actionable tasks: 405 executed, 15 up-to-date
Consider enabling configuration cache to speed up this build: https://docs.gradle.org/9.3.1/userguide/configuration_cache_enabling.html
```