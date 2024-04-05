import "./App.css";

function App() {
  return (
    <div className="flex justify-center w-screen h-screen items-center">
      <div className="w-[1200px] h-[626px] px-[40px] ">
        <div className="font-header font-bold text-[32px] flex justify-center mb-10">
          Open positions
        </div>
        <div className="flex justify-between gap-[32px] mb-[30px]">
          <div
            className="w-[400px] h-[251px] bg-white rounded-[16px] px-[40px] py-[48px]"
            style={{
              boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px",
            }}
          >
            <div className="flex gap-[16px] items-center mb-[32px] justify-center">
              <div>
                <img
                  src="../src/assets/image/box1.png"
                  alt="box1"
                  width={64}
                  height={64}
                ></img>
              </div>
              <div className="font-text text-[24px]">Design</div>
            </div>
            <div className="cursor-pointer outline-none select-none font-text font-medium border-2 border-gray-300 h-[59px] rounded-[8px] flex items-center justify-center hover:bg-black hover:text-white">
              4 open positions
            </div>
          </div>

          <div
            className="w-[400px] h-[251px] bg-white rounded-[16px] px-[40px] py-[48px]"
            style={{
              boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px",
            }}
          >
            <div className="flex gap-[16px] items-center mb-[32px] justify-center">
              <div>
                <img
                  src="../src/assets/image/box2.png"
                  alt="box1"
                  width={64}
                  height={64}
                ></img>
              </div>
              <div className="font-text text-[24px]">Engineering</div>
            </div>
            <div className="cursor-pointer outline-none select-none font-text font-medium border-2 border-gray-300 h-[59px] rounded-[8px] flex items-center justify-center hover:bg-black hover:text-white">
              8 open positions
            </div>
          </div>

          <div
            className="w-[400px] h-[251px] bg-white rounded-[16px] px-[40px] py-[48px]"
            style={{
              boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px",
            }}
          >
            <div className="flex gap-[16px] items-center mb-[32px] justify-center">
              <div>
                <img
                  src="../src/assets/image/box3.png"
                  alt="box1"
                  width={64}
                  height={64}
                ></img>
              </div>
              <div className="font-text text-[24px]">Operations</div>
            </div>
            <div className="cursor-pointer outline-none select-none font-text font-medium border-2 border-gray-300 h-[59px] rounded-[8px] flex items-center justify-center hover:bg-black hover:text-white">
              2 open positions
            </div>
          </div>
        </div>
        <div className="flex justify-between gap-[32px]">
          <div
            className="w-[400px] h-[251px] bg-white rounded-[16px] px-[40px] py-[48px]"
            style={{
              boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px",
            }}
          >
            <div className="flex gap-[16px] items-center mb-[32px] justify-center">
              <div>
                <img
                  src="../src/assets/image/box4.png"
                  alt="box1"
                  width={64}
                  height={64}
                ></img>
              </div>
              <div className="font-text text-[24px]">People</div>
            </div>
            <div className="cursor-pointer outline-none select-none font-text font-medium border-2 border-gray-300 h-[59px] rounded-[8px] flex items-center justify-center hover:bg-black hover:text-white">
              6 open positions
            </div>
          </div>

          <div
            className="w-[400px] h-[251px] bg-white rounded-[16px] px-[40px] py-[48px]"
            style={{
              boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px",
            }}
          >
            <div className="flex gap-[16px] items-center mb-[32px] justify-center">
              <div>
                <img
                  src="../src/assets/image/box5.png"
                  alt="box1"
                  width={64}
                  height={64}
                ></img>
              </div>
              <div className="font-text text-[24px]">Sales</div>
            </div>
            <div className="cursor-pointer outline-none select-none font-text font-medium border-2 border-gray-300 h-[59px] rounded-[8px] flex items-center justify-center hover:bg-black hover:text-white">
              7 open positions
            </div>
          </div>

          <div
            className="w-[400px] h-[251px] bg-white rounded-[16px] px-[40px] py-[48px]"
            style={{
              boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px",
            }}
          >
            <div className="flex gap-[16px] items-center mb-[32px] justify-center">
              <div>
                <img
                  src="../src/assets/image/box6.png"
                  alt="box1"
                  width={64}
                  height={64}
                ></img>
              </div>
              <div className="font-text text-[24px]">University</div>
            </div>
            <div className="cursor-pointer outline-none select-none font-text font-medium border-2 border-gray-300 h-[59px] rounded-[8px] flex items-center justify-center hover:bg-black hover:text-white">
              8 open positions
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
