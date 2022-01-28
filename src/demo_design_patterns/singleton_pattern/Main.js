import Log from './Log.js'
import Log2 from './LogDirect.js'
import Log3 from './LogMutiple.js'

// 导出类，需要获取到实例在使用
Log.getInstance().info('here b')
Log.instance.info('sdx xcd')

// 直接导出单例，使用简单
Log2.info('this is log2')

// 导出类，可以支持多个实例使用
Log3.getInstance('mt').info('this is log3')
Log3.getInstance('mt').info('this is log3')
Log3.getInstance('mjb').info('this is log3')