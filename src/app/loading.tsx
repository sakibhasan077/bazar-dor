

const Loading = () => {
  return (
    <div className="mx-auto max-w-7xl p-4">
      <div className="mb-6 h-8 w-56 animate-pulse rounded bg-gray-200" />

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="animate-pulse rounded-xl border border-gray-200 p-3"
          >
            <div className="aspect-square rounded-lg bg-gray-200" />

            <div className="mt-4 h-4 w-3/4 rounded bg-gray-200" />

            <div className="mt-2 h-3 w-1/2 rounded bg-gray-200" />

            <div className="mt-4 h-6 w-1/3 rounded bg-gray-200" />

            <div className="mt-4 h-10 w-full rounded-lg bg-gray-200" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loading;