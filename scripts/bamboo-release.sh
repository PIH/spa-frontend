#!/bin/bash

# Expects env var SITE to be one of zl, ces, etc.
# Optional env var BASE_URL defaults to 'openmrs'. Can be e.g. 'mirebalais' 

# Intended to be run from Bamboo.
# - Takes built pih-spa zip and moves it into /var/www/html for distribution
# - Adds a VERSION file
# - Updates the 'latest' package
#
# Releases have names like `pih-spa-SITE-XX-YY.zip` where
# - SITE is the site name
# - XX is the spa-frontend commit number in master
# - YY is the config repo commit number in master

if [ "${SITE}" = "" ]; then
    echo "ERROR: Environment variable 'SITE' must be defined. e.g. SITE=zl"
    exit 1
fi
BASE_URL=${BASE_URL:-openmrs}

set -e         # die on error
set -o xtrace  # print each command

echo ${SITE}
echo ${BASE_URL}

cd "$(dirname "$0")/../packages/frontend-package" # cd to frontend-package

#=== Define paths
package_commit_number=$(git rev-list HEAD --count)
config_commit_number=$(cd ../../../openmrs-config-${SITE}; git rev-list HEAD --count)
target_dir="/var/www/html/spa-repo/pih-spa-frontend"
base_url_infix=$([[ ${BASE_URL} == "openmrs" ]] && echo "" || echo -${BASE_URL} )
target_filename="pih-spa-${SITE}${base_url_infix}-${package_commit_number}-${config_commit_number}.zip"
target_path="${target_dir}/${target_filename}"
latest_path="${target_dir}/pih-spa-${SITE}-latest.zip"

#=== Build package
npm run preprocess-overrides -- --base-url ${BASE_URL}
npm run build -- --base-url /${BASE_URL}
npm run link-assets

#=== Add VERSION file
package_commit_hash=$(git log -n1 --format=format:'%H')
config_commit_hash=$(cd ../../../openmrs-config-${SITE}; git log -n1 --format=format:'%H')
echo "${target_filename}" > VERSION
echo "pih/spa-frontend @ ${package_commit_hash}" >> VERSION
echo "openmrs-config-${SITE} @ ${config_commit_hash}" >> VERSION
mv VERSION frontend/

#=== Zip it up
npm run zip

#=== Copy
cp pih-spa.zip ${target_filename}  # for Bamboo artifact
cp pih-spa.zip ${target_path}      # for distribution

#=== Update 'latest'
rm -rf ${latest_path}
ln -s ${target_path} ${latest_path}