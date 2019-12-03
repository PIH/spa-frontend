# PIH EMR SPA Frontend

## Quick Instructions

```
npm install
npm run build
ln -s $(realpath openmrs/frontend) ~/openmrs/my-server/frontend
```

## Setting up SPA in PIH EMR

1. Make sure the [SPA OpenMRS Module](https://github.com/openmrs/openmrs-module-spa/)
  is part of your distribution.
2. Clone this repo and follow the "Quick Instructions" above (you will need npm)
3. Start your server and try navigating to `/openmrs/spa/login`
4. Follow the instructions to [set up local SPA development](https://wiki.openmrs.org/display/projects/Setup+local+development+environment+for+OpenMRS+SPA)
