import React from 'react'
import { ImageProps as RNImageProps, FlatList as RNFlatList } from 'react-native'
import { toFinalProps, Modifiers } from '@styli/core'

export interface FlatListProps extends RNImageProps, Modifiers {}

export const FlatList = (props: FlatListProps) => {
  return <RNFlatList {...toFinalProps(props)} />
}
