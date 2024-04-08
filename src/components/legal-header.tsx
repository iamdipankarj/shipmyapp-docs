interface LegalHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
}

export function LegalHeader({
  children,
  ...props
}: LegalHeaderProps) {
  return (
    <section className="pt-36 pb-24 bg-slate-100" {...props}>
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="md:text-5xl/tight text-3xl font-semibold mb-6">
            {children}
          </h2>
        </div>
      </div>
    </section>
  )
}