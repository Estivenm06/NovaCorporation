import {plansArray, reviewsArray} from '../helpers/helper.js'

const getMain = (req, res) => {
    res.render('main', {
        title: 'NovaCorporation | Inicio',
        nameUser: 'Estiven',
        greeting: 'Bienvenido a  Nebulã (Inicio)'
    })
};

const getPlans = (req, res) => {
    res.render('plans', {
        title: 'NovaCorporation | Planes',
        nameUser: 'Estiven',
        greeting: 'Bienvenido a  Nebulã (Planes)',
        classPug: 'plans',
        plansArray,
        reviewsArray,
    })
}

export {
    getMain,
    getPlans,
}