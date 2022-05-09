const getPosts: (start?: string, end?: string) => Promise<any> = async (
  start,
  end
) => {
  const user = await fetch(`${process.env.HOST}/api/posts`);
  const data = await user.json();

  if (!start) return data;

  if (!end) return data.posts.filter((el: any) => el._id.toString() === start);

  return data.posts.filter(
    (el: any) => el._id.toString() >= start && el._id.toString() <= end
  );
};

export default getPosts;
