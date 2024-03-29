import "./App.css";

function App() {
  return (
    <>
      <div className="flex justify-center w-screen h-screen items-center">
        <div className="w-[800px] h-[550px] border-spacing-2 bg-white shadow-lg rounded-[26px] p-[70px] ">
          {/* Header */}
          <div className="flex justify-between">
            <div className="w-[260px] h-[45px] border border-gray-400 flex items-center rounded-[5px] px-[10px] py-[5px]">
              <div className="flex gap-3">
                <svg
                  width="27"
                  height="27"
                  viewBox="0 0 27 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_2_6)">
                    <path
                      d="M11.25 19.125C15.5992 19.125 19.125 15.5992 19.125 11.25C19.125 6.90076 15.5992 3.375 11.25 3.375C6.90076 3.375 3.375 6.90076 3.375 11.25C3.375 15.5992 6.90076 19.125 11.25 19.125Z"
                      stroke="#0E0D46"
                      stroke-width="1.6875"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M23.625 23.625L16.875 16.875"
                      stroke="#0E0D46"
                      stroke-width="1.6875"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2_6">
                      <rect width="27" height="27" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <input
                  type="text"
                  placeholder="Search"
                  className="font-[16px] outline-none cursor-pointer"
                ></input>
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_2_33)">
                  <path
                    d="M15 7.5C15 6.70435 15.3161 5.94129 15.8787 5.37868C16.4413 4.81607 17.2044 4.5 18 4.5C18.7956 4.5 19.5587 4.81607 20.1213 5.37868C20.6839 5.94129 21 6.70435 21 7.5C22.7226 8.31454 24.1911 9.58249 25.2481 11.1679C26.305 12.7534 26.9107 14.5966 27 16.5V21C27.1129 21.9326 27.4432 22.8256 27.9642 23.6072C28.4853 24.3888 29.1826 25.0371 30 25.5H6C6.81741 25.0371 7.51471 24.3888 8.03578 23.6072C8.55685 22.8256 8.88712 21.9326 9 21V16.5C9.08934 14.5966 9.69495 12.7534 10.7519 11.1679C11.8089 9.58249 13.2774 8.31454 15 7.5"
                    stroke="#0E0D46"
                    stroke-width="2.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M13.5 25.5V27C13.5 28.1935 13.9741 29.3381 14.818 30.182C15.6619 31.0259 16.8065 31.5 18 31.5C19.1935 31.5 20.3381 31.0259 21.182 30.182C22.0259 29.3381 22.5 28.1935 22.5 27V25.5"
                    stroke="#0E0D46"
                    stroke-width="2.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2_33">
                    <rect width="36" height="36" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <div className="logo">
                <img
                  src="../public/Group 1.png"
                  alt="logo"
                  width={52}
                  height={52}
                />
              </div>
            </div>
          </div>

          {/* Title */}
          <div className="font-bold text-[32px] my-4 font-header">Accounts</div>

          {/* Body */}
          <div className="w-full h-[85px] bg-slate-200 rounded-[15px] flex px-4 mb-1 justify-between">
            <div className="header_list flex items-center gap-3 w-[180px]">
              <img
                src="../public/logo_dropbox.png"
                alt=""
                width={52}
                height={52}
              />
              <div>
                <div className="font-header font-bold text-[20px]">Dropbox</div>
                <div className="font-text">dropbox.com</div>
              </div>
            </div>
            <div className="flex items-center w-[160px] font-text">
              24 accounts
            </div>
            <div className="flex items-center">
              <img
                src="../public/btn_enable.png"
                alt=""
                className="w-[40px] h-[40px]"
              />
            </div>
          </div>

          <div className="w-full h-[85px]  rounded-[15px] flex px-4 mb-1 justify-between">
            <div className="header_list flex items-center gap-3 w-[180px]">
              <img
                src="../public/logo_pinterest.png"
                alt=""
                width={52}
                height={52}
              />
              <div>
                <div className="font-header font-bold text-[20px]">
                  Pinterest
                </div>
                <div className="font-text">pinterest.com</div>
              </div>
            </div>
            <div className="flex items-center w-[160px] font-text">
              3 accounts
            </div>
            <div className="flex items-center">
              <img
                src="../public/btn_enable.png"
                alt=""
                className="w-[40px] h-[40px]"
              />
            </div>
          </div>

          <div className="w-full h-[85px]  rounded-[15px] flex px-4 mb-1 justify-between">
            <div className="header_list flex items-center gap-3 w-[180px]">
              <img
                src="../public/logo_microsoft.png"
                alt=""
                width={52}
                height={52}
              />
              <div>
                <div className="font-header font-bold text-[20px]">
                  Microsoft
                </div>
                <div className="font-text">microsoft.com</div>
              </div>
            </div>
            <div className="flex items-center w-[160px] font-text">
              19 accounts
            </div>
            <div className="flex items-center">
              <img
                src="../public/btn_enable.png"
                alt=""
                className="w-[40px] h-[40px]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
