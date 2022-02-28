import { DotsHorizontalIcon, TrashIcon } from '@heroicons/react/outline'
import { useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useToasts } from 'react-toast-notifications'
import UiInput from '../../../components/forms/UiInput'


import ManagementLayout, {
  ManagementHeader
} from '../../../components/layout/ManagementLayout'
import SelectTable, {
  TableCell,
  TableRow
} from '../../../components/SelectTable'
import { Instance } from '../../../Services'
import { each, find } from 'lodash'
import MyModal, { ModalBody, ModalTitle } from '../../../components/Modal'
import UiTextAreaInput from '../../../components/forms/UiTextarea'

const ThreeDKeywords = () => {

  
  const [formInput, setFormInput] = useState({
    num: '',
    name: ''
  })
  const { routes } = useSelector(state => state.management)
  const { Nums } = useSelector(state => state.management)
  const ThreeDNumbers = Nums.threeD
  const [keyWords, setKeyWords] = useState([])
  const [selectedNums, setSelectedNums] = useState()
  const [show, setShow] = useState(false)
  const { addToast } = useToasts()
  const getKeywords = useCallback(() => {
    Instance({
      url: '/settings/keywords/get3d_keywords',
      method: 'get'
    })
      .then(res => {
        if (res.data && res.data.statusCode === 200 && res.data.Data) {
          setKeyWords(res.data.Data)
        }
      })
      .catch(err => {
        console.log(err)
      })
  }, [])
  useEffect(() => {
    getKeywords()
  }, [getKeywords])

  const showNums = obj => {
    setShow(!show)
    setSelectedNums(obj)
  }

  const submitHandler = event => {
    event.preventDefault()
    const filteredNUm = []
    each(formInput.nums, num => {
      filteredNUm.push(num.id)
    })
    try {
      if (formInput.name && formInput.num) {
        const numArray = formInput.num.split(',')
        let formatNums = []
        each(numArray, num => {
          const numObj = find(ThreeDNumbers, threeDObj => threeDObj.num === num)
          if (find(formatNums, f => f === numObj.id)) {
          } else {
            formatNums.push(numObj.id)
          }
        })
        if (formatNums.length > 0) {
          Instance({
            url: '/admin/settings/keywords/3d/createKeyWord',
            method: 'POST',
            data: {
              name: formInput.name,
              nums: formatNums
            }
          })
            .then(res => {
              if (res.data && res.data.statusCode === 201) {
                addToast(res.data.message, {
                  appearance: 'success',
                  autoDismiss: true
                })
              } else if (res.data && res.data.statusCode === 400) {
                addToast(res.data.message, {
                  appearance: 'warning',
                  autoDismiss: true
                })
              } else {
                addToast('တစ်ခုခုမှားယွင်းနေပါသည်', {
                  appearance: 'warning',
                  autoDismiss: true
                })
              }
            })
            .catch(err => {
              console.log(err)
              addToast('တစ်ခုခုမှားယွင်းနေပါသည်', {
                appearance: 'warning',
                autoDismiss: true
              })
            })
            .finally(() => {
              setFormInput({
                name: '',
                num:''
              })
              getKeywords()
            })
        } else {
          addToast('ဂဏန်းများသေချာစွာစစ်ဆေးပါ', {
            appearance: 'warning',
            autoDismiss: true
          })
        }
      } else {
        addToast('UiInputသေချာအောင်ဖြည့်ပါ', {
          appearance: 'warning',
          autoDismiss: true
        })
      }
    } catch (err) {
      addToast('System error', { appearance: 'error', autoDismiss: true })
    }
  }

  const DeleteKeyword = id => {
    try {
      Instance({
        url: `/admin/settings/keywords/3d/deleteKeyWord`,
        method: 'POST',
        data: {
          id: id
        }
      })
        .then(res => {
          if (res.data && res.data.statusCode === 200) {
            addToast(res.data.message, {
              appearance: 'success',
              autoDismiss: true
            })
          }
        })
        .catch(err => {
          addToast('တစ်ခုခုမှားယွင်းနေပါသည်', {
            appearance: 'warning',
            autoDismiss: true
          })
        })
        .finally(() => {
          getKeywords()
        })
    } catch (error) {
      addToast('တစ်ခုခုမှားယွင်းနေပါသည်', {
        appearance: 'warning',
        autoDismiss: true
      })
    }
  }

  return (
    <ManagementLayout
      routes={routes.threeDManamentRoutes}
      title='3D management'
    >
      <ManagementHeader className={`text-indigo-500`}>
        အသုံးအနှုန်းများ ထည့်ရန်
      </ManagementHeader>

      <div className='grid grid-cols-1 gap-10 lg:grid-cols-2'>
        <div className='space-y-4 '>
          <div className=''>
            <UiInput
              name='name'
              id='name'
              formData={formInput}
              setFromData={setFormInput}
              placeHolder='အသုံးအနှုန်းအမည်'
              required={true}
              type='text'
            />
          </div>

          <div className=''>
            <UiTextAreaInput
              name='num'
              rows={4}
              id='num'
              type='text'
              formData={formInput}
              setFromData={setFormInput}
              required={true}
              placeHolder='ဂဏန်းမျာ: e.g  123,234,345,456'
              maxLength={100000}
            />
          </div>

          <div className='flex items-center justify-end '>
            <button
              onClick={submitHandler}
              className='px-4 py-2 text-indigo-400 border border-indigo-400 rounded-md shadow-lg'
            >
              အတည်ပြုမည်
            </button>
          </div>
        </div>
      </div>

      <div className='border-t border-slate-300'>
        <div className='py-5 '>
          <SelectTable>
            <thead className='text-xs font-semibold uppercase border-t border-b text-slate-500 bg-slate-50 border-slate-200'>
              <TableRow>
                <TableCell isHeader={true}>အသုံးအနှုန်းအမည်</TableCell>
                <TableCell isHeader={true}>ကဏန်း</TableCell>
                <TableCell isHeader={true} className='sr-only'>
                  Menu
                </TableCell>
              </TableRow>
            </thead>
            <tbody className='text-sm divide-y divide-slate-200'>
              {keyWords.map((threeDKeyword, i) => (
                <TableRow key={i}>
                  <TableCell>{threeDKeyword.name}</TableCell>

                  <TableCell>
                    <DotsHorizontalIcon
                      onClick={() => {
                        showNums(threeDKeyword)
                      }}
                      className='w-6 h-6 '
                    />
                  </TableCell>
                  <TableCell>
                    <TrashIcon
                      onClick={() => {
                        DeleteKeyword(threeDKeyword.id)
                      }}
                      className='w-6 h-6 '
                    />
                  </TableCell>
                </TableRow>
              ))}
            </tbody>
          </SelectTable>
        </div>
      </div>
      <MyModal isModalOpen={show} setIsModalOpen={setShow}>
        <ModalTitle>
          {selectedNums && <span> {selectedNums.name} </span>}
        </ModalTitle>
        <ModalBody>
          <div className='border-t border-slate-300'>
            <div className='py-5 '>
              <SelectTable>
                <thead className='text-xs font-semibold uppercase border-t border-b text-slate-500 bg-slate-50 border-slate-200'>
                  <TableRow>
                    <TableCell isHeader={true}>စဉ်</TableCell>
                    <TableCell isHeader={true}>ကဏန်း</TableCell>
                    <TableCell isHeader={true} className='sr-only'>
                      Menu
                    </TableCell>
                  </TableRow>
                </thead>
                {selectedNums && (
                  <tbody className='text-sm divide-y divide-slate-200'>
                    {selectedNums.threeDNumber &&
                      selectedNums.threeDNumber.map((threeDKeyword, i) => (
                        <TableRow key={i}>
                          <TableCell> {i + 1} </TableCell>
                          <TableCell>
                            {threeDKeyword.ThreeDNumer
                              ? threeDKeyword.ThreeDNumer.num
                              : ''}
                          </TableCell>

                          <TableCell>
                            <DotsHorizontalIcon
                              onClick={() => {
                                showNums(threeDKeyword)
                              }}
                              className='w-6 h-6 '
                            />
                          </TableCell>
                        </TableRow>
                      ))}
                  </tbody>
                )}
              </SelectTable>
            </div>
          </div>
        </ModalBody>
      </MyModal>
    </ManagementLayout>
  )
}

export default ThreeDKeywords
