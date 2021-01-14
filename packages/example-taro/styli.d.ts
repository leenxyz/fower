/**
 * 添加额外声明, demo
 */
import { Property } from 'csstype'

declare module '@styli/taro' {
  interface AtomicProps {
    /**
     * 添加额外声明 demo
     *
     * 您可在 "styli.d.ts" 文件中进行添加
     */
    transform?: Property.Transform
  }
}
