import { ObjectType, Field } from "type-graphql";

@ObjectType()
class Video {
  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  category: string;
}

export { Video };
