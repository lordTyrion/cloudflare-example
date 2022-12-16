import { IPost } from './interfaces';
import { supabase as DB } from '../database/connection';
import { IMsg } from 'src/utils/interfaces';
export class PostService {
  async add(post: IPost): Promise<IPost | IMsg> {
    const { data, error } = await DB.from('posts').insert(post).select();
    if (error) return { msg: error.message };
    const [createdPost] = data;
    return createdPost;
  }

  async edit(post: Partial<IPost>, id: number): Promise<IPost | IMsg> {
    const { data, error } = await DB.from('posts')
      .update(post)
      .eq('id', id)
      .select();
    if (error) return { msg: error.message };
    const [updatedPost] = data;
    return updatedPost;
  }

  async get(id: number): Promise<Array<IPost> | IMsg> {
    const { data, error } = await DB.from('posts').select().eq('id', id);
    if (error) return { msg: error.message };
    return data;
  }

  async getAll(): Promise<Array<IPost> | IMsg> {
    const { data, error } = await DB.from('posts').select();
    if (error) return { msg: error.message };
    return data;
  }

  async delete(id: number): Promise<IMsg> {
    const { data, error } = await DB.from('posts').delete().eq('id', id);
    if (error) throw error;
    return { msg: 'Deleted!' };
  }
}
