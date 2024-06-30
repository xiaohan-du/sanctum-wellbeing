'use client'

interface PriceModalProps {
  toggleModal: () => void;
  title: string;
  time: string;
  price: string;
  description: string[];
}

export const PriceModal: React.FC<PriceModalProps> = ({ toggleModal, title, time, price, description }) => {
  return (
    <div tabIndex={-1} aria-hidden="true" className="
      overflow-hidden 
      backdrop-blur 
      fixed 
      top-0 
      right-0 
      left-0 
      z-50 
      justify-center 
      items-center 
      w-full 
      md:inset-0 
      h-full
      max-h-full
      flex
      overscroll-none
      font-sans font-normal tracking-wide"
    >
      <div className="p-4 w-full max-w-4xl max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 p-12">
          <div className="flex items-start justify-start md:p-5 border-b rounded-t dark:border-gray-600">
            <div className="w-full">
              <h3 className="text-4xl flex w-full justify-between p-4 font-semibold text-gray-900 dark:text-white">
                <span className="w-4/5">{title}</span>
                <button type="button" className="
                  text-gray-400 
                  bg-gray-200 
                  hover:text-gray-900 
                  rounded-lg 
                  text-sm 
                  w-10
                  h-10
                  ms-auto 
                  inline-flex 
                  justify-center 
                  items-center 
                  dark:hover:bg-gray-600 
                  dark:hover:text-white"
                  onClick={toggleModal}
                >
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </h3>
              <div className="flex p-4 flex-col justify-start border-t w-full items-start rounded-b text-gray-600">
                <p>{time}</p>
                <p className="text-2xl">{price}</p>
              </div>
            </div>

          </div>
          <div className="p-4 md:p-5 space-y-4">
            <p className="text-xl leading-relaxed text-gray-800 dark:text-gray-400">
              {description}
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}
