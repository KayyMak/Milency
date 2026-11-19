import Brand from '@/components/Brand';

export default function AuthShell({ title, description, children, footer }) {
  return (
    <div className="min-h-screen bg-paper lg:grid lg:grid-cols-2">
      <div className="flex min-h-screen flex-col px-5 py-6 sm:px-8 lg:px-12 lg:py-8">
        <header><Brand /></header>
        <main className="mx-auto flex w-full max-w-md flex-1 flex-col justify-center py-16">
          <h1 className="text-5xl font-light tracking-[-0.065em] text-ink sm:text-6xl">{title}</h1>
          {description && <p className="mt-5 max-w-sm text-base leading-relaxed text-muted">{description}</p>}
          <div className="mt-10">{children}</div>
          <div className="mt-9 text-sm text-muted">{footer}</div>
        </main>
      </div>
      <aside className="relative hidden min-h-screen overflow-hidden bg-[#dce3d4] lg:block" aria-hidden="true">
        <div className="absolute -right-64 -top-64 size-[48rem] rounded-full border border-white/50" />
        <div className="absolute -bottom-60 -left-48 size-[42rem] rounded-full border border-white/60" />
        <div className="absolute left-1/2 top-[-15%] h-[130%] w-28 -rotate-[28deg] rounded-full border border-dashed border-white/70" />
      </aside>
    </div>
  );
}
