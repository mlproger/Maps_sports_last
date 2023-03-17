import csv from 'csvtojson';
import Place from '../models/places.js'
import memoize from 'lodash'

export const getALL = async (req, res) => {

    try {
        const data = await Place.find().maxTimeMS(100).sort({"Субъект федерации:": 1, "Населённый пункт:":1}).skip(1)
        res.json({data})
    } catch (error) {
        res.json({
            message: error
        })
    }
}


export const getCurrent = async (req, res) => {
    try {
        const id = req.params.id
        const currentPlace = await Place.findOne({"id:":id})
        res.json(currentPlace)
    } catch (error) {
        res.json({
            message: error
        })
    }
}




