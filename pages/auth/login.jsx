import React from 'react';
import PageWrapper from '../../components/PageWrapper';

function Login() {
    const onSumbit = (e)=>{
        e.preventDefault()
    }
  return (
      <PageWrapper>
          <div className='flex h-screen justify-center items-center content-center'>
             <div className='flex  px-2 py-2 w-full max-w-screen-xs bg-slate-900 bg-opacity-60 rounded-md' data-aos="zoom-in-up">
                  <form onSubmit={(e)=>{onSumbit(e)}} className='flex flex-col space-y-4 w-full px-4 py-4'>
                        <h6 className='text-sm tracking-widest text-yellow-400'>
                        ပြန်လည်ကြိုဆိုပါသည် ✨
                        </h6>
                        <input placeholder='အီးမေးလ်လိပ်စာထည့်သွင်းပါ' type="email" className='text-sm text-slate-400 px-2 py-2 right-1  focus:ring-0 bg-slate-700 border border-slate-700 appearance-none focus:outline-none w-full ' />
                        <input placeholder='စကားဝှက် ထည့်သွင်းပါ' type="email" className='text-sm text-slate-400 px-2 py-2 right-1  focus:ring-0 bg-slate-700 border border-slate-700 appearance-none focus:outline-none w-full ' />
                        <button type='submit' className='text-sm text-slate-400 bg-slate-700 appearance-none hover:bg-yellow-400 px-2 py-2 hover:text-white' >
                            ဝင်ရောက်မည်
                        </button>
                  </form>
             </div>
          </div>
      </PageWrapper>
  );
}

export default Login;
