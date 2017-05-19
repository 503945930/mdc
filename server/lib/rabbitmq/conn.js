// const amqp = require('amqplib/callback_api')

// const RABBITMQ_URL = require('config').queue.connection

// let connected = false

// exports.connect = function (callback) {
//   amqp.connect(RABBITMQ_URL, function (err, conn) {
//     if (err) {
//       connected = false
//       return callback(err)
//     }
//     if (connected) {
//       return process.nextTick(function () {
//         return callback(null, conn)
//       })
//     }
//     connected = true

//      // 监听连接关闭事件
//     conn.on('close', () => {
//       connected = false
//       console.log('rabbimq连接关闭')
//     })
//         // 监听连接错误事件
//     conn.on('error', (err) => {
//       connected = false
//       console.error(`rabbimq连接出错:`, err)
//     })
//         // 监听连接阻塞事件
//     conn.on('blocked', (reason) => {
//       console.error(`连接阻塞，原因:${reason}`)
//     })
//     // 监听阻塞连接恢复正常事件
//     conn.on('unblocked', () => {
//       console.log('阻塞连接恢复正常')
//     })

//     return callback(null, conn)
//   })
// }
