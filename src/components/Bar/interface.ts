import { ChartType } from '../../interface'

interface BarDataSet {
  data: number[]
  label?: string
  backgroundColor?: string[]
  hoverBackgroundColor?: string[]
  borderColor?: string[]
  hoverBorderColor?: string[]
  borderWidth?: number
  hoverBorderWidth?: number
  borderRadius?: number
  hoverBorderRadius?: number
}

export interface BarConfig {
  type: ChartType.Bar
  data: {
    labels: string[]
    datasets: BarDataSet[]
  }
  options: {}
}

export type ChartConfig = BarConfig
