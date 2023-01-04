const customer = require('../models/customer.js')


exports.index = (req, res) =>{
    res.send('<h1> Customer Application</h1><a href="/api/customer"> รายชื่อลูกค้า</a>')
}
//หา record ทั้งหมดใน DBมาแสดง 
exports.findAll = (req, res) => {
    customer.find().then(data => {
        res.json(data)
    }).catch(err => {
        res.status(500).send({
            msg: err.message
        })
    })

exports.create = (req, res) => {
    const c = new customer(req.body)

    c.save().then(data =>{
        res.json(data)
    }).catch(res =>{
        return res.status(500).json({
            msg: "ไม่สามารถเพิ่มข้อมูลได้ เนื่องจาก :"+ err.message
        })
    })
}
}