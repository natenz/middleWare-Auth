import express from 'express';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken'; 


const generateToken = async (req, res, next) => {
  try {
    // Add any necessary validation or security checks here

    // For example, you might check an API key or some other form of authentication

    // Generate a token without the need for a login
    const dummyAdmin = { username: 'dummy', password: 'dummy123' };
    const jwtToken = await enkriptJwt({ ...dummyAdmin, isAdmin: true }, "1h");

    return res.status(200).json(baseResponse(200, "Success", { token: jwtToken }));
  } catch (error) {
    console.log(error);
    return res.status(400).send(new BadError("Token generation failed"));
  }
};


module.exports = { generateToken };