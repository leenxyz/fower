import React from 'react'
import styles from './colors.module.css'

const palette = [
  {
    name: '色',
    colors: {
      black: '#000000',
      white: '#ffff',
      brand: '#f56565',
      primary: '#f56565',
      secondary: '#f687b3',
      info: '#63b3ed',
      warning: '#f6ad55',
      error: '#f56565',
      success: '#68d391',
    },
  },
  {
    name: 'Gray / 灰',
    colors: {
      10: '#f7fafc',
      20: '#edf2f7',
      30: '#e2e8f0',
      40: '#cbd5e0',
      50: '#a0aec0',
      60: '#718096',
      70: '#4a5568',
      80: '#2d3748',
      90: '#1a202c',
    },
  },
  {
    name: 'Red / 红',
    colors: {
      10: '#fff5f5',
      20: '#fed7d7',
      30: '#feb2b2',
      40: '#fc8181',
      50: '#f56565',
      60: '#e53e3e',
      70: '#c53030',
      80: '#9b2c2c',
      90: '#742a2a',
    },
  },
  {
    name: 'Orange / 橙',
    colors: {
      10: '#fffaf0',
      20: '#feebc8',
      30: '#fbd38d',
      40: '#f6ad55',
      50: '#ed8936',
      60: '#dd6b20',
      70: '#c05621',
      80: '#9c4221',
      90: '#7b341e',
    },
  },
  {
    name: 'Yellow / 黄',
    colors: {
      yellow10: '#fffff0',
      yellow20: '#fefcbf',
      yellow30: '#faf089',
      yellow40: '#f6e05e',
      yellow50: '#ecc94b',
      yellow60: '#d69e2e',
      yellow70: '#b7791f',
      yellow80: '#975a16',
      yellow90: '#744210',
    },
  },
  {
    name: 'Green / 绿',
    colors: {
      10: '#f0fff4',
      20: '#c6f6d5',
      30: '#9ae6b4',
      40: '#68d391',
      50: '#48bb78',
      60: '#38a169',
      70: '#2f855a',
      80: '#276749',
      90: '#22543d',
    },
  },
  {
    name: 'Teal / 蓝绿',
    colors: {
      10: '#e6fffa',
      20: '#b2f5ea',
      30: '#81e6d9',
      40: '#4fd1c5',
      50: '#38b2ac',
      60: '#319795',
      70: '#2c7a7b',
      80: '#285e61',
      90: '#234e52',
    },
  },
  {
    name: 'Blue / 蓝',
    colors: {
      10: '#ebf8ff',
      20: '#bee3f8',
      30: '#90cdf4',
      40: '#63b3ed',
      50: '#4299e1',
      60: '#3182ce',
      70: '#2b6cb0',
      80: '#2c5282',
      90: '#2a4365',
    },
  },
  {
    name: 'Indigo / 靛青',
    colors: {
      10: '#ebf4ff',
      20: '#c3dafe',
      30: '#a3bffa',
      40: '#7f9cf5',
      50: '#667eea',
      60: '#5a67d8',
      70: '#4c51bf',
      80: '#434190',
      90: '#3c366b',
    },
  },
  {
    name: 'Purple / 紫',
    colors: {
      10: '#faf5ff',
      20: '#e9d8fd',
      30: '#d6bcfa',
      40: '#b794f4',
      50: '#9f7aea',
      60: '#805ad5',
      70: '#6b46c1',
      80: '#553c9a',
      90: '#44337a',
    },
  },
  {
    name: 'Pink / 粉红',
    colors: {
      10: '#fff5f7',
      20: '#fed7e2',
      30: '#fbb6ce',
      40: '#f687b3',
      50: '#ed64a6',
      60: '#d53f8c',
      70: '#b83280',
      80: '#97266d',
      90: '#702459',
    },
  },
]

export const Colors = () => {
  return (
    <div>
      {palette.map((item) => (
        <div key={item.name}>
          <h2 className={styles.title}>{item.name}</h2>
          <div className={styles.colorList}>
            {Object.keys(item.colors).map((i) => (
              <div key={i} className={styles.colorItem}>
                <div
                  className={styles.color}
                  style={{
                    background: item.colors[i],
                  }}
                ></div>
                <div className={styles.info}>
                  <div className={styles.name}>{i}</div>
                  <div className={styles.value}>{item.colors[i]}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
