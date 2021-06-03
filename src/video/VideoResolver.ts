import { Arg, Field, InputType, Mutation, Query, Resolver } from "type-graphql";
import { Video } from "./Video";
import VideoSchema from "./VideoSchema";

@InputType()
class VideoInput {
  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  category: string;
}

@Resolver()
class VideoResolver {
  @Query(() => [Video])
  async videos() {
    const videos = await VideoSchema.find();
    return videos;
  }

  @Mutation(() => Video) 
  async addVideo(
    @Arg('videoInput') videoInput: VideoInput
  ) {
    const video = await VideoSchema.create(videoInput);
    return video;
  }
}

export { VideoResolver };
