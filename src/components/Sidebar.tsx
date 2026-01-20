import { Link } from "react-router";
import { navLinks } from "../contants";
import { IconClose } from "../assets/images/images";
import { useEffect } from "react";

type SidebarProps = {
  isOpen: boolean;
  close: () => void;
};

export default function Sidebar({ isOpen, close }: SidebarProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <div
        onClick={close}
        className="md:hidden fixed inset-0 bg-black/40 z-40"
      />

      <aside className="md:hidden z-50 px-6 py-5 w-2/3 h-full absolute top-0 left-0 bg-white shadow-2xl">
        <button onClick={close}>
          <img src={IconClose} />
        </button>
        <div className="mt-10 flex flex-col gap-5">
          {navLinks.map((link) => (
            <Link className="font-semibold" key={link.route} to={link.route}>
              {link.name}
            </Link>
          ))}
        </div>
      </aside>
    </>
  );
}
