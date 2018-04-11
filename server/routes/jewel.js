import Jewel from '../models/jewel';

// Get all the jewels sorted by postDate
const getJewels = (req, res) => {
    // Query the db, if no errors send all the games to the client
    Jewel.find(null, null, { sort: { postDate : 1 } }, (err, jewels) => {
        if (err) {
            res.send(err);
        }
        res.json(jewels); // Games sent as json
    });
}

// Get a single jewel filtered by ID
const getJewel = (req, res) => {
    const { id } = req.params;
    // Query the db for a single jewel, if no errors send it to the client
    Jewel.findById(id, (err, jewel) => {
        if (err) {
            res.send(err);
        }
        res.json(jewel); // Game sent as json
    });
}

// Get the body data and add a new Jewel
const postJewel = (req, res) => {
  // We assign the jewel info to a empty jewel and send a message back if no errors
  let jewel = Object.assign(new Jewel(), req.body);
  // ...Then we save it into the db
  jewel.save(err => {
    if (err) {
      res.send(err);
    }
    res.json({ message: 'Jewel created', jewel }); // A simple JSON answer to inform the client
  });
};

// Delete a jewel by the given ID
const deleteJewel = (req, res) => {
// We remove the jewel by the given id and send a message back if no errors
  Jewel.remove(
    { _id: req.params.id },
    err => {
      if (err) {
        res.send(err);
      }
      res.json({ message: 'successfully deleted' }); // A simple JSON answer to inform the client
    }
  );
};

const editJewel = (req, res) => {

  Jewel.findById(req.params.id, function (err, jewel) {
    // Handle any possible database errors
    if (err) {
        res.status(500).send(err);
    } else {
        // Update each attribute with any possible attribute that may have been submitted in the body of the request
        // If that attribute isn't in the request body, default back to whatever it was before.
        jewel.name = req.body.name || jewel.name;
        jewel.description = req.body.description || jewel.description;
        jewel.picture = req.body.picture || jewel.picture;

        // Save the updated document back to the database
        jewel.save(function (err, jewel) {
            if (err) {
                res.status(500).send(err)
            }
            res.send(jewel);
        });
    }
});
  // Jewel.findOneAndUpdate(
  //   { _id: req.body.id },
  //   { $set: {
  //     name: req.body.name,
  //     description: req.body.description,
  //     picture: req.body.picture
  //   } },
  //   { new: true },
  //   function(err, doc) {
  //     if(err) {
  //       res.send(err);
  //     }
  //     else {
  //       res.json(doc);
  //     }
  //   });
}

// We export our functions to be used in the server routes
export { getJewels, getJewel, postJewel, deleteJewel, editJewel };
