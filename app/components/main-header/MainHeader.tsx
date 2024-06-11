import DarkMode from "./DarkMode";

export default function MainHeader() {
  return (
    <header
      className="flex justify-between items-center gap-4 
    shadow-xl px-4 py-8 text-sm md:text-lg md:px-12 md:py-4 dark:bg-slate-800 dark:text-white dark:shadow-2xl
    tansition-all duration-500 ease-in-out"
    >
      <div className="font-bold">Where In The World?</div>
      <DarkMode />
    </header>
  );
}
