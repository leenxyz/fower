declare module '*.png'
declare module '*.gif'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.svg'
declare module '*.css'
declare module '*.less'
declare module '*.scss'
declare module '*.sass'
declare module '*.styl'

declare namespace NodeJS {
  interface ProcessEnv {
    TARO_ENV: 'weapp' | 'swan' | 'alipay' | 'h5' | 'rn' | 'tt' | 'quickapp' | 'qq' | 'jd'
  }
}

/**
 * 添加额外声明, demo
 */
import { Property } from '@styli/taro'
declare module '@styli/taro' {
  interface AtomicProps {
    /**
     * 添加额外声明 demo
     *
     * 您可在 "global.d.ts" 文件中进行添加
     */
    transform?: Property.Transform
  }
}
