# cyclonedx-gradle-plugin   


```bash
# Generate per-project SBOMs
./gradlew cyclonedxDirectBom

# Generate aggregated SBOM (for multi-project builds)
./gradlew cyclonedxBom
```


```bash
./gradlew cyclonedxBom -I init.gradle
```


```
> Task :cyclonedxBom
Caching disabled for task ':cyclonedxBom' because:
  Build cache is disabled
Task ':cyclonedxBom' is not up-to-date because:
  No history is available.
CycloneDX Aggregate: Parameters
------------------------------------------------------------------------
schemaVersion             : VERSION_16
includeLicenseText        : false
includeBomSerialNumber    : true
jsonOutput                : /home/rock/workspace/github/stitching/android/build/reports/cyclonedx/bom.json
xmlOutput                 : /home/rock/workspace/github/stitching/android/build/reports/cyclonedx/bom.xml
componentGroup            : 
componentName             : stitching
componentVersion          : unspecified
projectType               : LIBRARY
------------------------------------------------------------------------
```

```
[CycloneDX] Creating BOM
[CycloneDX] Adding sub-project component:[pkg:maven/unspecified/stitching@unspecified?project_path=%3A] pkg:maven/stitching/app@unspecified?project_path=%3Aapp
[CycloneDX] Adding sub-project component:[pkg:maven/unspecified/stitching@unspecified?project_path=%3A] pkg:maven/stitching/app@unspecified?project_path=%3Aapp
[CycloneDX] Adding sub-project component:[pkg:maven/unspecified/stitching@unspecified?project_path=%3A] pkg:maven/stitching/react-native-async-storage_async-storage@unspecified?project_path=%3Areact-native-async-storage_async-storage
[CycloneDX] Adding sub-project component:[pkg:maven/unspecified/stitching@unspecified?project_path=%3A] pkg:maven/stitching/react-native-async-storage_async-storage@unspecified?project_path=%3Areact-native-async-storage_async-storage
[CycloneDX] Adding sub-project component:[pkg:maven/unspecified/stitching@unspecified?project_path=%3A] pkg:maven/stitching/react-native-gesture-handler@unspecified?project_path=%3Areact-native-gesture-handler
[CycloneDX] Adding sub-project component:[pkg:maven/unspecified/stitching@unspecified?project_path=%3A] pkg:maven/stitching/react-native-gesture-handler@unspecified?project_path=%3Areact-native-gesture-handler
[CycloneDX] Adding sub-project component:[pkg:maven/unspecified/stitching@unspecified?project_path=%3A] pkg:maven/stitching/react-native-masked-view_masked-view@unspecified?project_path=%3Areact-native-masked-view_masked-view
[CycloneDX] Adding sub-project component:[pkg:maven/unspecified/stitching@unspecified?project_path=%3A] pkg:maven/stitching/react-native-masked-view_masked-view@unspecified?project_path=%3Areact-native-masked-view_masked-view
[CycloneDX] Adding sub-project component:[pkg:maven/unspecified/stitching@unspecified?project_path=%3A] pkg:maven/stitching/react-native-nitro-fetch@unspecified?project_path=%3Areact-native-nitro-fetch
[CycloneDX] Adding sub-project component:[pkg:maven/unspecified/stitching@unspecified?project_path=%3A] pkg:maven/stitching/react-native-nitro-fetch@unspecified?project_path=%3Areact-native-nitro-fetch
[CycloneDX] Adding sub-project component:[pkg:maven/unspecified/stitching@unspecified?project_path=%3A] pkg:maven/stitching/react-native-nitro-modules@unspecified?project_path=%3Areact-native-nitro-modules
[CycloneDX] Adding sub-project component:[pkg:maven/unspecified/stitching@unspecified?project_path=%3A] pkg:maven/stitching/react-native-nitro-modules@unspecified?project_path=%3Areact-native-nitro-modules
[CycloneDX] Adding sub-project component:[pkg:maven/unspecified/stitching@unspecified?project_path=%3A] pkg:maven/stitching/react-native-reanimated@4.5.3?project_path=%3Areact-native-reanimated
[CycloneDX] Adding sub-project component:[pkg:maven/unspecified/stitching@unspecified?project_path=%3A] pkg:maven/stitching/react-native-reanimated@4.5.3?project_path=%3Areact-native-reanimated
[CycloneDX] Adding sub-project component:[pkg:maven/unspecified/stitching@unspecified?project_path=%3A] pkg:maven/stitching/react-native-safe-area-context@unspecified?project_path=%3Areact-native-safe-area-context
[CycloneDX] Adding sub-project component:[pkg:maven/unspecified/stitching@unspecified?project_path=%3A] pkg:maven/stitching/react-native-safe-area-context@unspecified?project_path=%3Areact-native-safe-area-context
[CycloneDX] Adding sub-project component:[pkg:maven/unspecified/stitching@unspecified?project_path=%3A] pkg:maven/stitching/react-native-screens@unspecified?project_path=%3Areact-native-screens
[CycloneDX] Adding sub-project component:[pkg:maven/unspecified/stitching@unspecified?project_path=%3A] pkg:maven/stitching/react-native-screens@unspecified?project_path=%3Areact-native-screens
[CycloneDX] Adding sub-project component:[pkg:maven/unspecified/stitching@unspecified?project_path=%3A] pkg:maven/stitching/react-native-svg@unspecified?project_path=%3Areact-native-svg
[CycloneDX] Adding sub-project component:[pkg:maven/unspecified/stitching@unspecified?project_path=%3A] pkg:maven/stitching/react-native-svg@unspecified?project_path=%3Areact-native-svg
[CycloneDX] Adding sub-project component:[pkg:maven/unspecified/stitching@unspecified?project_path=%3A] pkg:maven/stitching/react-native-vector-icons_material-design-icons@unspecified?project_path=%3Areact-native-vector-icons_material-design-icons
[CycloneDX] Adding sub-project component:[pkg:maven/unspecified/stitching@unspecified?project_path=%3A] pkg:maven/stitching/react-native-vector-icons_material-design-icons@unspecified?project_path=%3Areact-native-vector-icons_material-design-icons
[CycloneDX] Adding sub-project component:[pkg:maven/unspecified/stitching@unspecified?project_path=%3A] pkg:maven/stitching/react-native-worklets@0.11.1?project_path=%3Areact-native-worklets
[CycloneDX] Adding sub-project component:[pkg:maven/unspecified/stitching@unspecified?project_path=%3A] pkg:maven/stitching/react-native-worklets@0.11.1?project_path=%3Areact-native-worklets
[CycloneDX] Adding sub-project component:[pkg:maven/unspecified/stitching@unspecified?project_path=%3A] pkg:maven/stitching/sentry_react-native@unspecified?project_path=%3Asentry_react-native
[CycloneDX] Adding sub-project component:[pkg:maven/unspecified/stitching@unspecified?project_path=%3A] pkg:maven/stitching/sentry_react-native@unspecified?project_path=%3Asentry_react-native
[CycloneDX] Writing BOM
[CycloneDX] Json BOM saved at /home/rock/workspace/github/stitching/android/build/reports/cyclonedx/bom.json
[CycloneDX] XML BOM saved at /home/rock/workspace/github/stitching/android/build/reports/cyclonedx/bom.xml
Build acf8a3b2-5ff8-47e2-9d74-e745f505271e is closed
Build 5bf5b146-f6a9-48cf-a051-e06b24b7d1b2 is closed
```