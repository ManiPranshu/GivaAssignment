import mongoose from "mongoose";

const UrlSchema = new mongoose.Schema({
    longUrl: { type: String, required: true },
    shortCode: { type: String, unique: true },
    clicks: { type: Number, default: 0 }
});

export default mongoose.model("URL", UrlSchema);
