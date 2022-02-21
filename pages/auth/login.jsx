import { useRouter } from "next/router";
import React, { useState } from "react";
import { useToasts } from "react-toast-notifications";
import FrontLogo from "../../components/Front/FrontLogo";
import PageInnerWrapper from "../../components/Front/PageInnerWrapper";
import PageWrapper from "../../components/PageWrapper";
import { Instance } from "../../Services";

function Login() {
  const router = useRouter()
  const [formData, setformData] = useState({
    phone: "",
    password: "",
  });
  const { addToast } = useToasts();
  const onSumbit = (e) => {
    console.log(process.env.SLOT_SERVER_URL);
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
            router.push('/admin')
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
        <div className="flex  my-40 overflow-y-scroll  justify-center items-center content-center">
          <div
            className="flex  px-2 py-2 w-full max-w-screen-xs bg-slate-900 bg-opacity-60 rounded-md"
            data-aos="zoom-in-up"
          >
            <form
              onSubmit={(e) => {
                onSumbit(e);
              }}
              className="flex flex-col space-y-4 w-full px-4 py-4"
            >
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
                className="text-sm text-slate-400 px-2 py-2 right-1  focus:ring-0 bg-slate-700 border border-slate-700 appearance-none focus:outline-none w-full "
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
                className="text-sm text-slate-400 px-2 py-2 right-1  focus:ring-0 bg-slate-700 border border-slate-700 appearance-none focus:outline-none w-full "
              />
              <button
                type="submit"
                className="text-sm text-slate-400 bg-slate-700 appearance-none hover:bg-yellow-400 px-2 py-2 hover:text-white"
              >
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
