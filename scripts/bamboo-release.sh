#!/bin/bash

# Expects env var SITE to be one of zl, ces, etc.

# Intended to be run from Bamboo.
# - Takes built pih-spa zip and moves it into /var/www/html for distribution
# - Adds a VERSION file
# - Updates the 'latest' package
#
# Releases have names like `pih-spa-SITE-XX-YY.zip` where
# - SITE is the site name
# - XX is the spa-frontend commit number in master
# - YY is the config repo commit number in master

set -o xtrace  # print each command
set -e         # die on error

if [ "${SITE}" == "" ]; then
    echo "ERROR: Environment variable 'SITE' must be defined. e.g. SITE=zl"
    exit 1
fi

cd "$(dirname "$0")/../packages/frontend-package" # cd to frontend-package

#=== Define paths
package_commit_number=$(git rev-list HEAD --count)
config_commit_number=$(cd ../../../openmrs-config-${SITE}; git rev-list HEAD --count)
target_dir="/var/www/html/spa-repo/pih-spa-frontend"
target_filename="pih-spa-${SITE}-${package_commit_number}-${config_commit_number}.zip"
target_path="${target_dir}/${target_filename}"
latest_path="${target_dir}/pih-spa-${SITE}-latest.zip"

#=== Copy
cp pih-spa*.zip ${target_path}

#=== Add VERSION file
package_commit_hash=$(git log -n1 --format=format:'%H')
config_commit_hash=$(cd ../../../openmrs-config-${SITE}; git log -n1 --format=format:'%H')
echo "${target_filename}" > VERSION
echo "pih/spa-frontend @ ${package_commit_hash}" >> VERSION
echo "openmrs-config-${SITE} @ ${config_commit_hash}" >> VERSION
mkdir -p openmrs/frontend/
mv VERSION openmrs/frontend/
zip -u ${target_path} openmrs/frontend/VERSION

#=== Update 'latest'
rm -rf ${latest_path}
ln -s ${target_path} ${latest_path}