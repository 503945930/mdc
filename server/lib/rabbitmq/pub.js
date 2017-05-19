// const async = require('async')

// const Conn = require('./conn')

// const CONSUMER_ADAPTERS = require('config').queue.consumerAdapters
// const CHANNEL = require('config').queue.channel

// const queues = {};
// let conn;
// let publisher;

// exports.start = function (callback) {
//   Conn.connect(function (err, _conn) {
//     if (err) return callback(err)
//     conn = _conn
//      async.eachLimit(CONSUMER_ADAPTERS, 10, function(adapter, callback) {
//         if (!option) option = { durable: false };
//         conn.createChannel(on_open)
//          function on_open(err, ch) {
//             if (err != null) callback(err);
//            // ch.assertQueue(q);
//           //  ch.assertExchange(adapter, 'direct', option);
//             ch.assertQueue(`${CHANNEL}.${adapter.queueName}`,function(err,result){
//             queues[adapter.queueName] = result.queue;
//                 callback();
//             });
//            //publisher = ch;
//            //callback(null,ch)
//          //   ch.sendToQueue(`${CHANNEL}.${adapter.queueName}`, new Buffer('something to do'));
//         }
//      },function(){
//        // publisher = ch;
//        // ch.assertQueue(`${CHANNEL}.${adapter.queueName}`);
//        ch.assertExchange('', 'direct',function(err,exchange){
//             publisher = exchange;
//        });

//    // publisher = ch;
//      }
//   )
// }

// exports.publish = function(message, consumerAdapter, callback){
//      const routingKey = `${CHANNEL}.${consumerAdapter}`
//       publisher.sendToQueue(routingKey, new Buffer(message))
//       callback()
//  //ch.publish(exchange, routingKey, new Buffer(msg));
// //const routingKey = `${CHANNEL}.${consumerAdapter}`;
//  //   publisher.publish(exchange, routingKey, new Buffer(message));
//   //      return ch.close();
// }

// // exports.publish = function(message, consumerAdapter, callback) {
// // const routingKey = `${CHANNEL}.${consumerAdapter}`;
// // }
