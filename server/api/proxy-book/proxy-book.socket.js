/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var ProxyBook = require('./proxy-book.model');

exports.register = function(socket) {
  ProxyBook.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  ProxyBook.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('proxy-book:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('proxy-book:remove', doc);
}