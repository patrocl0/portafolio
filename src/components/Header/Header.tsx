import { Navigation } from "../Navigation/Navigation";

export const Header = () => {
  return (
    <section id="Header">
      <div className="fixed top-0 w-full inset-x-0 z-50 backdrop-blur-lg border-b border-white/5">
        <Navigation />
      </div>
    </section>
  );
};
