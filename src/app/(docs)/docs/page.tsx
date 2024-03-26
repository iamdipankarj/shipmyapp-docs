export default async function Documentation() {
  return (
    <div>
      <div className="overflow-y-auto overflow-x-visible pb-12 transform -translate-x-full fixed z-40 flex h-full flex-col justify-between border-r border-base-content/10 bg-base-100 p-4 transition-all sm:w-64 sm:translate-x-0">
        <div className="grid gap-2 pb-4">
          <div className="flex items-center space-x-2 rounded-lg">
            <a className="rounded-lg p-2 hover:bg-hover cursor-pointer" href="/">
              <img
                alt="ShipFast Logo"
                loading="lazy"
                width={24}
                height={24}
                decoding="async"
                data-nimg={1}
                className="scale-110"
                style={{ color: "transparent" }}
                srcSet="/_next/image?url=%2Flogo_transparent.png&w=32&q=75 1x, /_next/image?url=%2Flogo_transparent.png&w=48&q=75 2x"
                src="/_next/image?url=%2Flogo_transparent.png&w=48&q=75"
              />
            </a>
          </div>
          <div className="py-1.5">
            <div className="relative z-30" data-headlessui-state="">
              <button
                className="flex w-full max-w-xs items-center justify-between gap-2 cursor-pointer hover:bg-base-200  duration-150 rounded-lg overflow-hidden pr-2"
                type="button"
                aria-expanded="false"
                data-headlessui-state=""
                id="headlessui-popover-button-:R5j36:"
              >
                <div className="text-left text-sm flex items-center gap-2 p-2 cursor-pointer hover:bg-base-200 duration-200">
                  <div className="rounded-md border border-blue-400 bg-gradient-to-b from-base-content to-blue-400 p-1.5 text-blue-700">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      shapeRendering="geometricPrecision"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
                      <path d="M3.27 6.96L12 12.01l8.73-5.05" />
                      <path d="M12 22.08V12" />
                    </svg>
                  </div>
                  <div className="">
                    <p className="font-semibold text-sm">App Router</p>
                    <p className="opacity-70 text-xs">Features in /app</p>
                  </div>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 duration-200 "
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div
              style={{
                position: "fixed",
                top: 1,
                left: 1,
                width: 1,
                height: 0,
                padding: 0,
                margin: "-1px",
                overflow: "hidden",
                clip: "rect(0, 0, 0, 0)",
                whiteSpace: "nowrap",
                borderWidth: 0,
                display: "none"
              }}
            />
          </div>
          <div className="grid gap-1">
            <div>
              <a
                className="flex items-center space-x-3 text-base-content/50 rounded-lg px-2 py-1.5 transition-all duration-150 ease-in-out  hover:text-base-content  active:text-base-content"
                href="/docs"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={18}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-play"
                >
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
                <span className="text-sm font-semibold">Get started</span>
              </a>
            </div>
            <div>
              <a
                className="flex items-center space-x-3 text-base-content/50 rounded-lg px-2 py-1.5 transition-all duration-150 ease-in-out  hover:text-base-content  active:text-base-content"
                href="/docs/tutorials"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={18}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-book"
                >
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                </svg>
                <span className="text-sm font-semibold">Tutorials</span>
              </a>
              <div className="my-1">
                <a
                  className="ml-[17px] pl-[21px] flex items-center border-l text-sm text-base-content/50 border-l-base-content/10 hover:border-l-base-content/50 py-1.5 transition-all duration-150 ease-in-out hover:text-base-content active:text-base-content active:border-l-base-content flex items-center space-x-3"
                  href="/docs/tutorials/ship-in-5-minutes"
                >
                  <span>Ship in 5 minutes</span>
                  <svg
                    className="w-[15px] h-[15px] fill-accent"
                    viewBox="0 0 53 53"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_309_443)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.74892 23.4418C9.11353 22.5993 11.6019 21.4794 13.5207 19.8582C15.7997 17.9325 16.7266 15.4524 17.349 12.8419C18.1481 9.48791 18.4674 5.91512 19.4363 2.55574C19.7951 1.3082 20.4855 0.836625 20.7818 0.627343C21.5305 0.0987022 22.2874 -0.0426033 22.9995 0.0103967C23.8435 0.0715506 25.0027 0.390888 25.7651 1.80558C25.8738 2.00807 26.0151 2.31657 26.1102 2.73921C26.1795 3.04906 26.2244 4.01799 26.2978 4.41752C26.4812 5.40142 26.6348 6.38535 26.7789 7.37469C27.2586 10.6675 27.5345 13.4642 29.0497 16.4893C31.1059 20.5961 33.1661 23.1089 35.9601 24.2219C38.6618 25.2982 41.892 25.0957 46.0192 24.2518C46.412 24.1567 46.8006 24.0751 47.1852 24.0085C49.0049 23.6905 50.7444 24.8851 51.1018 26.6979C51.4592 28.5095 50.3027 30.2747 48.4994 30.6729C48.123 30.7558 47.7519 30.8346 47.385 30.9067C41.8078 32.2874 35.3513 37.215 31.5991 41.5298C30.4426 42.8602 28.7494 46.5797 27.0221 48.9525C25.7474 50.7028 24.315 51.8566 23.1123 52.2643C22.3065 52.5388 21.627 52.4967 21.0658 52.3581C20.2504 52.157 19.5736 51.7153 19.0545 51.0127C18.7718 50.6281 18.5095 50.113 18.3845 49.4553C18.3247 49.1386 18.3179 48.3342 18.3193 47.97C17.9673 46.7591 17.5365 45.5768 17.2226 44.3551C16.4738 41.4401 15.0047 39.5946 13.2598 37.1566C11.6277 34.8749 9.87464 33.4412 7.30482 32.2969C6.97051 32.2154 4.27294 31.5549 3.32029 31.1757C1.9287 30.6199 1.26549 29.689 1.02495 29.1875C0.6159 28.3368 0.573809 27.5935 0.655347 26.9738C0.776296 26.0592 1.18671 25.2765 1.91512 24.6445C2.3663 24.2518 3.04036 23.8699 3.94272 23.6837C4.63987 23.5383 6.48935 23.4541 6.74892 23.4418ZM22.5742 18.6908C22.6992 18.9694 22.8324 19.2494 22.9737 19.5321C25.9852 25.5469 29.3528 28.9049 33.446 30.5343L33.5833 30.5873C30.8449 32.6203 28.3661 34.8925 26.4717 37.071C25.6917 37.9679 24.6589 39.8311 23.5432 41.7418C22.5294 38.4463 20.8714 36.117 18.7868 33.202C17.194 30.9774 15.5252 29.3031 13.4745 27.9387C15.0659 27.122 16.5838 26.1652 17.9061 25.0482C20.1077 23.1877 21.5631 21.0323 22.5742 18.6908Z"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_309_443">
                        <rect width={53} height={53} fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
                <a
                  className="ml-[17px] pl-[21px] flex items-center border-l text-sm text-base-content/50 border-l-base-content/10 hover:border-l-base-content/50 py-1.5 transition-all duration-150 ease-in-out hover:text-base-content active:text-base-content active:border-l-base-content flex items-center space-x-3"
                  href="/docs/tutorials/static-page"
                >
                  <span>Static page</span>
                </a>
                <a
                  className="ml-[17px] pl-[21px] flex items-center border-l text-sm text-base-content/50 border-l-base-content/10 hover:border-l-base-content/50 py-1.5 transition-all duration-150 ease-in-out hover:text-base-content active:text-base-content active:border-l-base-content flex items-center space-x-3"
                  href="/docs/tutorials/user-auth"
                >
                  <span>User authentification</span>
                </a>
                <a
                  className="ml-[17px] pl-[21px] flex items-center border-l text-sm text-base-content/50 border-l-base-content/10 hover:border-l-base-content/50 py-1.5 transition-all duration-150 ease-in-out hover:text-base-content active:text-base-content active:border-l-base-content flex items-center space-x-3"
                  href="/docs/tutorials/api-call"
                >
                  <span>API call</span>
                </a>
                <a
                  className="ml-[17px] pl-[21px] flex items-center border-l text-sm text-base-content/50 border-l-base-content/10 hover:border-l-base-content/50 py-1.5 transition-all duration-150 ease-in-out hover:text-base-content active:text-base-content active:border-l-base-content flex items-center space-x-3"
                  href="/docs/tutorials/private-page"
                >
                  <span>Private page</span>
                </a>
                <a
                  className="ml-[17px] pl-[21px] flex items-center border-l text-sm text-base-content/50 border-l-base-content/10 hover:border-l-base-content/50 py-1.5 transition-all duration-150 ease-in-out hover:text-base-content active:text-base-content active:border-l-base-content flex items-center space-x-3"
                  href="/docs/tutorials/subscriptions"
                >
                  <span>Stripe Subscriptions</span>
                </a>
                <a
                  className="ml-[17px] pl-[21px] flex items-center border-l text-sm text-base-content/50 border-l-base-content/10 hover:border-l-base-content/50 py-1.5 transition-all duration-150 ease-in-out hover:text-base-content active:text-base-content active:border-l-base-content flex items-center space-x-3"
                  href="/docs/tutorials/privacy-policy-gpt"
                >
                  <span>Privacy policy with GPT</span>
                </a>
              </div>
            </div>
            <div>
              <a
                className="flex items-center space-x-3 text-base-content  rounded-lg px-2 py-1.5 transition-all duration-150 ease-in-out  hover:text-base-content  active:text-base-content"
                href="/docs/features"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={18}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-pocket-knife"
                >
                  <path d="M3 2v1c0 1 2 1 2 2S3 6 3 7s2 1 2 2-2 1-2 2 2 1 2 2" />
                  <path d="M18 6h.01" />
                  <path d="M6 18h.01" />
                  <path d="M20.83 8.83a4 4 0 0 0-5.66-5.66l-12 12a4 4 0 1 0 5.66 5.66Z" />
                  <path d="M18 11.66V22a4 4 0 0 0 4-4V6" />
                </svg>
                <span className="text-sm font-semibold">Features</span>
              </a>
              <div className="my-1">
                <a
                  className="ml-[17px] pl-[21px] flex items-center border-l text-sm text-base-content/50 border-l-base-content/10 hover:border-l-base-content/50 py-1.5 transition-all duration-150 ease-in-out hover:text-base-content active:text-base-content active:border-l-base-content flex items-center space-x-3"
                  href="/docs/features/seo"
                >
                  <span>SEO</span>
                </a>
                <a
                  className="ml-[17px] pl-[21px] flex items-center border-l text-sm text-base-content/50 border-l-base-content/10 hover:border-l-base-content/50 py-1.5 transition-all duration-150 ease-in-out hover:text-base-content active:text-base-content active:border-l-base-content flex items-center space-x-3"
                  href="/docs/features/database"
                >
                  <span>Database</span>
                </a>
                <a
                  className="ml-[17px] pl-[21px] flex items-center border-l text-sm text-base-content/50 border-l-base-content/10 hover:border-l-base-content/50 py-1.5 transition-all duration-150 ease-in-out hover:text-base-content active:text-base-content active:border-l-base-content flex items-center space-x-3"
                  href="/docs/features/emails"
                >
                  <span>Emails</span>
                </a>
                <a
                  className="ml-[17px] pl-[21px] flex items-center border-l text-sm text-base-content border-base-content py-1.5 transition-all duration-150 ease-in-out hover:text-base-content active:text-base-content active:border-l-base-content flex items-center space-x-3"
                  href="/docs/features/payments"
                >
                  <span>Payments</span>
                </a>
                <a
                  className="ml-[17px] pl-[21px] flex items-center border-l text-sm text-base-content/50 border-l-base-content/10 hover:border-l-base-content/50 py-1.5 transition-all duration-150 ease-in-out hover:text-base-content active:text-base-content active:border-l-base-content flex items-center space-x-3"
                  href="/docs/features/google-oauth"
                >
                  <span>Google Oauth</span>
                </a>
                <a
                  className="ml-[17px] pl-[21px] flex items-center border-l text-sm text-base-content/50 border-l-base-content/10 hover:border-l-base-content/50 py-1.5 transition-all duration-150 ease-in-out hover:text-base-content active:text-base-content active:border-l-base-content flex items-center space-x-3"
                  href="/docs/features/magic-links"
                >
                  <span>Magic Links</span>
                </a>
                <a
                  className="ml-[17px] pl-[21px] flex items-center border-l text-sm text-base-content/50 border-l-base-content/10 hover:border-l-base-content/50 py-1.5 transition-all duration-150 ease-in-out hover:text-base-content active:text-base-content active:border-l-base-content flex items-center space-x-3"
                  href="/docs/features/customer-support"
                >
                  <span>Customer support</span>
                </a>
                <a
                  className="ml-[17px] pl-[21px] flex items-center border-l text-sm text-base-content/50 border-l-base-content/10 hover:border-l-base-content/50 py-1.5 transition-all duration-150 ease-in-out hover:text-base-content active:text-base-content active:border-l-base-content flex items-center space-x-3"
                  href="/docs/features/error-handling"
                >
                  <span>Error handling</span>
                </a>
                <a
                  className="ml-[17px] pl-[21px] flex items-center border-l text-sm text-base-content/50 border-l-base-content/10 hover:border-l-base-content/50 py-1.5 transition-all duration-150 ease-in-out hover:text-base-content active:text-base-content active:border-l-base-content flex items-center space-x-3"
                  href="/docs/features/analytics"
                >
                  <span>Analytics</span>
                </a>
              </div>
            </div>
            <div>
              <a
                className="flex items-center space-x-3 text-base-content/50 rounded-lg px-2 py-1.5 transition-all duration-150 ease-in-out  hover:text-base-content  active:text-base-content"
                href="/docs/components"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={18}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-blocks"
                >
                  <rect width={7} height={7} x={14} y={3} rx={1} />
                  <path d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3" />
                </svg>
                <span className="text-sm font-semibold">Components</span>
              </a>
              <div className="my-1">
                <a
                  className="ml-[17px] pl-[21px] flex items-center border-l text-sm text-base-content/50 border-l-base-content/10 hover:border-l-base-content/50 py-1.5 transition-all duration-150 ease-in-out hover:text-base-content active:text-base-content active:border-l-base-content flex items-center space-x-3"
                  href="/docs/components/header"
                >
                  <span>Header</span>
                </a>
                <a
                  className="ml-[17px] pl-[21px] flex items-center border-l text-sm text-base-content/50 border-l-base-content/10 hover:border-l-base-content/50 py-1.5 transition-all duration-150 ease-in-out hover:text-base-content active:text-base-content active:border-l-base-content flex items-center space-x-3"
                  href="/docs/components/hero"
                >
                  <span>Hero</span>
                </a>
                <a
                  className="ml-[17px] pl-[21px] flex items-center border-l text-sm text-base-content/50 border-l-base-content/10 hover:border-l-base-content/50 py-1.5 transition-all duration-150 ease-in-out hover:text-base-content active:text-base-content active:border-l-base-content flex items-center space-x-3"
                  href="/docs/components/problem"
                >
                  <span>Problem</span>
                </a>
                <a
                  className="ml-[17px] pl-[21px] flex items-center border-l text-sm text-base-content/50 border-l-base-content/10 hover:border-l-base-content/50 py-1.5 transition-all duration-150 ease-in-out hover:text-base-content active:text-base-content active:border-l-base-content flex items-center space-x-3"
                  href="/docs/components/withwithout"
                >
                  <span>WithWithout</span>
                  <svg
                    className="w-[20px] h-[20px] fill-accent rotate-3"
                    viewBox="0 0 86 64"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M19.8165 47.7616C19.4904 47.4415 19.1619 47.1214 18.8311 46.8037C15.458 43.5703 12.1111 40.3334 8.97093 36.8659C8.21006 36.0262 6.78151 34.397 5.34698 33.5585C4.32096 32.9589 3.25905 32.7081 2.28797 32.8323C1.66925 32.9112 0.765091 33.2229 0.311202 34.409C0.234758 34.6085 0.144001 34.9512 0.108167 35.3884C0.0508339 36.0955 0.106945 37.364 0.124862 37.5396C0.375695 40.0981 0.62652 42.5443 1.08638 45.0754C1.50921 47.4045 1.79826 49.7516 2.25334 52.0772C2.93417 55.5566 3.81092 58.9058 5.08898 62.2192C5.56318 63.4495 6.94753 64.0622 8.17781 63.588C9.4069 63.1138 10.0208 61.7307 9.54664 60.5004C8.37011 57.4486 7.56865 54.3646 6.94276 51.1599C6.49126 48.8558 6.20577 46.529 5.78652 44.2213C5.51418 42.7199 5.32067 41.2496 5.15583 39.7661L5.42937 40.073C8.646 43.6241 12.0705 46.9411 15.5248 50.2521C16.8172 51.4919 18.0654 52.7676 19.3781 53.9871C19.4844 54.1424 19.9753 54.8543 20.2166 55.0979C20.6179 55.5041 21.0515 55.731 21.429 55.8432C22.3881 56.1299 23.3616 56.0236 24.212 54.9486C24.8487 54.1436 25.2153 52.8953 25.1879 51.4047C25.1508 49.3562 24.3733 46.6556 24.2085 45.411C23.1645 37.536 21.4756 29.6921 21.0265 21.7491C20.9524 20.4328 19.8237 19.4246 18.5074 19.4987C17.1911 19.574 16.1818 20.7027 16.257 22.019C16.7121 30.0815 18.4118 38.0449 19.4713 46.0393C19.5286 46.4645 19.6648 47.0701 19.8165 47.7616Z"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M40.6897 15.1182C37.9807 15.8361 35.2669 16.462 33.0906 18.3229C30.814 20.271 29.6566 23.1007 29.2445 26.254C28.719 30.2769 29.4237 34.8409 29.8608 38.0933C30.0878 39.7775 30.1846 42.1246 30.6755 44.2042C31.0983 45.9922 31.8185 47.594 32.9162 48.7155C34.641 50.4773 37.2879 50.6553 40.0028 49.5564C43.1394 48.2867 46.263 45.3568 47.1122 43.6487C47.6999 42.4686 47.2185 41.0329 46.0372 40.4464C44.8571 39.8588 43.4226 40.3401 42.8349 41.5202C42.2962 42.6036 40.1999 44.3224 38.21 45.1286C37.7657 45.3078 37.3261 45.4416 36.9104 45.475C36.6942 45.4929 36.4781 45.524 36.3311 45.3747C35.6109 44.6377 35.3577 43.4397 35.1487 42.2297C34.856 40.5432 34.7748 38.7813 34.5968 37.4555C34.205 34.547 33.5123 30.4704 33.9817 26.8728C34.2337 24.9437 34.8035 23.1461 36.1974 21.9541C37.8146 20.5709 39.8977 20.2711 41.9128 19.7371C43.1872 19.4003 43.9481 18.0912 43.6101 16.8167C43.2732 15.5422 41.9641 14.7814 40.6897 15.1182Z"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M40.5072 27.706C38.4085 28.8491 36.1653 30.0244 33.9162 30.8318C32.6752 31.2774 32.029 32.6463 32.4733 33.8873C32.9188 35.1283 34.2876 35.7745 35.5287 35.3289C38.0059 34.4403 40.482 33.161 42.7921 31.9033C43.9495 31.2726 44.3783 29.8202 43.7476 28.6628C43.117 27.5041 41.6658 27.0766 40.5072 27.706Z"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M69.3576 28.9742C67.6137 26.8648 65.7707 24.7889 63.8237 22.8921C63.6649 22.738 61.7013 21.1207 60.5343 20.5164C59.7471 20.109 59.0496 20.035 58.6411 20.0744C57.4526 20.1891 56.7276 20.8329 56.4301 21.9342C56.1459 22.9901 56.0432 24.0901 56.0432 25.2129C54.2766 21.9007 52.6605 18.4942 51.6787 14.9073C51.5975 14.611 51.5317 14.4725 51.521 14.4474C51.1901 13.7164 50.7207 13.4679 50.5535 13.37C49.7317 12.8874 48.9912 12.9687 48.3665 13.2494C48.29 13.2828 46.6058 14.0305 47.0084 15.9404C47.0406 16.0945 47.3154 17.1922 47.3954 17.621C47.4659 17.9937 47.6187 18.3293 47.8325 18.6136C49.4785 23.3412 51.9964 27.8072 54.4128 32.1682C54.9347 33.1106 55.342 34.0816 55.6108 35.1244C55.6896 35.429 55.7219 36.1181 55.7911 36.4562C55.9094 37.0283 56.1435 37.4117 56.2928 37.6076C57.0692 38.6277 58.0259 38.7316 58.9086 38.4701C59.2861 38.359 60.0421 38.1045 60.502 37.0092C61.5364 34.5487 61.4194 31.8313 61.1196 29.0936C61.0312 28.2838 60.9213 27.474 60.8544 26.6737C62.9793 28.7855 64.968 31.1146 66.8373 33.4426C67.0428 33.6982 69.1235 36.025 69.6766 36.3714C71.0597 37.2409 72.1335 36.5876 72.5934 36.1982C73.2945 35.6033 73.8464 34.5821 74.0709 33.2814C74.36 31.5984 74.1318 29.2823 74.1091 28.3507C73.9574 22.0798 73.7305 15.5248 72.3222 9.40205C72.0272 8.11683 70.7444 7.31412 69.4592 7.60915C68.1739 7.90418 67.3713 9.18824 67.6663 10.4723C69.0029 16.2868 69.188 22.5135 69.3325 28.4666C69.3361 28.6039 69.3457 28.7759 69.3576 28.9742Z"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M78.9038 7.8135C79.7697 12 80.6369 16.1483 81.2031 20.4531C81.3751 21.761 82.5754 22.6831 83.8833 22.5111C85.1901 22.3391 86.1122 21.1387 85.9402 19.8308C85.1423 13.7594 83.7616 7.99506 82.6054 2.00611C82.1598 -0.308722 79.9597 0.0150046 79.8247 0.0388935C79.5273 0.0914491 77.9064 0.43664 77.8527 2.33461C77.8491 2.45047 77.9267 3.2698 77.9399 3.58753C77.9685 4.31494 77.9541 5.02567 77.9171 5.75428C77.8741 6.59397 78.2695 7.35483 78.9038 7.8135Z"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M85.0858 32.5013C85.3282 31.7631 85.2052 30.9199 84.6844 30.2665C83.8614 29.2357 82.3576 29.0673 81.3268 29.8903C80.3748 30.6499 80.1969 31.5756 80.3247 32.708C80.4728 34.0183 81.6577 34.9619 82.968 34.8125C84.166 34.6776 85.0571 33.6742 85.0858 32.5013Z"
                    />
                  </svg>
                </a>
                <a
                  className="ml-[17px] pl-[21px] flex items-center border-l text-sm text-base-content/50 border-l-base-content/10 hover:border-l-base-content/50 py-1.5 transition-all duration-150 ease-in-out hover:text-base-content active:text-base-content active:border-l-base-content flex items-center space-x-3"
                  href="/docs/components/features-listicle"
                >
                  <span>Features Listicle</span>
                </a>
                <a
                  className="ml-[17px] pl-[21px] flex items-center border-l text-sm text-base-content/50 border-l-base-content/10 hover:border-l-base-content/50 py-1.5 transition-all duration-150 ease-in-out hover:text-base-content active:text-base-content active:border-l-base-content flex items-center space-x-3"
                  href="/docs/components/features-accordion"
                >
                  <span>Features Accordion</span>
                </a>
                <a
                  className="ml-[17px] pl-[21px] flex items-center border-l text-sm text-base-content/50 border-l-base-content/10 hover:border-l-base-content/50 py-1.5 transition-all duration-150 ease-in-out hover:text-base-content active:text-base-content active:border-l-base-content flex items-center space-x-3"
                  href="/docs/components/cta"
                >
                  <span>CTA</span>
                </a>
                <a
                  className="ml-[17px] pl-[21px] flex items-center border-l text-sm text-base-content/50 border-l-base-content/10 hover:border-l-base-content/50 py-1.5 transition-all duration-150 ease-in-out hover:text-base-content active:text-base-content active:border-l-base-content flex items-center space-x-3"
                  href="/docs/components/pricing"
                >
                  <span>Pricing</span>
                </a>
                <a
                  className="ml-[17px] pl-[21px] flex items-center border-l text-sm text-base-content/50 border-l-base-content/10 hover:border-l-base-content/50 py-1.5 transition-all duration-150 ease-in-out hover:text-base-content active:text-base-content active:border-l-base-content flex items-center space-x-3"
                  href="/docs/components/blog"
                >
                  <span>Blog</span>
                </a>
                <a
                  className="ml-[17px] pl-[21px] flex items-center border-l text-sm text-base-content/50 border-l-base-content/10 hover:border-l-base-content/50 py-1.5 transition-all duration-150 ease-in-out hover:text-base-content active:text-base-content active:border-l-base-content flex items-center space-x-3"
                  href="/docs/components/faq"
                >
                  <span>FAQ</span>
                </a>
                <a
                  className="ml-[17px] pl-[21px] flex items-center border-l text-sm text-base-content/50 border-l-base-content/10 hover:border-l-base-content/50 py-1.5 transition-all duration-150 ease-in-out hover:text-base-content active:text-base-content active:border-l-base-content flex items-center space-x-3"
                  href="/docs/components/testimonial1small"
                >
                  <span>Testimonial Small</span>
                </a>
                <a
                  className="ml-[17px] pl-[21px] flex items-center border-l text-sm text-base-content/50 border-l-base-content/10 hover:border-l-base-content/50 py-1.5 transition-all duration-150 ease-in-out hover:text-base-content active:text-base-content active:border-l-base-content flex items-center space-x-3"
                  href="/docs/components/testimonials1"
                >
                  <span>Testimonial Single</span>
                </a>
                <a
                  className="ml-[17px] pl-[21px] flex items-center border-l text-sm text-base-content/50 border-l-base-content/10 hover:border-l-base-content/50 py-1.5 transition-all duration-150 ease-in-out hover:text-base-content active:text-base-content active:border-l-base-content flex items-center space-x-3"
                  href="/docs/components/testimonials3"
                >
                  <span>Testimonial Triple</span>
                </a>
                <a
                  className="ml-[17px] pl-[21px] flex items-center border-l text-sm text-base-content/50 border-l-base-content/10 hover:border-l-base-content/50 py-1.5 transition-all duration-150 ease-in-out hover:text-base-content active:text-base-content active:border-l-base-content flex items-center space-x-3"
                  href="/docs/components/testimonials11"
                >
                  <span>Testimonial Grid</span>
                </a>
                <a
                  className="ml-[17px] pl-[21px] flex items-center border-l text-sm text-base-content/50 border-l-base-content/10 hover:border-l-base-content/50 py-1.5 transition-all duration-150 ease-in-out hover:text-base-content active:text-base-content active:border-l-base-content flex items-center space-x-3"
                  href="/docs/components/testimonialsAvatar"
                >
                  <span>Testimonial Small</span>
                </a>
                <a
                  className="ml-[17px] pl-[21px] flex items-center border-l text-sm text-base-content/50 border-l-base-content/10 hover:border-l-base-content/50 py-1.5 transition-all duration-150 ease-in-out hover:text-base-content active:text-base-content active:border-l-base-content flex items-center space-x-3"
                  href="/docs/components/Footer"
                >
                  <span>Footer</span>
                </a>
                <a
                  className="ml-[17px] pl-[21px] flex items-center border-l text-sm text-base-content/50 border-l-base-content/10 hover:border-l-base-content/50 py-1.5 transition-all duration-150 ease-in-out hover:text-base-content active:text-base-content active:border-l-base-content flex items-center space-x-3"
                  href="/docs/components/buttonLead"
                >
                  <span>Button Lead</span>
                </a>
                <a
                  className="ml-[17px] pl-[21px] flex items-center border-l text-sm text-base-content/50 border-l-base-content/10 hover:border-l-base-content/50 py-1.5 transition-all duration-150 ease-in-out hover:text-base-content active:text-base-content active:border-l-base-content flex items-center space-x-3"
                  href="/docs/components/buttonCheckout"
                >
                  <span>Button Checkout</span>
                </a>
                <a
                  className="ml-[17px] pl-[21px] flex items-center border-l text-sm text-base-content/50 border-l-base-content/10 hover:border-l-base-content/50 py-1.5 transition-all duration-150 ease-in-out hover:text-base-content active:text-base-content active:border-l-base-content flex items-center space-x-3"
                  href="/docs/components/buttonSignin"
                >
                  <span>Button Sign-in</span>
                </a>
                <a
                  className="ml-[17px] pl-[21px] flex items-center border-l text-sm text-base-content/50 border-l-base-content/10 hover:border-l-base-content/50 py-1.5 transition-all duration-150 ease-in-out hover:text-base-content active:text-base-content active:border-l-base-content flex items-center space-x-3"
                  href="/docs/components/buttonAccount"
                >
                  <span>Button Account</span>
                </a>
                <a
                  className="ml-[17px] pl-[21px] flex items-center border-l text-sm text-base-content/50 border-l-base-content/10 hover:border-l-base-content/50 py-1.5 transition-all duration-150 ease-in-out hover:text-base-content active:text-base-content active:border-l-base-content flex items-center space-x-3"
                  href="/docs/components/buttonGradient"
                >
                  <span>Button Gradient</span>
                </a>
                <a
                  className="ml-[17px] pl-[21px] flex items-center border-l text-sm text-base-content/50 border-l-base-content/10 hover:border-l-base-content/50 py-1.5 transition-all duration-150 ease-in-out hover:text-base-content active:text-base-content active:border-l-base-content flex items-center space-x-3"
                  href="/docs/components/buttonPopover"
                >
                  <span>Button Popover</span>
                </a>
                <a
                  className="ml-[17px] pl-[21px] flex items-center border-l text-sm text-base-content/50 border-l-base-content/10 hover:border-l-base-content/50 py-1.5 transition-all duration-150 ease-in-out hover:text-base-content active:text-base-content active:border-l-base-content flex items-center space-x-3"
                  href="/docs/components/betterIcon"
                >
                  <span>Better Icon</span>
                </a>
                <a
                  className="ml-[17px] pl-[21px] flex items-center border-l text-sm text-base-content/50 border-l-base-content/10 hover:border-l-base-content/50 py-1.5 transition-all duration-150 ease-in-out hover:text-base-content active:text-base-content active:border-l-base-content flex items-center space-x-3"
                  href="/docs/components/testimonialsRating"
                >
                  <span>Rating</span>
                </a>
                <a
                  className="ml-[17px] pl-[21px] flex items-center border-l text-sm text-base-content/50 border-l-base-content/10 hover:border-l-base-content/50 py-1.5 transition-all duration-150 ease-in-out hover:text-base-content active:text-base-content active:border-l-base-content flex items-center space-x-3"
                  href="/docs/components/modal"
                >
                  <span>Modal</span>
                </a>
              </div>
            </div>
            <div>
              <a
                className="flex items-center space-x-3 text-base-content/50 rounded-lg px-2 py-1.5 transition-all duration-150 ease-in-out  hover:text-base-content  active:text-base-content"
                href="/docs/deployment"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={18}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-rocket"
                >
                  <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                  <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                  <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                  <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                </svg>
                <span className="text-sm font-semibold">Deployment</span>
              </a>
            </div>
            <div>
              <a
                className="flex items-center space-x-3 text-base-content/50 rounded-lg px-2 py-1.5 transition-all duration-150 ease-in-out  hover:text-base-content  active:text-base-content"
                href="/docs/extras"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={18}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-cherry"
                >
                  <path d="M2 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z" />
                  <path d="M12 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z" />
                  <path d="M7 14c3.22-2.91 4.29-8.75 5-12 1.66 2.38 4.94 9 5 12" />
                  <path d="M22 9c-4.29 0-7.14-2.33-10-7 5.71 0 10 4.67 10 7Z" />
                </svg>
                <span className="text-sm font-semibold">Extras</span>
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className="mb-4 border-t border-base-content/10" />
          <div className="grid gap-1">
            <a
              href="https://shipfast.beehiiv.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-lg px-2 py-1.5 transition-all duration-150 ease-in-out text-base-content/60 hover:bg-hover hover:text-base-content active:bg-active active:text-base-content"
            >
              <div className="flex items-center space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={18}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-megaphone"
                >
                  <path d="m3 11 18-5v12L3 14v-3z" />
                  <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
                </svg>
                <span className="text-sm font-medium">Follow updates</span>
              </div>
              <p>↗</p>
            </a>
            <a
              href="https://github.com/Marc-Lou-Org/ship-fast"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-lg px-2 py-1.5 transition-all duration-150 ease-in-out text-base-content/60 hover:bg-hover hover:text-base-content active:bg-active active:text-base-content"
            >
              <div className="flex items-center space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={18}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-github"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
                <span className="text-sm font-medium">Javascript repo</span>
              </div>
              <p>↗</p>
            </a>
            <a
              href="https://github.com/Marc-Lou-Org/ship-fast-ts"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-lg px-2 py-1.5 transition-all duration-150 ease-in-out text-base-content/60 hover:bg-hover hover:text-base-content active:bg-active active:text-base-content"
            >
              <div className="flex items-center space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={18}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-github"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
                <span className="text-sm font-medium">Typescript repo</span>
              </div>
              <p>↗</p>
            </a>
            <a
              href="mailto:marc@shipfa.st"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-lg px-2 py-1.5 transition-all duration-150 ease-in-out text-base-content/60 hover:bg-hover hover:text-base-content active:bg-active active:text-base-content"
            >
              <div className="flex items-center space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={18}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-life-buoy"
                >
                  <circle cx={12} cy={12} r={10} />
                  <path d="m4.93 4.93 4.24 4.24" />
                  <path d="m14.83 9.17 4.24-4.24" />
                  <path d="m14.83 14.83 4.24 4.24" />
                  <path d="m9.17 14.83-4.24 4.24" />
                  <circle cx={12} cy={12} r={4} />
                </svg>
                <span className="text-sm font-medium">Support</span>
              </div>
              <p>↗</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
