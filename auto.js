import hashCode from './index'

Object.prototype.hashCode = function() {
  return hashCode(this)
}
