import React from "react";
import { useCallback, useEffect, useState } from "react";
import LongTimeResult from "./LongTimeResult";

import Sessions from "./sessions";
import { Instance } from "../../Services/";
import RealTimeResult from "./RealTimeResult";
function TwoDSession() {
  
  const [sessions, setSessions] = useState([]);
  const [luckyNumbers, setluckyNumbers] = useState([])
  const getSessions = useCallback(() => {
    Instance({
      url: "/settings/sessions/get2dSessions",
      method: "GET",
    }).then((res) => {
      if (res.data && res.data.statusCode === 200) {
        setSessions(res.data.Data)
      }
    });
  }, []);
  const getResults = useCallback(
    () => {
      Instance({
        url:"/settings/result/get2dresults",
        method:'GET'
      })
      .then(res=>{
        if (res.data && res.data.statusCode === 200 && res.data.Data) {
          setluckyNumbers(res.data.Data)
        }
      })
      .catch(err=>{
        console.log(err)
      })
    },
    [],
  )
  

  useEffect(() => {
    getSessions();
    getResults()
  }, [getSessions,getResults]);

  return (
    <div
      className="flex flex-col space-y-6 w-full max-w-screen-md mx-auto"
      data-aos="zoom-in-up"
    >
      <RealTimeResult result={luckyNumbers}  />
      <Sessions sessions={sessions} />
      <LongTimeResult results={luckyNumbers} />
    </div>
  );
}

export default TwoDSession;
