# PIH EMR SPA Frontend

This repository contains everything needed to set up the PIH Single-SPA
frontend.

The `package.json` is a manifest for building it. First you use `npm install`
to download all the pieces. Then, `npm run build` uses
[Packmap](https://github.com/openmrs/packmap) to bundle it all together.
The result is a directory that can be used as the `frontend` subdirectory
of your OpenMRS server's application data directory.

## Quick Instructions

```
npm install
npm run build
rm -rf ~/openmrs/<my-server>/frontend  # or move it to a backup
ln -s $(realpath openmrs/frontend) ~/openmrs/<my-server>/frontend
```

### Running all modules from master

If you want to develop against a local server which has the latest commit of all 
modules, as one would expect from a CI server, run `./dev-install.sh`. You will
need to re-run that scipt to download new updates. `package.json` will continue 
to point to released versions.

## Setting up SPA in PIH EMR

1. Make sure the [SPA OpenMRS Module](https://github.com/openmrs/openmrs-module-spa/)
  is part of your distribution.
1. Clone this repo and follow the "Quick Instructions" above (you will need npm)
1. Start your server and try navigating to `/openmrs/spa/login`
1. Follow the instructions to [set up local SPA development](https://wiki.openmrs.org/display/projects/Setup+local+development+environment+for+OpenMRS+SPA)

## Releasing

Once you've got some changes of some ESM into master, you will probably want to
create a release with those changes.

1. [Version and release](https://wiki.openmrs.org/display/projects/Versioning+and+Publishing+Packages) that module
1. In this repo, do `npm install my-module@latest`
1. Do `npm run build` and verify in your browser that nothing broke
1. Do `npm version <major|minor|patch>` as appropriate
1. Push to master with `--tags`. Your changes will be picked up by the
   [Bamboo CI job](http://bamboo.pih-emr.org:8085/browse/MIREBALAIS-MFE).
   The release artifact will be in [spa-repo/unstable](http://bamboo.pih-emr.org/spa-repo/unstable/).
