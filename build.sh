#!/bin/bash

cd packages/utils && npm run build

PACKAGES=("core react react-native vue taro styli-plugin-background styli-plugin-border styli-plugin-color styli-plugin-display styli-plugin-flex-item styli-plugin-flexbox styli-plugin-layout-engine styli-plugin-line-height styli-plugin-margin styli-plugin-opacity styli-plugin-overflow styli-plugin-padding styli-plugin-position styli-plugin-rounded styli-plugin-shadow styli-plugin-size styli-plugin-text-align styli-plugin-text-heading styli-plugin-text-size styli-plugin-text-transform styli-plugin-text-weight styli-plugin-z-index babel-preset-styli preset-default")


build_one(){
  cd "../"$1
  npm run build
}


for p in ${PACKAGES[@]}
do
   build_one $p
done

