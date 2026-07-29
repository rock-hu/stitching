# run-android   


## npx react-native run-android --help  

```

Usage: react-native run-android [options]

builds your app and starts it on a connected Android emulator or device

Options:
  --verbose                 Increase logging verbosity
  --mode <string>           Specify your app's build variant
  --tasks <list>            Run custom Gradle tasks. By default it's "assembleDebug". Will override passed mode and variant arguments.
  --active-arch-only        Build native libraries only for the current device architecture for debug builds. (default: false)
  --extra-params <string>   Custom params passed to gradle build command
  -i --interactive          Explicitly select build type and flavour to use before running a build
  --no-packager             Do not launch packager while running the app
  --port <number>            (default: 8081)
  --terminal <string>       Launches the Metro Bundler in a new window using the specified terminal path. (default: "xterm-256color")
  --appId <string>          Specify an applicationId to launch after build. If not specified, `package` from AndroidManifest.xml will be used. (default: "")
  --appIdSuffix <string>    Specify an applicationIdSuffix to launch after build. (default: "")
  --main-activity <string>  Name of the activity to start
  --device <string>         Explicitly set the device to use by name. The value is not required if you have a single device connected.
  --deviceId <string>       **DEPRECATED** Builds your app and starts it on a specific device/simulator with the given device id (listed by running "adb devices" on the command line).
  --list-devices            Lists all available Android devices and simulators and let you choose one to run the app (default: false)
  --binary-path <string>    Path relative to project root where pre-built .apk binary lives.
  --user <number>           Id of the User Profile you want to install the app on.
  -h, --help                display help for command

```


```bash
npx react-native doctor
```


```
⠸ Running diagnostics.../bin/sh: 1: adb: not found
Common
 ✓ Node.js - Required to execute JavaScript code
 ✓ npm - Required to install NPM dependencies
 ✓ Metro - Required for bundling the JavaScript code

Android
 ✖ Adb - No devices and/or emulators connected. Please create emulator with Android Studio or connect Android device.
 ✖ JDK - Required to compile Java code
   - Version found: 25.0.4
   - Version supported: >= 17 <= 20
 ✖ Android Studio - Required for building and installing your app on Android
 ✖ ANDROID_HOME - Environment variable that points to your Android SDK installation
 ✓ Gradlew - Build tool required for Android builds
 ✖ Android SDK - Required for building and installing your app on Android
   - Versions found: N/A
   - Version supported: 36.0.0

Errors:   5
Warnings: 0

Attempting to fix 5 issues...

Android
 ✖ Adb
/bin/sh: 1: adb: not found
   Read more about how to download Adb at https://reactnative.dev/docs/running-on-device?os=linux&platform=android&guide=native#method-1-using-adb-reverse-recommended-2
 ✖ JDK
   Read more about how to download JDK at https://reactnative.dev/docs/set-up-your-environment?os=linux&platform=android&guide=native#jdk-studio
 ✖ Android Studio
   Read more about how to download Android Studio at https://reactnative.dev/docs/set-up-your-environment?os=linux&platform=android&guide=native#android-studio
 ✖ ANDROID_HOME
   Read more about how to set the ANDROID_HOME at https://stackoverflow.com/a/39228100/4252781
 ✖ Android SDK
   Read more about how to download Android SDK at https://reactnative.dev/docs/set-up-your-environment?os=linux&platform=android&guide=native#android-sdk

```