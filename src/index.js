import R from 'ramda'
import Rx from 'rx'

const log = R.unary(console.log)

Rx.Observable.interval(500).subscribe(log)
