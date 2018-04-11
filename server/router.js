import passport from 'passport';
import { getJewels, getJewel, postJewel, deleteJewel, editJewel } from './routes/jewel';
import { getUser, postUser } from './routes/user';
import Auth from './routes/auth';

// auth middleware
import { requireAuth, requireSignin } from './middleware/auth';

export default function(app) {
    // email & password auth
    app.route('/api/signup').post(Auth.signup);
    app.route('/api/signin').post(requireSignin, Auth.signin);

    // Google auth
    app.get('/auth/google', Auth.authGoogle);
    
    app.get('/auth/google/callback', passport.authenticate('google'), Auth.authGoogleCallback);
    
    app.get('/api/logout', Auth.logout);
    
    app.get('/api/current_user', Auth.currentUser);

    // API routes
    app.route('/api/jewels')
    // create a jewel
    .post(requireAuth, postJewel)
    // get all the jewels
    .get(getJewels);
    app.route('/api/jewels/:id')
    // get a single jewel
    .get(getJewel)
    // delete a single jewel
    .delete(requireAuth, deleteJewel);

    app.route('/api/jewels/:id/edit')
    // edit jewel
    .put(requireAuth, editJewel)

    app.route('/api/user')
    .post(requireAuth, getUser);

    app.route('/api/adduser')
    .post(requireAuth, postUser);

    // For all the other requests just sends back the Homepage
    app.route("*").get((req, res) => {
        res.sendFile('build/index.html', { root: __dirname });
    });
};