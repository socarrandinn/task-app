import { TaskContainer } from "@/components/task/task-container";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-8 w-full max-w-[1360px]  mx-auto">

      <TaskContainer />


    </main>
  );
}
