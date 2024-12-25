import * as React from "react";
import { Logo } from "@/components/icons/Logo";
import { cn } from "@/lib/utils";
import { Notes } from "@/components/icons/Notes";
import { Info } from "@/components/icons/Info";
import { Down } from "@/components/icons/Down";
import { Badge } from "../Badge";
import { Button } from "../ui/Button";

const NavLink = ({
  text,
  to = "/",
  active = false,
}: {
  text: string;
  to?: string;
  active?: boolean;
}) => {
  return (
    <li
      className={`text-body-regular border-b-4 grid place-items-center ${active ? "border-primary-500" : "border-transparent"} first-letter:capitalize text-gray-500 h-full ${active && " font-bold text-primary-500"}`}
    >
      <span>
        <a href={to}>{text}</a>
      </span>
    </li>
  );
};

const NotesCounter = ({
  notesLeft,
  className = "",
}: {
  notesLeft: number;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        `flex text-body-regular text-gray-500 items-center gap-2`,
        className
      )}
    >
      <Notes />
      <span> {notesLeft} notes left</span>
      <Info />
    </div>
  );
};

const Avatar = ({ letter }: { letter: string }) => {
  return (
    <div className=" w-11 h-11 bg-secondary-100 rounded-full grid place-items-center capitalize">
      <span>{letter}</span>
    </div>
  );
};

const UserProfile = ({ name }: { name: string }) => {
  return (
    <div className="flex gap-1 items-center">
      <Avatar letter={name.charAt(0)} />
      <span>
        <Down />
      </span>
    </div>
  );
};

export const NavigationBar: React.FC = () => {
  const navLinks = [
    { text: "New notes", active: true },
    { text: "Clients" },
    { text: "Clinicians" },
    { text: "Templates" },
  ];

  return (
    <section className="grid place-items-center h-16 bg-white">
      <nav className="container flex h-full justify-between items-center">
        <div className="flex items-center justify-between gap-4">
          <Logo />
          <Badge type="pro" className=" capitalize" />
        </div>

        <div className="h-full max-lg:hidden">
          <ul className=" list-none flex items-stretch gap-8 h-full justify-between">
            {navLinks.map((link, index) => (
              <NavLink key={index} text={link.text} active={link.active} />
            ))}
            <div className="flex items-center">
              <span className="bg-gradient-to-r from-primary-500 to-primary-300 rounded-full px-4 py-2 inline-block text-transparent bg-clip-text">
                Earn $80
              </span>
            </div>
          </ul>
        </div>

        <div className="flex items-center gap-4">
          <NotesCounter notesLeft={12} className="max-sm:hidden" />
          <Button variant={"action"}>Become SUPER</Button>
          <UserProfile name="Morris Doe" />
        </div>
      </nav>
    </section>
  );
};
