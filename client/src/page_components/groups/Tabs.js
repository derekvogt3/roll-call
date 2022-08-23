function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Tabs({ tabs, pageNav, setPageNav }) {
  return (
    <div>
      <div className="block">
        <nav className="flex space-x-4" aria-label="Tabs">
          {tabs.map((tab) => (
            <div
              key={tab.name}
              onClick={() => setPageNav(tab.nav)}
              className={classNames(
                tab.nav === pageNav
                  ? "bg-indigo-100 text-indigo-700"
                  : "text-gray-500 hover:text-gray-700",
                "px-3 py-2 font-medium text-sm rounded-md"
              )}
            >
              {tab.name}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}
