# cyclonedx-node-npm    

```bash
npm install --save-dev @cyclonedx/cyclonedx-npm
```


## npx @cyclonedx/cyclonedx-npm --help  
```

Usage: cyclonedx-npm [options] [--] [<package-manifest>]

Create CycloneDX Software Bill of Materials (SBOM) from Node.js NPM projects.

Arguments:
  <package-manifest>              Path to project's manifest file. (default: "package.json" file in current working directory)

Options:
  -V, --version                   output the version number
  --ignore-npm-errors             Whether to ignore errors of NPM.
                                  This might be used, if "npm install" was run with "--force" or "--legacy-peer-deps". (default: false)
  --package-lock-only             Whether to only use the lock file, ignoring "node_modules".
                                  This means the output will be based only on the few details in and the tree described by the "npm-shrinkwrap.json" or "package-lock.json", rather than the contents of "node_modules" directory. (default: false)
  --omit <type...>                Dependency types to omit from the installation tree. (can be set multiple times) (choices: "dev", "optional", "peer", default: "dev" if the NODE_ENV environment variable is set to "production", otherwise empty)
  -w, --workspace <workspace...>  Only include dependencies for specific workspaces. (can be set multiple times)
                                  This feature is experimental. (default: empty)
  --no-workspaces                 Do not include dependencies for workspaces.
                                  Default behaviour is to include dependencies for all configured workspaces.
                                  This cannot be used if workspaces have been explicitly defined using `--workspace`.
                                  This feature is experimental.
  --include-workspace-root        Include workspace root dependencies along with explicitly defined workspaces' dependencies. This can only be used if you have explicitly defined workspaces using `--workspace`.
                                  Default behaviour is to not include the workspace root when workspaces are explicitly defined using `--workspace`.
                                  This feature is experimental.
  --no-include-workspace-root     Do not include workspace root dependencies. This only has an effect if you have one or more workspaces configured in your project.
                                  This is useful if you want to include all dependencies for all workspaces without explicitly defining them with `--workspace` (default behaviour) but you do not want the workspace root dependencies included.
                                  This feature is experimental.
  --gather-license-texts          Search for license files in components and include them as license evidence.
                                  This feature is experimental. (default: false)
  --flatten-components            Whether to flatten the components.
                                  This means the actual nesting of node packages is not represented in the SBOM result. (default: false)
  --short-PURLs                   Omit all qualifiers from PackageURLs.
                                  This causes information loss in trade-off shorter PURLs, which might improve ingesting these strings. (default: false)
  --sv, --spec-version <version>  Which version of CycloneDX spec to use. (choices: "1.2", "1.3", "1.4", "1.5", "1.6", "1.7", default: "1.6")
  --output-reproducible           Whether to go the extra mile and make the output reproducible.
                                  This requires more resources, and might result in loss of time- and random-based-values. (env: BOM_REPRODUCIBLE)
  --of, --output-format <format>  Which output format to use. (choices: "JSON", "XML", default: "JSON")
  -o, --output-file <file>        Path to the output file.
                                  Set to "-" to write to STDOUT. (default: write to STDOUT)
  --validate                      Validate resulting BOM before outputting.
                                  Validation is skipped, if requirements not met. See the README.
  --no-validate                   Disable validation of resulting BOM.
  --mc-type <type>                Type of the main component. (choices: "application", "firmware", "library", default: "application")
  -v, --verbose                   Increase the verbosity of messages.
                                  Use multiple times to increase the verbosity even more.
  -h, --help                      display help for command

```