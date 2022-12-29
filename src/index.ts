/**
 * The themes of Casual UI
 */
type CTheme = 'primary' | 'secondary' | 'negative' | 'warning'

/**
 * The size values of Casual UI
 */
type CSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

/**
 * CSS units
 */
type CUnit = 'px' | 'rem' | 'em' | 'pt' | '%' | 'vw' | 'vh'

/**
 * CSS Length
 */
type CLength = `${number}${CUnit}`

/**
 * Position types, use the flex-start, center, flex-end css values
 */
type CPosition = 'start' | 'center' | 'end'

/**
 * Form validation function type
 */
type CRule = (v: any) => string | false | Promise<string | false>

type CTextAlign = 'left' | 'center' | 'right'

type CFlexDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse'

interface Notification {
  title?: string
  message?: string
  closeIcon?: boolean
  theme?: CTheme
  timeout: number
  alignX?: CPosition
  alignY?: CPosition
  id: number
}

/**
 * The position composition enum.
 * @zh 位置组合，格式为：'横轴位置 纵轴位置'
 */
type PositionGroup = `${CPosition} ${CPosition}`

type NotificationGroups = {
  [key in PositionGroup]: {
    x: CPosition
    y: CPosition
    items: Notification[]
  }
}

export const createNotificationGroups: () => NotificationGroups = () => ({
  'start start': {
    x: 'start',
    y: 'start',
    items: [],
  },
  'start center': {
    x: 'start',
    y: 'center',
    items: [],
  },
  'start end': {
    x: 'start',
    y: 'end',
    items: [],
  },
  'center start': {
    x: 'center',
    y: 'start',
    items: [],
  },
  'center center': {
    x: 'center',
    y: 'center',
    items: [],
  },
  'center end': {
    x: 'center',
    y: 'end',
    items: [],
  },
  'end start': {
    x: 'end',
    y: 'start',
    items: [],
  },
  'end center': {
    x: 'end',
    y: 'center',
    items: [],
  },
  'end end': {
    x: 'end',
    y: 'end',
    items: [],
  },
})

/**
 * Used for default v-model type
 * @zh 用于默认v-model的基类型
 */
interface VModel<T> {
  modelValue: T
}

/**
 * Used for v-model event type
 * @zh 用于默认v-model的事件基类型
 */
interface EmitModel<T> {
  (e: 'update:modelValue', newValue: T): void
}

/**
 * The label direction, which use the css `flex-direction`.
 * @zh label排列方向
 */
type CLabelDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse'

export type {
  CTextAlign,
  CFlexDirection,
  CLength,
  CUnit,
  CRule,
  CLabelDirection,
  CTheme,
  CSize,
  CPosition,
  Notification,
  PositionGroup,
  NotificationGroups,
  VModel,
  EmitModel,
}
