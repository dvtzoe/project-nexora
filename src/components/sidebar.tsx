import HomeIcon from "@/assets/icons/home";

const navigations = [
  {
    name: "Home",
    icon: HomeIcon,
    href: "/",
  },
];

export default function Sidebar() {
  return (
    <div className="bg-bg-secondary text-fg-primary border-neutral flex h-screen w-64 flex-col border-r">
      {/* Logo */}
      <div className="border-neutral m-4 flex h-16 items-center justify-center border-b-2">
        <a className="text-fg-primary text-2xl font-bold italic" href="/">
          Project <span className="text-accent">Nexus</span>
        </a>
      </div>

      {/* Navigation */}
      <nav className="flex flex-grow flex-col gap-2 p-4">
        {navigations.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="text-fg-primary hover:text-fg-tertiary hover:bg-neutral flex items-center rounded-md p-2 font-medium transition-colors duration-300 ease-out"
          >
            <span className="mr-2">
              <item.icon />
            </span>
            {item.name}
          </a>
        ))}
      </nav>
    </div>
  );
}
