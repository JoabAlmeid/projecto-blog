import { PostModel } from "@/src/models/post/post-model";

export interface PostRepository {
  //retorna uma promise que precisa retornar um array de posts
  findAll(): Promise<PostModel[]>;
  findById(id: string): Promise<PostModel | undefined>;
}
