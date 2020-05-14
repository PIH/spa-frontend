#!/usr/bin/env node

const fs = require("fs");
const argv = require("yargs")
  .usage(
    "Prepares import-map-overrides.json for use by Packmap.\nUsage: $0 [options]"
  )
  .options({
    "base-url": {
      alias: "b",
      description: "Change the base URL for relative paths.",
      default: "openmrs",
    },
  }).argv;

const templatePath = __dirname + "/import-map-overrides-template.json";
const outputPath = __dirname + "/import-map-overrides.json";

const template = JSON.parse(fs.readFileSync(templatePath));

for (let key of Object.keys(template.imports)) {
  template.imports[key] = template.imports[key].replace(
    "${baseUrl}",
    argv["base-url"]
  );
}

fs.writeFileSync(outputPath, JSON.stringify(template, null, 2));
