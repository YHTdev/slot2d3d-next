import { format } from "date-fns";
import React, { useCallback, useEffect, useState } from "react";
import { Instance } from "../../Services";

import LongTimeResult from "./LongTimeResult";
import RealTimeResult from "./RealTimeResult";
import Sessions from "./sessions";

function ThreeDSession() {
  
  const [sessions, setSessions] = useState([]);
  const [luckyNumbers, setluckyNumbers] = useState([])
  const getSessions = useCallback(() => {
    Instance({
      url: "/settings/sessions/get3dSessions",
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
        url:"/settings/result/get3dresult",
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
    <div className="flex flex-col space-y-6 w-full max-w-screen-md mx-auto" data-aos="zoom-in-up">
      
      <RealTimeResult result={luckyNumbers} />
      <Sessions sessions={sessions} />
      <LongTimeResult results={luckyNumbers} />
    </div>
  );
}

export default ThreeDSession;
