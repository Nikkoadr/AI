const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static("public"));

app.post("/absen", (req, res) => {
  const { name, time } = req.body;
  const log = `[${new Date().toLocaleDateString()} ${time}] ${name} hadir\n`;
  fs.appendFileSync("absensi.log", log);
  console.log("✅ Dicatat:", log.trim());
  res.status(200).json({ success: true });
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
