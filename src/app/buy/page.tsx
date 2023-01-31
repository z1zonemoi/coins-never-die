// TODO
// 1. 버튼 컴포넌트로 변경
// - 배경색깔
// - 텍스트 색깔
// - 너비

const CoinTrading = () => {
  return (
    <main className="bg-yellow-100 w-screen h-screen flex justify-center items-center">
      <section className="bg-white w-[26rem] h-[30rem] rounded-xl border-black-100 border-[3px] px-8 py-8">
        <article className="border-black-100 flex items-center justify-between mb-4">
          <button className="bg-yellow-200 w-[10.3rem] h-[2.8rem] rounded-xl border-black-100 border-[3px] text-white text-lg font-semibold">
            매수
          </button>
          <button className="bg-grey w-[10.3rem] h-[2.8rem] rounded-xl border-black-100 border-[3px]  text-black text-lg font-semibold">
            매도
          </button>
        </article>
        <article className="mb-4">
          <figure className="text-black-200 text-lg py-3.5 border-b border-grey px-2.5 flex justify-between">
            <div className="flex items-baseline">
              <p>비트코인</p>
              <p className="text-black-200 text-xs pl-1">BTC/KRW</p>
            </div>
            <div>{new Intl.NumberFormat("ko-KR").format(23000000)} KRW</div>
          </figure>
          <figure className="text-black-200 text-lg py-3.5 border-b border-grey px-2.5 flex justify-between">
            <p>가격</p>
            <p>1000</p>
          </figure>
          <figure className="text-black-200 text-lg py-3.5 border-b border-grey px-2.5 flex justify-between">
            <p>수량</p>
            <p>1</p>
          </figure>
          <figure className="text-black-200 text-lg py-3.5 border-b border-grey px-2.5 flex justify-between">
            <p>총액</p>
            <p>1000</p>
          </figure>
        </article>
        <article className="bg-yellow-100 rounded-lg border-black-100 border-[3px] flex justify-around mb-6 py-1.5 text-black-100 text-xs font-[Galmuri11] font-semibold">
          <button>10%</button>
          <button>25%</button>
          <button>50%</button>
          <button>100%</button>
        </article>
        <article className="border-black flex justify-between">
          <button className="bg-yellow-100 w-[7.3rem] h-[2.8rem] rounded-xl border-black-100 border-[3px] text-black-200 text-base font-[Galmuri11]">
            초기화
          </button>
          <button className="bg-yellow-200 w-[13.3rem] h-[2.8rem] rounded-xl border-black-100 border-[3px] text-white text-lg font-semibold">
            매수
          </button>
        </article>
      </section>
    </main>
  );
};

export default CoinTrading;
