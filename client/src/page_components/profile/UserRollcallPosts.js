export default function UserRollcallPostsContainer({ photo }) {
  return (
    <li>
      <img className="w-32 h-32 mx-auto" src={photo} alt="A rollcall post" />
    </li>
  );
}
