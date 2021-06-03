import mongoose, { mongo, Schema } from 'mongoose';

type Video = {
  title: string;
  description: string;
  category: string;
}

const VideoSchema = new Schema({
  title: String,
  description: String,
  category: String,
});

export default mongoose.model<Video>('Video', VideoSchema);
