import UserRollcallPosts from "./UserRollcallPosts";

export default function UserRollcallPostsContainer({ user }){

    const mappedRollCalls = user.rollCallPosts.map((post) => <UserRollcallPosts key={post.id} photo={post.photo} />)
    
    return (
        <>
            {mappedRollCalls}
        </>
    );
};