import User from '../models/user';

const getUser = (req, res) => {
    const { username, password } = req.body;
    // Query the db for a single user, if no errors send it to the client
    User.findOne({username, password}, 'id username role', (err, user) => {
        try {
          if (err) {
              res.send(err);
          }
          if (user === null) {
              res.status(401).send("Incorrect credentials");
          } else {
            res.json(user);
          } // User sent as json
        } catch(e){ console.log(e); }
    });
}

const postUser = (req, res) => {
  // We assign the user info to a empty user and send a message back if no errors
  let user = Object.assign(new User(), req.body);
  // ...Then we save it into the db
  user.save(err => {
    if (err) {
      res.send(err);
    }
    res.json({ message: 'User created' }); // A simple JSON answer to inform the client
  });
};

export { getUser, postUser };
