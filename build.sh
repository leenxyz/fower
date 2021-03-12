#!/bin/bash

cd packages/types && npm run build

Sequential=("
  utils
  core
")

Parallel=("
  styli-plugin-background
  styli-plugin-space
  styli-plugin-border
  styli-plugin-color
  styli-plugin-display
  styli-plugin-flexbox
  styli-plugin-flex-item
  styli-plugin-layout-engine
  styli-plugin-line-height
  styli-plugin-margin
  styli-plugin-opacity
  styli-plugin-overflow
  styli-plugin-padding
  styli-plugin-position
  styli-plugin-rounded
  styli-plugin-shadow
  styli-plugin-size
  styli-plugin-text-align
  styli-plugin-text-heading
  styli-plugin-text-size
  styli-plugin-text-transform
  styli-plugin-text-weight
  styli-plugin-css
  styli-plugin-debug
  styli-plugin-reset
  styli-plugin-z-index
  styli-plugin-outline
  styli-plugin-pseudo
  styli-plugin-media-queries
  styli-plugin-grid
  styli-plugin-ellipsis
  styli-plugin-cursor
  babel-preset-styli
")

Others=("
  preset-default
  styli-transform
  theming
  styled
  react
  react-native
  vue
  taro
")

build_package(){
  cd "../"$1
  npm run build
}

for p in ${Sequential[@]}
do
   build_package $p
done

for p in ${Parallel[@]}
do
   build_package $p
done

wait

for p in ${Others[@]}
do
   build_package $p
done

