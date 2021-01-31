import React from 'react'
import {Form} from './Form'

const Context = () => (
  <div className="order-2 col-span-3 mt-8 lg:order-1 lg:col-span-2 lg:pr-8 lg:mt-0">
    <h6 className="mt-0 mb-1 text-lg font-light tracking-tight text-black sm:mb-1 sm:tracking-tight">
      Racist mascots 🤷‍♂️
    </h6>

    <h1 className="mx-0 mt-0 mb-4 text-4xl font-bold text-black">
      No justification. 🙅🏽‍♀️
    </h1>

    <div className="prose prose-lg prose-primary">
      <p>We are demanding:</p>

      <ol>
        <li>
          Cease the use of racialized Native American branding by eliminating
          all imagery of or evocative of Native American culture, traditions,
          and spirituality from their team franchise by changing the name
          including the logo. This includes the use of Native terms, drum,
          arrows, or monikers that assume the presence of Native American
          culture.
        </li>

        <li>
          Apply the NFL’s “zero tolerance” for on-field use of racial and
          homophobic slurs to all races and ethnic groups, especially Native
          Peoples.
        </li>
      </ol>
    </div>
  </div>
)

export const Action = () => (
  <div className="relative z-10 px-4 py-12 mb-0 -mt-40 font-light text-black no-underline md:px-8">
    <div className="container grid max-w-6xl grid-cols-3 p-4 mx-auto bg-white rounded md:p-6">
      <Context />
      <Form id="1e6344b9-ac8b-42df-a060-159bf5198383" />
    </div>
  </div>
)
