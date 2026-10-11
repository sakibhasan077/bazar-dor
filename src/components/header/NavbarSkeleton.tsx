const NavbarSkeleton = () => {
  return (
    <header className="w-full animate-pulse border-b border-gray-100 bg-white">
      <div className="mx-auto flex min-h-[72px] max-w-6xl items-center justify-between px-4">
        {/* Left: Logo and site information */}
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-12 items-center justify-center rounded-md bg-gray-200">
            <div className="h-5 w-5 rounded bg-gray-300" />
          </div>

          <div className="space-y-2">
            {/* Website name */}
            <div className="h-5 w-20 rounded bg-gray-200" />

            {/* Date */}
            <div className="h-3 w-32 rounded bg-gray-200" />
          </div>
        </div>

        {/* Right: User profile */}
        <div className="flex items-center gap-2">
          {/* Profile image */}
          <div className="h-10 w-10 rounded-full bg-gray-200" />

          {/* User name */}
          <div className="h-4 w-28 rounded bg-gray-200" />

          {/* Dropdown arrow */}
          <div className="h-3 w-3 rounded-sm bg-gray-200" />
        </div>
      </div>
    </header>
  );
};

export default NavbarSkeleton;