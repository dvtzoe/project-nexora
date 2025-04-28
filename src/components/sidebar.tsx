import Link from "next/link";

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
    <div className="bg-bg-secondary text-fg-primary border-neutral flex h-screen w-64 flex-col flex-nowrap overflow-auto border-r">
      {/* Logo */}
      <div className="border-neutral m-4 flex h-16 items-center justify-center border-b-2">
        <Link className="text-fg-primary text-2xl font-bold italic" href="/">
          Project <span className="text-accent">Nexora</span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex flex-grow flex-col gap-2 p-4">
        {navigations.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="text-fg-primary hover:text-fg-tertiary hover:bg-neutral flex items-center rounded-md p-2 font-medium transition-colors duration-300 ease-out"
          >
            <span className="mr-2">
              <item.icon />
            </span>
            {item.name}
          </Link>
        ))}
      </nav>
      <div>
        {/* Auth */}
        <div className="m-4 flex flex-grow flex-col gap-4">
          <Link
            href="/signin"
            className="border-neutral hover:border-fg-secondary hover:text-fg-tertiary rounded-lg border-2 p-1 text-center font-medium transition-colors duration-300 ease-out"
          >
            Sign in
          </Link>
          <Link
            href="/signup"
            className="bg-button hover:bg-button-hover hover:text-fg-tertiary rounded-lg p-1 text-center font-medium transition-colors duration-300 ease-out"
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}
