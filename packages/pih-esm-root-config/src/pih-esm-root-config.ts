import { start, registerApplication } from "single-spa";
import {
  registerAllCoreApplications,
  promiseBeforeStart,
} from "@openmrs/esm-root-config";

registerAllCoreApplications();
registerApplication(
  "@pih/esm-referrals-queue",
  () => System.import("@pih/esm-referrals-queue"),
  (location) => location.pathname.includes("/referrals-queue")
);

promiseBeforeStart.then(start).catch((err) => {
  console.error(`Failed to initialize i18next translations`);
  console.error(err);
});
