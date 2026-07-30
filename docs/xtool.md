# xtool

## Install Swift

```bash
curl -O https://download.swift.org/swiftly/linux/swiftly-$(uname -m).tar.gz && \
tar zxf swiftly-$(uname -m).tar.gz && \
./swiftly init --quiet-shell-followup && \
. "${SWIFTLY_HOME_DIR:-$HOME/.local/share/swiftly}/env.sh" && \
hash -r
```

```
Verifying toolchain signature...
Extracting toolchain...
The file `/home/rock/workspace/github/xtool/.swift-version` has been set to `Swift 6.3.3`
The global default toolchain has been set to `Swift 6.3.3`
Swift 6.3.3 is installed successfully!
There are some dependencies that should be installed before using this toolchain.
You can run the following script as the system administrator (e.g. root) to prepare
your system:

    apt-get -y install gnupg2 libcurl4-openssl-dev libstdc++-13-dev libxml2-dev libncurses-dev libz3-dev
```

```bash
swift sdk list
```

```bash
sudo apt-get install usbmuxd
```

```bash
sudo apt-get install libimobiledevice-utils
```

```bash
ideviceinfo
```

## xtool

### installation

```bash
curl -fL \
  "https://github.com/xtool-org/xtool/releases/latest/download/xtool-$(uname -m).AppImage" \
  -o xtool
chmod +x xtool
sudo mv xtool /usr/local/bin/
```

### xtool: log in

```bash
xtool setup
```

## references

|                                           |                                       |
| ----------------------------------------- | ------------------------------------- |
| xtool - Cross-platform Xcode replacement. | https://xtool.sh/documentation/xtool/ |
| Install Swift                             | https://www.swift.org/install/linux/  |
