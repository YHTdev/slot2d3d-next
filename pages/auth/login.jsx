import { useRouter } from "next/router";
import React, { useCallback, useState } from "react";
import { useToasts } from "react-toast-notifications";
import FrontLogo from "../../components/Front/FrontLogo";
import PageInnerWrapper from "../../components/Front/PageInnerWrapper";
import PageWrapper from "../../components/PageWrapper";
import { Instance } from "../../Services";

function Login() {
  const router = useRouter();
  const [formData, setformData] = useState({
    phone: "",
    password: "",
  });
  const { addToast } = useToasts();
  const callInstance = useCallback(
    () => {
      Instance({
        url: "/auth/get_status",
        method: "GET",
      });
    },
    [],
  )
  
  const onSumbit = (e) => {
    e.preventDefault();
    try {
      Instance({
        url: "/auth/login",
        method: "POST",
        data: {
          phone: formData["phone"],
          password: formData["password"],
        },
      })
        .then((res) => {
          if (res.data && res.data.statusCode === 200) {
            addToast(res.data.message, {
              appearance: "success",
              autoDismiss: true,
            });
            if(res.data.Data){
               
              if(res.data.Data.role==='AGENT'){
                callInstance()
                router.push('/agent/2d')
                
              }
              else if(res.data.role==='ADMIN'){
                callInstance()
               router.push('/admin')
               
              }
              else{
                callInstance()
                router.push('/admin')
             
              }
            }
          } else if (res.data && res.data.statusCode === 400) {
            addToast(res.data.message, {
              appearance: "warning",
              autoDismiss: true,
            });
          } else {
            addToast("တခုခုမှားယွင်းနေပါသည်", {
              appearance: "warning",
              autoDismiss: true,
            });
          }
        })
        .catch((err) => {
          console.log(err)
          addToast("တခုခုမှားယွင်းနေပါသည်", {
            appearance: "warning",
            autoDismiss: true,
          });
        });
    } catch (error) {
      addToast("System error", { appearance: "error", autoDismiss: true });
    }
  };

  return (
    <PageWrapper>
      <PageInnerWrapper>
        <FrontLogo />
        <div className="flex items-center content-center justify-center my-40 overflow-y-scroll">
          <div
            className="flex w-full px-2 py-2 rounded-md max-w-screen-xs bg-slate-900 bg-opacity-60"
            data-aos="zoom-in-up">
            <form
              onSubmit={(e) => {
                onSumbit(e);
              }}
              className="flex flex-col w-full px-4 py-4 space-y-4">
              <h6 className="text-sm tracking-widest text-yellow-400">
                ပြန်လည်ကြိုဆိုပါသည် ✨
              </h6>
              <input
                id="phone"
                name="phone"
                value={formData["phone"]}
                onChange={(e) => {
                  setformData({ ...formData, [e.target.name]: e.target.value });
                }}
                required
                placeholder="ဖုန်းနံပါတ်ထည့်သွင်းပါ"
                type="tel"
                className="w-full px-2 py-2 text-sm border appearance-none text-slate-400 right-1 focus:ring-0 bg-slate-700 border-slate-700 focus:outline-none "
              />
              <input
                id="password"
                name="password"
                value={formData["password"]}
                onChange={(e) => {
                  setformData({ ...formData, [e.target.name]: e.target.value });
                }}
                required
                placeholder="စကားဝှက် ထည့်သွင်းပါ"
                type="password"
                className="w-full px-2 py-2 text-sm border appearance-none text-slate-400 right-1 focus:ring-0 bg-slate-700 border-slate-700 focus:outline-none "
              />
              <button
                type="submit"
                className="px-2 py-2 text-sm appearance-none text-slate-400 bg-slate-700 hover:bg-yellow-400 hover:text-white">
                ဝင်ရောက်မည်
              </button>
            </form>
          </div>
        </div>
      </PageInnerWrapper>
    </PageWrapper>
  );
}

export default Login;
