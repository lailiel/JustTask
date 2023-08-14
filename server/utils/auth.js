const { GraphQLError } = require('graphql');
const jwt = require ('jsonwebtoken');
//Setup for the token secret and expiration
const secret = 'staySecured1';
const expiration = '2h';

module.exports = {
    AuthenticationError: new GraphQLError('Could not authenticate user', {
        extensions:{
            code: 'UNAUTHENTICATED',
        },
    }),

    signToken: function ({name, email, _id }) {
        const payload = {name, email, _id};
        return jwt.sign({data: payload}, secret, {expiresIn: expiration});
    },
};
