import assert from 'assert'
import path from 'path'
import index from '../src/js/index.js'

describe("default export", () => {
  it('should point to image with relative path', () => {
    assert.equal(index, path.join('..', 'assets', 'image.png'))
  })
})
