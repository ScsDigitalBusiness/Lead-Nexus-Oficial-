const Process = require("../models/ProcessModel");
exports.createProcess = async (req, res) => {
  const process = new Process(req.body);
  await process.create();
  res.redirect("back");
}
exports.deleteProcess = async (req, res) => {
  const process = new Process(req.body);
  await process.delete(req.params.id);
  res.redirect("back");
}