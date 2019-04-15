
module.exports = function({bookRepository, bookService}){

    async function createOrUpdate(req, res, next) {
        const {title, authors, isbn, description} = req.body;
        try {
            await bookService.createOrUpdate({title, authors, isbn, description});
            res.redirect("/book/" + isbn);
        } catch (e) {
            next(e);
        }
    }

    async function details(req, res, next) {
        try {
            const isbn = req.params.isbn;
            const book = await bookRepository.findOne(isbn);
            res.json(book);
        } catch(e) {
            next(e);
        }
    }

    async function remove(req, res, next){
        try{
            const isbn = req.params.isbn;
            await bookRepository.remove(isbn)
            res.status(204).end();
        } catch (e){
            next(e);
        }
    }
    
    return {createOrUpdate, details, remove};
};

