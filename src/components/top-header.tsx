import { ModeToggle } from "./mode-toggle";

export function TopHeader() {
  return (
    <header className="flex p-5 justify-center relative">
      {/* <h1 className="text-3xl font-bold">RoomFlex</h1> */}
      <div className="absolute top-0.5 pt-5 right-10">
        <ModeToggle />
      </div>
    </header>
  );
}
