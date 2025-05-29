
const getLogin = (req, res) => {
    res.render('login', {
        title: 'NovaCorporation | Inicio de sesion',

    })
};

const postLogin = (req, res) => {
    console.log(req);
    
};

const getRegister = (req, res) => {
    res.render('register', {
        title: 'NovaCorporation | Registrarse'
    })
};

const postRegister = (req, res) => {
    
};

export {
    getLogin,
    getRegister,
    postLogin,
    postRegister
}