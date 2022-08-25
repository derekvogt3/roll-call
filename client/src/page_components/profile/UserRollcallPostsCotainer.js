import UserRollcallPosts from "./UserRollcallPosts";

export default function UserRollcallPostsContainer({ user }) {

  const mappedRollCalls = user.roll_call_posts.map((post) => (
    <UserRollcallPosts key={post.id} photo={post.photo} />
  ));

  return (
    <>
      <ul
        role="list"
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        {mappedRollCalls}
      </ul>
    </>
  );
};
