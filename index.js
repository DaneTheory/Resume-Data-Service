module.exports = (req, res) => {
  const { name = 'World' } = req.query
  res.status(200).send({ message: `FUCK ${name}!`})
}
