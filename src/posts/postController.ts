import { Hono } from 'hono';
import { ECODE } from 'src/utils/constants';
import { handleResponse } from 'src/utils/helper';
import { IPost } from './interfaces';
import { PostService } from './postServices';

const PostController = new Hono();
const postService = new PostService();

PostController.get('/:id', async (c) => {
  const id = parseInt(c.req.param('id'));
  return c.json(
    handleResponse({
      status: ECODE.OK,
      message: await postService.get(id),
    }),
  );
});

PostController.get('/', async (c) => {
  return c.json(
    handleResponse({
      status: ECODE.OK,
      message: await postService.getAll(),
    }),
  );
});

PostController.post('/', async (c) => {
  const post: IPost = await c.req.json();

  return c.json(
    handleResponse({
      status: ECODE.OK,
      message: await postService.add(post),
    }),
  );
});

PostController.put('/:id', async (c) => {
  const post: IPost = await c.req.json();
  const id = parseInt(c.req.param('id'));
  post.modified_at = 'NOW()';
  return c.json(
    handleResponse({
      status: ECODE.OK,
      message: await postService.edit(post, id),
    }),
  );
});

PostController.delete('/:id', async (c) => {
  const id = parseInt(c.req.param('id'));

  return c.json(
    handleResponse({
      status: ECODE.OK,
      message: await postService.delete(id),
    }),
  );
});

export { PostController };
