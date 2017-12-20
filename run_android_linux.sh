#!/bin/sh

if [ ! -d ./android/app/src/main/assets ]; then
    mkdir -p ./android/app/src/main/assets
fi

react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/ && react-native run-android
