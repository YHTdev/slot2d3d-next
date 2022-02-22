import dynamic from "next/dynamic";
import FrontLogo from "../components/Front/FrontLogo";
import PageInnerWrapper from "../components/Front/PageInnerWrapper";
import PageWrapper from "../components/PageWrapper";
import { useRouter } from "next/router";
import { Instance } from "../Services";

const TradeViewChart = dynamic(() => import("react-crypto-chart"), {
  ssr: false,
});

const LivePage = ({ marketData }) => {
  const router = useRouter();
  const { pair = "BTCBUSD" } = router.query;
  // const marketData = Instance({
  //   url: "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=1&interval=daily",
  //   method: "GET",
  // });
  // console.log("Market Data ==>", marketData);
  return (
    <PageWrapper>
      <div className="flex items-center content-center justify-center w-full h-screen py-24 overflow-y-scroll">
        <PageInnerWrapper>
          {/* <FrontLogo /> */}
          <div className="">
            <div className="iframe-container ">
              <iframe
                src="https://www.set.or.th/set/mainpage.do?language=en&amp;country=US"
                frameBorder="0"
              />
            </div>
          </div>
        </PageInnerWrapper>
      </div>
    </PageWrapper>
  );
};

export default LivePage;
