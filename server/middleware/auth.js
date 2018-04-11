import passport from 'passport';
import passportService from '../services/passport';
import config from '../../config';

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

export { requireAuth, requireSignin };