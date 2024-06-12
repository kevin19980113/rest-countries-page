import { AiOutlineLoading } from "react-icons/ai";

export default function Loading() {
  return (
    <div className="w-full min-h-screen relative flex justify-center items-center">
      <div className="absolute inset-0 dark:bg-darkPrimary-900 -z-10 bg-primary"></div>
      <AiOutlineLoading className="size-48 animate-spin" />
    </div>
  );
}
