#!/bin/bash

release_dir="/var/www/html/spa-repo/pih-spa-frontend/"
cd ${release_dir}

if [ "${bamboo_CES_VERSION}" = "" ] && [ "${bamboo_ZL_VERSION}" = "" ]; then
    echo "You must use \"Run customised...\" --> " \
      "\"Override a variable\" and specify at least " \
      "one version to update."
    exit 1
fi

if [ ! "${bamboo_CES_VERSION}" = "" ]; then
  zip_filename="pih-spa-ces-${bamboo_CES_VERSION}.zip"
  target_filename="pih-spa-ces-gold.zip"
  echo "Releasing ${zip_filename} as ${target_filename}"
  ln -s ${zip_filename} ${target_filename}
fi

if [ ! "${bamboo_ZL_VERSION}" = "" ]; then
  zip_filename="pih-spa-zl-${bamboo_ZL_VERSION}.zip"
  target_filename="pih-spa-zl-gold.zip"
  echo "Releasing ${zip_filename} as ${target_filename}"
  ln -s ${zip_filename} ${target_filename}
fi