let books = [
  {
    "id": 0,
    "title": "Title1",
    "author": "Author1",
  },
  {
    "id": 2,
    "title": "Title2",
    "author": "Author2",
  }
];
let id = 3;

module.exports = {
  create: ( req, res ) => {
    const { title, author } = req.body;
    books.push( { id, title, author } );
    id++;
    res.status(200).send( books );
  },

  read: ( req, res ) => {
    res.status(200).send( books );
  },

  update: ( req, res ) => {
    const updateID = req.params.id;
    let index = books.findIndex( book => book.id == updateID );

    books[ index ] = {
      id: books[ index ].id,
      title: req.body.title || books[ index ].title,
      author: req.body.author || books[ index ].author
    };

    res.status(200).send( books );
  },

  delete: ( req, res ) => {
    const deleteID = req.params.id;
    bookID = books.findIndex( book => book.id == deleteID );
    books.splice( bookID, 1 );
    res.status(200).send( books );
  }
};
