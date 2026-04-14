'use client'

export interface PriceTier {
  label?: string;
  time: string;
  price: string;
}

interface PriceModalProps {
  toggleModal: () => void;
  title: string;
  tiers: PriceTier[];
  description: string[];
}

export const PriceModal: React.FC<PriceModalProps> = ({
  toggleModal,
  title,
  tiers,
  description,
}) => {
  return (
    <div
      aria-modal="true"
      role="dialog"
      aria-labelledby="price-modal-title"
      className="
      backdrop-blur 
      fixed 
      inset-0 
      z-50 
      justify-center 
      items-center 
      w-full 
      h-full
      max-h-full
      overflow-y-auto
      flex
      font-sans font-normal tracking-wide
      bg-black/20"
      onClick={toggleModal}
    >
      <div
        className="p-4 w-full max-w-4xl xl:max-w-3xl xl:max-w-2xl sm:max-w-sm max-h-full"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative bg-white rounded-lg shadow p-12 xl:p-8 sm:p-2">
          <div className="flex items-start justify-start border-b rounded-t">
            <div className="w-full">
              <h3
                id="price-modal-title"
                className="text-4xl xl:text-3xl sm:text-xl flex w-full justify-between p-4 font-semibold text-gray-900"
              >
                <span className="w-4/5 pr-2">{title}</span>
                <button
                  type="button"
                  className="
                  text-gray-400 
                  bg-gray-200 
                  hover:text-gray-900 
                  rounded-lg 
                  text-sm 
                  w-10
                  h-10
                  ms-auto 
                  shrink-0
                  inline-flex 
                  justify-center 
                  items-center"
                  onClick={toggleModal}
                >
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </h3>
              <div className="flex flex-col gap-3 p-4 border-t">
                {tiers.map((tier, i) => (
                  <div
                    key={i}
                    className="rounded-lg border border-gray-100 bg-gray-50/80 px-4 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1"
                  >
                    <div>
                      {tier.label ? (
                        <p className="text-sm font-semibold text-gray-900">{tier.label}</p>
                      ) : null}
                      <p className="text-gray-600 text-sm sm:text-base">{tier.time}</p>
                    </div>
                    <p className="text-2xl xl:text-xl sm:text-base font-normal text-gray-900 shrink-0">
                      {tier.price}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="p-4 md:p-5 space-y-4">
            <div className="text-xl xl:text-base sm:text-sm leading-relaxed sm:leading-tight text-gray-800">
              {description?.map((c, i) => (
                <p key={i} className="mt-2 first:mt-0">
                  {c}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
