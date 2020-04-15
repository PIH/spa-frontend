import { routePrefix, routeRegex } from "@openmrs/esm-root-config";

export const applications = {
  "@openmrs/esm-login": shouldShowLogin,
  "@openmrs/esm-devtools": shouldShowDevtools,
  "@openmrs/esm-patient-chart": shouldShowPatientChart,
  "@openmrs/esm-home": shouldShowHome,
  "@pih/esm-refapp-navbar": shouldShowNavbar,
  "@pih/esm-referrals-queue": shouldShowReferralsQueue,
};

function shouldShowLogin(location) {
  return routePrefix("login", location);
}

function shouldShowDevtools() {
  return localStorage.getItem("openmrs:devtools");
}

function shouldShowPatientChart(location) {
  return routeRegex(/^patient\/.+\/chart/, location);
}

function shouldShowHome(location) {
  return routePrefix("home", location);
}

function shouldShowNavbar() {
  return true;
}

function shouldShowReferralsQueue(location) {
  location.pathname.includes("/referrals-queue");
}
