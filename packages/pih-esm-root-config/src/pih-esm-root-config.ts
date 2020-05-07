import { start, registerApplication } from "single-spa";
import { promiseBeforeStart } from "@openmrs/esm-root-config";
import { applications } from "./applications";

Object.keys(applications).forEach((appName) => {
  registerApplication(
    appName,
    () => System.import(appName),
    applications[appName]
  );
});

promiseBeforeStart.then(start).catch((err) => {
  console.error(`Failed to initialize i18next translations`);
  console.error(err);
  start();
});
