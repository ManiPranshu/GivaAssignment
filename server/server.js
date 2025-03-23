import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import shortid from "shortid";
import URL from "./models/UrlModel.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("✅ MongoDB Connected"))
    .catch(err => console.error("❌ MongoDB Connection Error:", err));

// API to shorten URL
app.post("/shorten", async (req, res) => {
    try {
        const { longUrl, alias } = req.body;
        if (!longUrl) return res.status(400).json({ error: "URL is required" });

        // Check if URL already exists
        let existingUrl = await URL.findOne({ longUrl });

        if (existingUrl) {
            return res.json(existingUrl); // Return existing short URL
        }

        // Generate a new shortCode if alias not provided
        let shortCode = alias || shortid.generate();

        // Ensure alias or generated shortCode is unique
        let shortCodeExists = await URL.findOne({ shortCode });
        while (shortCodeExists) {
            shortCode = shortid.generate();
            shortCodeExists = await URL.findOne({ shortCode });
        }

        // Save new URL entry
        const newUrl = new URL({ longUrl, shortCode });
        await newUrl.save();

        res.json(newUrl);
    } catch (error) {
        console.error("❌ Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// API to redirect
app.get("/:shortCode", async (req, res) => {
    try {
        const { shortCode } = req.params;
        const urlData = await URL.findOne({ shortCode });

        if (!urlData) return res.status(404).json({ error: "Short URL not found" });

        urlData.clicks += 1;
        await urlData.save();

        res.redirect(urlData.longUrl);
    } catch (error) {
        console.error("❌ Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));