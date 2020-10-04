export interface Margins {
  /**
   * Set margin, m is margin
   *
   * 用 View 作为示例:
   * ```tsx
   * <View m-10></View>
   * <View m-1rem></View>
   * <View m-10p></View>
   * <View m={10}></View>
   * <View m="10px 20px"></View>
   * <View m={a + b}></View>
   * ```
   */
  m?: boolean | number | string

  /**
   * Set margin horizontal
   *
   * mx-10 相当于下面：
   *
   * ```css
   * margin-left: 10px;
   * margin-right: 10px;
   * ```
   *
   * 用 View 作为示例:
   * ```tsx
   * <View mx-10></View>
   * <View mx-1rem></View>
   * <View mx-10p></View>
   * <View mx={a + b}></View>
   * ```
   */
  mx?: boolean | number | string

  /**
   * Set margin vertical
   *
   * my-10 相当于下面：
   *
   * ```css
   * margin-top: 10px;
   * margin-bottom: 10px;
   * ```
   *
   * 用 View 作为示例:
   * ```tsx
   * <View my-10></View>
   * <View my-1rem></View>
   * <View my-10p></View>
   * <View my={a + b}></View>
   * ```
   */
  my?: boolean | number | string

  /**
   * Set margin top, mt is margin-top
   *
   * 用 View 作为示例:
   * ```tsx
   * <View mt-10></View>
   * <View mt-1rem></View>
   * <View mt-10p></View>
   * <View mt={10}></View>
   * <View mt="10px 20px"></View>
   * <View mt={a + b}></View>
   * ```
   */
  mt?: boolean | number | string

  /**
   * Set margin bottom, mb is margin-bottom
   *
   * 用 View 作为示例:
   * ```tsx
   * <View mb-10></View>
   * <View mb-1rem></View>
   * <View mb-10p></View>
   * <View mb={10}></View>
   * <View mb="10px 20px"></View>
   * <View mb={a + b}></View>
   * ```
   */
  mb?: boolean | number | string

  /**
   * Set margin right, mr is margin-right
   *
   * 用 View 作为示例:
   * ```tsx
   * <View mr-10></View>
   * <View mr-1rem></View>
   * <View mr-10p></View>
   * <View mr={10}></View>
   * <View mr="10px 20px"></View>
   * <View mr={a + b}></View>
   * ```
   */
  mr?: boolean | number | string

  /**
   * Set margin left, ml is margin-left
   *
   * 用 View 作为示例:
   * ```tsx
   * <View ml-10></View>
   * <View ml-1rem></View>
   * <View ml-10p></View>
   * <View ml={10}></View>
   * <View ml="10px 20px"></View>
   * <View ml={a + b}></View>
   * ```
   */
  ml?: boolean | number | string
}
