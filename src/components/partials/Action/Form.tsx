import React, {FunctionComponent, useState} from 'react'
import axios from 'axios'
import {useForm} from 'react-hook-form'
import { Modal } from 'components/Modal'
import { Submit } from './Submit'
import {Input} from './Input'

type Inputs = {
  example: string
  exampleRequired: string
}

interface FormProps {
  id: string
}

export const Form: FunctionComponent<FormProps> = ({id}) => {
  const [modalVisible, setModalVisible] = useState(null)
  const {register, handleSubmit, errors} = useForm<Inputs>()

  const onSubmit = data => {
    if (!id) {
      return
    }

    axios({
      method: 'post',
      url: `/api/form`,
      data: { id, data },
    })
      .then(res => {
        if (res.status == 200) {
          setModalVisible(true)
        }
      })
      .catch(err => console.log(err))
  }

  const onCloseModal = () => {
    setModalVisible(false)
  }

  return (
    <div className="flex flex-col order-1 w-full col-span-3 items-top lg:order-2 lg:col-span-1">
      <div className="w-full h-auto px-4 py-4 border border-gray-200 rounded">

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col justify-center w-full">
            <Input
              name="firstName"
              placeholder="First name"
              type="text"
              register={register({ required: true })}
            />

            <div className="mt-3">
              <Input
                name="lastName"
                placeholder="Last name"
                type="text"
                register={register({ required: true })}
              />
            </div>

            <div className="mt-3">
              <Input
                name="email"
                placeholder="Email address"
                type="email"
                register={register({ required: true })}
              />
            </div>

            <Submit>Take Action</Submit>
            <span className="mt-4 text-xs text-gray-600">The Not in our Honor Coalition may use your email to contact you about this and other important indigenous campaigns.</span>
          </div>
        </form>
      </div>

      <Modal
        closeHandler={onCloseModal}
        className={modalVisible ? 'visible' : 'hidden'}
      />
    </div>
  )
}