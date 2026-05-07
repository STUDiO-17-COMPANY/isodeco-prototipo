export const ProductsFlowView = () => (
  <div className="bg-stone-50 rounded-lg border border-stone-200 shadow-sm flex-1 overflow-hidden p-8 flex items-center justify-center relative">
    <div className="absolute inset-0 bg-[radial-gradient(#d6d3d1_1px,transparent_1px)] [background-size:16px_16px] opacity-30" />

    <div className="relative z-10 flex flex-col items-center gap-8 w-full max-w-4xl">
      <div className="bg-stone-900 text-white font-bold px-6 py-3 rounded-md shadow-md z-10">
        Categorias ISODECO
      </div>

      <div className="flex gap-16 md:gap-32 relative w-full justify-center">
        <div className="absolute top-[-32px] left-1/2 w-px h-8 bg-stone-300" />
        <div className="absolute top-[-16px] left-[25%] right-[25%] h-px bg-stone-300" />
        <div className="absolute top-[-16px] left-[25%] w-px h-4 bg-stone-300" />
        <div className="absolute top-[-16px] right-[25%] w-px h-4 bg-stone-300" />

        <div className="flex flex-col items-center gap-8 relative w-1/2">
          <div className="bg-white border border-stone-300 px-6 py-3 rounded-md shadow-sm font-medium z-10 text-center">
            Painéis Ripados
          </div>

          <div className="flex flex-col items-center gap-6 relative w-full px-4">
            <div className="absolute top-[-32px] left-1/2 w-px h-8 bg-stone-300" />

            <div className="bg-white border border-brand-500 text-brand-500 px-4 py-3 rounded-md shadow-sm font-bold z-10 w-full text-center text-sm">
              Carvalho Natural (SKU: RIP-CARV)
            </div>

            <div className="absolute top-[100%] left-1/2 w-px h-6 border-l-2 border-dashed border-stone-300" />

            <div className="bg-sky-50 border border-sky-200 text-sky-800 px-4 py-3 rounded-md shadow-sm font-medium z-10 w-full text-center text-xs mt-6">
              Acessório: Cola High Tack
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-8 relative w-1/2">
          <div className="bg-white border border-stone-300 px-6 py-3 rounded-md shadow-sm font-medium z-10 text-center">
            Pavimentos SPC
          </div>
        </div>
      </div>
    </div>
  </div>
)
