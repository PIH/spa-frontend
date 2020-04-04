# PIH EMR SPA Frontend

This repository is the basis for the the PIH Single-SPA frontend.

It contains two packages: frontend-package and pih-esm-root-config.

It manages this multi-package setup using [Lerna](https://github.com/lerna/lerna/blob/master/README.md).

## packages/frontend-package

This package uses [Packmap](https://github.com/openmrs/packmap)
to build the PIH Single-SPA frontend as a single deployable artifact.

The `package.json` is a manifest for building it. First you use `npm install`
to download all the pieces. Then, `npm run build` uses
Packmap to bundle it all together.

The result is a directory that can be used as the `frontend` subdirectory
of your OpenMRS server's application data directory.

## packages/pih-esm-root-config

This is the [Single-SPA Root Config](https://single-spa.js.org/docs/configuration/)
for PIH EMR. It is a customized version of the
[OpenMRS Root Config](https://wiki.openmrs.org/display/projects/openmrs-esm-root-config),
on which it depends.

## Building the SPA package

```
npm run bootstrap
cd packages/frontend-package
npm run build
rm -rf ~/openmrs/<my-server>/frontend  # or move it to a backup
ln -s $(realpath openmrs/frontend) ~/openmrs/<my-server>/frontend
```

## Setting up SPA in PIH EMR

1. Make sure the [SPA OpenMRS Module](https://github.com/openmrs/openmrs-module-spa/)
   is part of your distribution.
1. Clone this repo and follow the "Building the SPA package" instructions above (you will need npm)
1. Start your server and try navigating to `/openmrs/spa/login`
1. Follow the instructions to [set up local SPA development](https://wiki.openmrs.org/display/projects/Setup+local+development+environment+for+OpenMRS+SPA)

## Releasing

Once you've got some changes of some ESM into master, you will probably want to
create a release with those changes.

1. [Version and release](https://wiki.openmrs.org/display/projects/Versioning+and+Publishing+Packages) that module
1. `cd packages/frontend-package`
1. `npm install my-module@latest`
1. Do `npm run build` and verify in your browser that nothing broke
1. `cd ../..` to go back to the root directory of this repository
1. Do `lerna publish` to version and publish the packages.
   Your changes will be picked up by the
   [Bamboo CI job](https://bamboo.pih-emr.org/browse/MFE-MFE-17).
   The release artifact will be in
   [spa-repo/pih-spa-frontend/unstable](http://bamboo.pih-emr.org/spa-repo/pih-spa-frontend/unstable/).

### Running all modules from master

If you want to develop against a local server which has the latest commit of all
modules, as one would expect from a CI server, `cd` to `packages/frontend-package`
and run `./dev_install.sh`. You will
need to re-run that scipt to download new updates. `package.json` will continue
to point to released versions.
