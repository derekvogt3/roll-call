import { UserGroupIcon } from "@heroicons/react/solid";
import Member from "./Member";
import Tabs from "./Tabs";
import { useState } from "react";
import Members from "./Members";
import Settings from "./Settings";
import GroupChat from "./GroupChat";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import RollCallsGroup from "./rollcalls/RollCallsGroup";

const tabs = [
  { name: "Roll Cals", nav: 0 },
  { name: "Members", nav: 1 },
  // { name: "Chat", nav: 2 },
  { name: "Settings", nav: 3 },
];

export default function GroupFocus() {
  let { groupId } = useParams();
  const [pageNav, setPageNav] = useState(0);
  const [group, setGroup] = useState({});
  const [loadingGroups, setloadingGroups] = useState(true);

  useEffect(() => {
    fetch("/groups/" + groupId)
      .then((res) => res.json())
      .then((data) => {
        console.log("here");
        console.log(data);
        setGroup(data);
      });
  }, []);

  function shownPage() {
    if (pageNav === 0) {
      return <RollCallsGroup group={group} loadingGroups={loadingGroups} />;
    } else if (pageNav === 1) {
      return <Members group={group} />;
      // } else if (pageNav === 2) {
      //   return <GroupChat group={group} />;
    } else if (pageNav === 3) {
      return <Settings group={group} />;
    }
  }

  return (
    <div className="p-2">
      <Tabs tabs={tabs} pageNav={pageNav} setPageNav={setPageNav} />
      {shownPage()}
    </div>
  );
}
