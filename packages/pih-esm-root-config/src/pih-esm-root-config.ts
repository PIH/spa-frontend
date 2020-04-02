import { start, registerApplication } from "single-spa";
import { registerAllCoreApplications } from "@openmrs/esm-root-config";

registerAllCoreApplications();
registerApplication(
  "@pih/esm-referrals-queue",
  () => System.import("@pih/esm-referrals-queue"),
  (location) => location.pathname.includes("/referrals-queue")
);

start();
