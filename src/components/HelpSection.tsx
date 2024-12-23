import { Help } from "./icons/help";

export const HelpSection = () => {
  return (
    <section className="my-4 grid place-items-center">
      <div className="container flex justify-end items-center">
        <h5 className=" inline-flex gap-2 text-small-regular text-primary-500">
          <Help />
          <span>Help</span>
        </h5>
      </div>
    </section>
  );
};
