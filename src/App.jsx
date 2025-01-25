import { Button } from "@heroui/react";

export const App = () => {
  return (
    <div className="bg-gray-100 h-screen flex flex-col gap-5 items-center justify-center">
      <h1 className="font-bold text-2xl">React + TailwindCSS + HeroUI</h1>
      <Button size="lg" color="primary" className="font-semibold">
        Button
      </Button>
    </div>
  );
};
