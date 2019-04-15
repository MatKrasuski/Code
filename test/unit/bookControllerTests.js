const assert = require("assert");
const bookControllerFactory = require('../../src/bookController');

describe('Book controller', function () {
   it('create or update', async function () {

    // given
      const bookService = {
          async createOrUpdate({isbn}){ 
              bookService.createOrUpdate.invokedWith = isbn;
            }
      };
      const req = {
          body: {
              isbn: 'ISBN'
          }
      };
      const res = {
          redirect(url)
          {
               res.redirect.invokedWith = url;
          }

      };
      var  bookController = bookControllerFactory({bookService});
     // when
     await bookController.createOrUpdate(req,res);

     // then
       assert.equal(res.redirect.invokedWith, '/book/ISBN');
       assert.equal(bookService.createOrUpdate.invokedWith, 'ISBN');
   })
});