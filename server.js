// Global Requirements
const mysql = require('mysql2');
const { nanoid } = require('nanoid');
const express = require('express');

const PORT = process.env.PORT || 3001;

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Running at http://localhost:${PORT}`)
});

