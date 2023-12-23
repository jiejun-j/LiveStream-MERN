import mongoose from "mongoose";
import { v4 as uuid } from "uuid";

const { Schema } = mongoose;

const defaultTitle = "New Channel";
const defaultDescription = "Welcome to my channel!";

const channelSchema = new Schema({
    isActive: { type: Boolean, default: false },
    title: { type: String, default: defaultTitle },
    description: { type: String, default: defaultDescription },
    avatarUrl: { type: String, default: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.0/c_scale,w_1200/ncom/software/switch/70010000027619/9989957eae3a6b545194c42fec2071675c34aadacd65e6b33fdfe7b3b6a86c3a" },
    streamKey: { type: String, default: uuid },
    messages: { 
        type: [{ type: Schema.Types.ObjectId, ref: "Message" }],
        default: [],
    },
});

export default mongoose.model("Channel", channelSchema);