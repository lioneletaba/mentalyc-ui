export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="grid place-items-center">
      <div className="container flex items-center">{children}</div>
    </section>
  );
};
