const multerController = async (req, res) => {
    const { filename } = req.file
    return res.status(200).json({
        file: req.file
    })
}

module.exports = multerController
