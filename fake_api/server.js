const fs = require('fs');
const bodyParser = require('body-parser');
const jsonServer = require('json-server');
const jwt = require('jsonwebtoken');

const server = jsonServer.create();

const router = jsonServer.router('./db.json');

let db = JSON.parse(fs.readFileSync('./db.json', 'UTF-8'));

server.use(jsonServer.defaults());

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

const SECRET_KEY = '35979735';
const expiresIn = '1h';

function createToken(payload) {
  return jwt.sign(payload, SECRET_KEY, { expiresIn });
}

function verifyToken(token) {
  return jwt.verify(token, SECRET_KEY, (err, decode) =>
    decode !== undefined ? decode : err
  );
}

function isAuthenticad(email, password) {
  db = JSON.parse(fs.readFileSync('./db.json', 'UTF-8'));
  console.log('database reloaded');
  console.log('isAuthenticad', { email, password });
  if (email && password) {
    let userIdenx = db.participants.findIndex((user) => user.email === email && user.password === password);
    if(userIdenx !== -1) {
      return db.participants[userIdenx];
    } else {
      userIdenx = db.teachers.findIndex((user) => user.email === email && user.password === password); 
      if(userIdenx !== -1) {
        return db.teachers[userIdenx];
      }
    }
  }
  return null;
}

server.post('/auth/login', (req, res) => {
  console.log('server.post(/auth/login', req.body);
  const { email, password } = req.body;
  const user = isAuthenticad(email, password);
  console.log('user', user);
  if (!user) {
    const status = 401;
    const message = 'Icorrect email or password';
    res.status(status).json({ status: message });
    return;
  }
  const accessToken = createToken({ email, password });
  res.status(200).json({ accessToken, user });
});

server.use(/\/participants(\/.*|\?.*|)/, (req, res, next) => {
  const path = req.baseUrl;
  const method = req.method;
  if(path === '/participants' &&  method === 'POST'){
    next();
  }else{
    if (
      req.headers.authorization === undefined ||
      req.headers.authorization.split(' ')[0] !== 'Bearer'
    ) {
      const status = 401;
      const message = 'Bad authorization header';
      res.status(status).json({ status, message });
      return;
    }
    try {
      verifyToken(req.headers.authorization.split(' ')[1]);
      next();
    } catch (err) {
      const status = 401;
      const message = 'Error: access_token is not valid';
      res.status(status).json({ status, message });
    }
  }
});

server.use(/\/teachers(\/.*|\?.*|)/, (req, res, next) => {
  if (
    req.headers.authorization === undefined ||
    req.headers.authorization.split(' ')[0] !== 'Bearer'
  ) {
    const status = 401;
    const message = 'Bad authorization header';
    res.status(status).json({ status, message });
    return;
  }
  try {
    verifyToken(req.headers.authorization.split(' ')[1]);
    next();
  } catch (err) {
    const status = 401;
    const message = 'Error: access_token is not valid';
    res.status(status).json({ status, message });
  }
});

server.use(router);

server.listen(3002, () => {
  console.log('API Server Loaded');
});
