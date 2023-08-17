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
    // authMiddleware: function ({req}) {
    //     //allows the token to be sent via req.body, req.query, req.headers
    //     let token = req.body.token || req.query.token || req.headers.authorization;
    //     // ["Bearer", "<tokenvalue>"]
    //     if(req.headers.authorization){
    //         token.split('').pop().trim();
    //     }

    //     if(!token){
    //         return req;
    //     }
    //     // verify token and get user data out of it
    //     try{
    //         const { data } = jwt.verify(token, secret, { maxAge: expiration});
    //         req.user  = data;
    //     }catch(err){
    //         console.err(err);

    //     }

    //     return req;
    
    // },

    signToken: function ({name, email, _id }) {
        const payload = {name, email, _id};
        return jwt.sign({data: payload}, secret, {expiresIn: expiration});
    },
};
