"use client";

import { useRecoilValue } from "recoil";
import { userUidAssetData } from "@/atoms/atom";

import MyAssetCoinList from "./MyAssetCoinList";
import { IcurrentPrice } from "@/interface/interface";

import { RiBitCoinFill } from "react-icons/ri";

const MyAssets = ({ currentPrice }: { currentPrice: IcurrentPrice }) => {
  const userAssetData = useRecoilValue(userUidAssetData);

  let myCash: number = 0;
  if (userAssetData.asset) {
    myCash = +userAssetData.asset.cash;
  }

  return (
    <div>
      <section className="bg-yellow-200 w-[26rem] h-[30rem] rounded-xl border-white border-[3px] px-8 py-8 flex-col items-center ml-14">
        <article className="bg-white h-[3.1rem] rounded-xl border-black-100 border-[3px] flex justify-around items-center pt-1.5 pb-2 text-black-100 text-lg font-semibold mb-7">
          보유자산
        </article>
        <article className="bg-white h-[6rem] rounded-xl border-black-100 border-[3px] flex-col justify-center mb-4">
          <figure className="h-1/2 px-2.5 pt-1 border-b border-grey">
            <div className="flex items-center">
              <RiBitCoinFill className="text-4xl text-white w-[10%]" />
              <p className="w-[45%] flex justify-center">현금</p>
              <p className="w-[45%] flex justify-center">자산</p>
            </div>
          </figure>
          <figure className="h-1/2 px-2.5 pt-1">
            <div className="flex items-center">
              <RiBitCoinFill className="text-4xl text-yellow-coin w-[10%]" />
              <p className="w-[45%] flex justify-center">KRW</p>
              <p className="w-[45%] flex justify-center">
                {new Intl.NumberFormat("ko-KR").format(myCash)}
              </p>
            </div>
          </figure>
        </article>
        <article className="bg-white h-[13.9rem] rounded-xl border-black-100 border-[3px] flex-col justify-center overflow-scroll scrollbar-hide">
          <figure className="h-12 px-2.5 pt-1 border-b border-grey">
            <div className="flex items-center">
              <RiBitCoinFill className="text-4xl text-white w-[10%]" />
              <p className="w-[30%] flex justify-center">코인</p>
              <p className="w-[30%] flex justify-center">평가손익</p>
              <p className="w-[30%] flex justify-center">수익률</p>
            </div>
          </figure>
          <MyAssetCoinList currentPrice={currentPrice} />
        </article>
      </section>
    </div>
  );
};

export default MyAssets;