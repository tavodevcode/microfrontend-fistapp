import { NavMenu } from "./nav-menu";
import { Button } from "./ui/button";

export const Navbar = () => {
  return (
    <section className="w-screen h-auto flex justify-between items-center px-10 py-4 bg-slate-50">
      <img src="/tavoweb.png" alt="tavoweb logo" width={150} height="auto" />
      <NavMenu />
      <div className="">
        <Button variant="outline" size="lg">
          Sign out
        </Button>
      </div>
    </section>
  );
};
