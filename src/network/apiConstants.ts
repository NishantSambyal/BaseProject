export const apiConstants = {
  posts: '/posts',
};

export const apiMethods = (extraData?: string) => {
  return {
    posts: `/posts/${extraData}`,
    another: `/posts/${extraData}`,
  };
};
