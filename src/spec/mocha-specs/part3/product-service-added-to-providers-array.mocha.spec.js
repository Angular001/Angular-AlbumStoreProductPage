let fs = require('fs');
let expect = require('chai').expect
let assert = require('chai').assert

describe('AppModule', function() {
  it(`should add the ProductService to the providers array @product-service-added-to-providers-array`, function () {
    let file;
    try {
      file = fs.readFileSync(__dirname + '/../../../app/app.module.ts').toString();
    } catch (e) {
      assert(false, "ProductService doesn't exist yet.");
    }
/*    let re = /pro\s*:\s*\[\s*ProductService\s*\]\s*\,/  */
      let re = /import\s*{\s*ProductService\s*}\s*from\s*[\'|\"]\.\/product\.service[\'|\"]\;?/
    assert(Array.isArray(file.match(re)) && file.match(re) != null, "The ProductService hasn't been added to the AppModule's `providers` array yet.");
  });
});