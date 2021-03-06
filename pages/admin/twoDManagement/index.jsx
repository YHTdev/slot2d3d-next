import { DotsHorizontalIcon } from '@heroicons/react/outline'
import { useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import UiInput from '../../../components/forms/UiInput'
import UiSelect from '../../../components/forms/UiSelect'
import UiSinglePicker from '../../../components/forms/UiSinglePicker'
import { Instance } from '../../../Services/'
import ManagementLayout, {
  ManagementHeader
} from '../../../components/layout/ManagementLayout'
import SelectTable, {
  TableCell,
  TableRow
} from '../../../components/SelectTable'
import { useToasts } from 'react-toast-notifications'
import { find } from 'lodash'
import { format } from 'date-fns'

const TwoDManagement = ({ children }) => {
  const { routes, Nums } = useSelector(state => state.management)
  const TwoDNum = Nums.twoD
  const [formData, setformData] = useState({
    num: '',
    sessionId: '',
    confirmDt: new Date(),
    twoDNumerId: ''
  })
  const [filterFormData, setFilterFormData] = useState({
    fromDt: new Date()
  })

  const [sessions, setSessions] = useState([])
  const [results, setResults] = useState([])
  const { addToast } = useToasts()
  const getSessions = useCallback(() => {
    Instance({
      url: '/settings/sessions/get2dSessions',
      method: 'GET'
    })
      .then(res => {
        if (res.data && res.data.statusCode === 200 && res.data.Data) {
          setSessions(res.data.Data)
        }
      })
      .catch(err => {
        console.log(err)
      })
  }, [])
  const getResults = useCallback(() => {
    Instance({
      url: `/settings/result/get2dresults?confirmDt=${format(
        filterFormData.fromDt,
        'yyyy-MM-dd'
      )}`
    })
      .then(res => {
        if (res.data && res.data.statusCode === 200 && res.data.Data) {
          setResults(res.data.Data)
        }
      })
      .catch(err => {
        console.log(err)
      })
  }, [filterFormData])

  useEffect(() => {
    getSessions()
    getResults()
  }, [getSessions, getResults])

  const ConfirmForm = () => {
    try {
      if (formData.num && formData.confirmDt && formData.sessionId) {
        const numObj = find(TwoDNum, n => n.num === formData.num)
        if (numObj) {
          setformData({
            ...formData,
            twoDNumerId: numObj.id
          })
          const formObj = {
            twoDNumerId: numObj.id,
            sessionId: formData.sessionId,
            confirmDt: format(formData.confirmDt, 'yyyy-MM-dd')
          }

          Instance({
            url: `/admin/settings/results/2d/create`,
            method: 'POST',
            data: formObj
          })
            .then(res => {
              if (res.data && res.data.statusCode === 200) {
                addToast(res.data.message, {
                  appearance: 'success',
                  autoDismiss: true
                })
                setformData({
                  num: '',
                  sessionId: '',
                  confirmDt: new Date(),
                  twoDNumerId: ''
                })
              } else if (res.data && res.data.statusCode === 400) {
                addToast(res.data.message, {
                  appearance: 'warning',
                  autoDismiss: true
                })
              }
            })
            .catch(err => {
              console.log(err)
            })
            .finally(()=>{
              getResults()
            })
        } else {
          addToast('????????????????????????????????????????????????????????????', {
            appearance: 'warning',
            autoDismiss: true
          })
        }
      } else {
        addToast('?????????????????????????????????????????????', {
          appearance: 'warning',
          autoDismiss: true
        })
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <ManagementLayout
      routes={routes.twoDManagementRoutes}
      title='2D management'
    >
      <ManagementHeader className={`text-indigo-500`}>
        ?????????????????????????????? ????????????????????????
      </ManagementHeader>

      <div className='grid grid-cols-1 gap-10 lg:grid-cols-2'>
        <div className='space-y-4 '>
          <div className='grid grid-cols-2 gap-6'>
            <div className=''>
              <UiSinglePicker
                className='rounded-md result_font'
                id='confirmDt'
                name='confirmDt'
                formData={formData}
                setFormData={setformData}
              />
            </div>
            <div className=''>
              <UiSelect
                options={sessions}
                optionLabel='name'
                formData={formData}
                setFromData={setformData}
                id='sessionId'
                name='sessionId'
                optionValue='id'
                placeHolder='???????????????????????????????????????????????????'
              />
            </div>
          </div>
          <div className=''>
            <UiInput
              className='result_font'
              id='num'
              name='num'
              placeHolder='????????????????????????????????????????????????'
              formData={formData}
              setFromData={setformData}
              type='text'
            />
          </div>

          <div className='flex flex-col items-center justify-between lg:flex-row'>
            <div className='space-y-2 '>
              <p className='text-xs text-red-500'>
                ?????????????????????????????? ???????????????????????????????????? ??????????????????????????????????????????????????????????????????????????????????????????
              </p>
              <p className='text-xs text-red-500'>
                ????????????????????????????????? ?????????????????????????????? ??????????????????????????? ????????????????????????????????????????????????
              </p>
            </div>
            <button
              onClick={() => {
                ConfirmForm()
              }}
              className='px-4 py-2 text-indigo-400 border border-indigo-400 rounded-md shadow-lg'
            >
              ??????????????????????????????
            </button>
          </div>
        </div>

        {results.map(
          (r, i) =>
            i === 0 && (
              <div className='space-y-10' key={i}>
                <div className='flex h-16 overflow-hidden rounded-lg shadow-lg lg:h-20 space-x-7 bg-slate-200'>
                  <div className='flex items-center justify-center w-16 text-2xl font-bold bg-indigo-500 lg:w-20 text-slate-200'>
                    {r.num ? r.num.num : '..'}
                  </div>
                  <div className='inline-flex items-center space-x-4 '>
                    <h1>
                      <span className='mr-2 text-indigo-500'>
                        {r.session ? r.session.name : '..'}
                      </span>
                      ??????????????????????????????
                    </h1>
                    <h4 className='result_font text-sm text-slate-500'>
                      {r.confirmDt}
                    </h4>
                  </div>
                </div>
              </div>
            )
        )}
      </div>

      <div className='border-t border-slate-300 max-w-screen-lg'>
        <div className='flex items-center content-center w-full justify-end flex-col py-5 md:flex-row space-x-0 md:space-x-2 space-y-2 md:space-y-0'>
          <label htmlFor=''>??????????????????????????????????????????????????????</label>
          <UiSinglePicker
            className='rounded-md'
            name='fromDt'
            id='fromDt'
            formData={filterFormData}
            setFormData={setFilterFormData}
          />
        </div>
        <div className='py-5 '>
          <SelectTable>
            <thead className='text-xs font-semibold uppercase border-t border-b text-slate-500 bg-slate-50 border-slate-200'>
              <TableRow>
                <TableCell isHeader={true}>??????????????????</TableCell>
                <TableCell isHeader={true}>??????????????????</TableCell>
                <TableCell isHeader={true}>???????????????????????????</TableCell>
                <TableCell isHeader={true} className='sr-only'>
                  Menu
                </TableCell>
              </TableRow>
            </thead>
            <tbody className='text-sm divide-y divide-slate-200'>
              {results.map(
                (r, i) =>
                  (
                    <TableRow key={i}>
                      <TableCell className='result_font'>
                        {' '}
                        {r.confirmDt}{' '}
                      </TableCell>

                      <TableCell>
                        <div className='text-sm text-indigo-500'>
                          {r.session ? (
                            r.session.name
                          ) : (
                            <DotsHorizontalIcon className='w-6 h-6 ' />
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className='text-lg text-indigo-500'>
                          {r.num ? (
                            r.num.num
                          ) : (
                            <DotsHorizontalIcon className='w-6 h-6 ' />
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                      <DotsHorizontalIcon className='w-6 h-6 ' />
                      </TableCell>
                    </TableRow>
                  )
              )}
            </tbody>
          </SelectTable>
        </div>
      </div>
    </ManagementLayout>
  )
}

export default TwoDManagement
