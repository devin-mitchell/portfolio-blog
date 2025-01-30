const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

export function ImgSkeleton() {
  return (
    <div
      className={`${shimmer} relative overflow-hidden rounded-xl bg-zinc-300 p-2 shadow-sm w-full h-full`}
    />
  );
}


