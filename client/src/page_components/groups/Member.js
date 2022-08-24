/* This example requires Tailwind CSS v2.0+ */
import { MailIcon, PhoneIcon } from "@heroicons/react/solid";

export default function Member({ user }) {
  return (
    <li
      key={user.username}
      className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200"
    >
      <div className="flex-1 flex flex-col p-8">
        {user.avatar_url ? (
          <img
            className="w-32 h-32 flex-shrink-0 mx-auto rounded-full"
            src={user.avatar_url}
            alt=""
          />
        ) : (
          <span className="h-32 w-32  mx-auto rounded-full overflow-hidden bg-gray-100">
            <svg
              className="h-full w-full text-gray-300"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </span>
        )}

        <h3 className="mt-6 text-gray-900 text-sm font-medium">
          {user.username}
        </h3>
      </div>
    </li>
  );
}
