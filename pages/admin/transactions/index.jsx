import React, { useCallback, useEffect, useState } from 'react'
import Layout from '../../../components/layout'
import ThreeDTransactions from '../../../components/Transactions/threeDTransactions'
import TwoDTransactions from '../../../components/Transactions/twoDtransactions'
import { Instance } from '../../../Services'

function TransactionPage () {
  const [selected, setSelected] = useState('2d')
  const [agents, setAgents] = useState([])
  const [twoDSessions, settwoDSessions] = useState([])
  const [threeDSessions, setthreeDSessions] = useState([])

  const getUsers = useCallback(() => {
    Instance({
      url: '/admin/user/getallagent',
      method: 'GET'
    })
      .then(res => {
        if (res.data && res.data.statusCode === 200 && res.data.Data) {
          setAgents(res.data.Data)
        }
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  const get2DSessions = useCallback(() => {
    Instance({
      url: '/settings/sessions/get2dSessions',
      method: 'GET'
    })
      .then(res => {
        if (res.data && res.data.statusCode === 200 && res.data.Data) {
          settwoDSessions(res.data.Data)
        }
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  const get3DSessions = useCallback(() => {
    Instance({
      url: '/settings/sessions/get3dSessions',
      method: 'GET'
    })
      .then(res => {
        if (res.data && res.data.statusCode === 200 && res.data.Data) {
          setthreeDSessions(res.data.Data)
        }
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  useEffect(() => {
    get2DSessions()
    get3DSessions()
    getUsers()
  }, [get2DSessions, get3DSessions, getUsers])

  return (
    <Layout>
      <div className='w-full my-3 max-w-sm flex flex-row justify-between items-center content-center'>
        <button
          onClick={() => {
            setSelected('2d')
          }}
          className={`border border-slate-700 justify-center items-center content-center flex w-full px-2 py-2 rounded-l-full ${
            selected === '2d'
              ? 'bg-slate-700 text-white'
              : 'bg-white text-slate-700'
          }`}
        >
          2D
        </button>
        <button
          onClick={() => {
            setSelected('3d')
          }}
          className={`border border-slate-700 justify-center items-center content-center flex w-full px-2 py-2 rounded-r-full ${
            selected === '3d'
              ? 'bg-slate-700 text-white'
              : 'bg-white text-slate-700'
          }`}
        >
          3D
        </button>
      </div>
      {selected === '2d' && <TwoDTransactions users={agents} sessions={twoDSessions} />}

      {selected === '3d' && <ThreeDTransactions users={agents} sessions={threeDSessions} />}
    </Layout>
  )
}

export default TransactionPage
