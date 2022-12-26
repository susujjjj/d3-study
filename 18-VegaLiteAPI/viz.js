import vl from 'vega-lite-api'
export const viz = vl
  .markPoint({ stroke: false, size: 900, opacity: 0.5 })
  .encode(
    vl.x().fieldQ('mpg').scale({ zero: false }),
    vl.y().fieldQ('temperature'),
    vl.tooltip().fieldN('temperature'),
  )
