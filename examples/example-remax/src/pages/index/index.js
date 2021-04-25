import * as React from 'react'
import { Image } from 'remax/one'
import { View, Text } from '@fower/remax'
import styles from './index.css'

export default () => {
  return (
    <View className={styles.app}>
      <View className={styles.header}>
        <Image
          src="https://gw.alipayobjects.com/mdn/rms_b5fcc5/afts/img/A*OGyZSI087zkAAAAAAAAAAABkARQnAQ"
          className={styles.logo}
          alt="logo"
        />
        <View bgWhite p4 m4 rounded black fontBold>
          haha
        </View>
        <View className={styles.text}>
          编辑..xxgo{' '}
          <Text red400 className={styles.path}>
            src/pages/index/index.js
          </Text>{' '}
          开始
        </View>
      </View>
    </View>
  )
}
