import PageInnerWrapper from "../components/Front/PageInnerWrapper";
import PageWrapper from "../components/PageWrapper";

const LivePage = () => {
  return (
    <PageWrapper>
      <div className="flex items-center content-center justify-center w-full h-screen py-24 overflow-y-scroll">
        <PageInnerWrapper>
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
