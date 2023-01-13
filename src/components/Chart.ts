import { ChartType, ChartConfig } from '../interface'

export class Chart {
  config: ChartConfig

  constructor(chartConfig: ChartConfig) {
    this.config = chartConfig
    if (chartConfig.type === ChartType.Bar) {
      //
    }
  }
}
