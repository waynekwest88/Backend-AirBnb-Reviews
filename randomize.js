const randomize = (userContext, events, done) => {
  let id = Math.floor(Math.random() * 10000000);
  userContext.vars.id = id;
  return done();
}

module.exports = {
  randomize
}