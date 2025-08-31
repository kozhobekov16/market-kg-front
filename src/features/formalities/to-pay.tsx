import React, {useState} from 'react'
import {Card, Image, Radio, RadioChangeEvent} from "antd";

export const ToPay = () => {
  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
  };

  return (
    <Card
      title="Выберите удобный способ оплаты"
      className="my-6 rounded-2xl border border-gray-300 shadow-lg hover:shadow-xl transition-all"
    >
      <div className="flex flex-col gap-6">
        <Radio.Group
          className="flex justify-between items-center"
          onChange={onChange}
          value={value}
          size={'large'}
        >
          {[
            {value: 1, label: "./assets/bank/mbank.png"},
            {value: 2, label: "./assets/bank/bakai.png"},
            {value: 4, label: "./assets/bank/optima.png"},
            {value: 3, label: "./assets/bank/companion.png"},
          ].map(({value, label}) => (
            <Radio key={value} value={value}>
              <div className="p-4 rounded-lg border bg-gray-50 hover:bg-gray-100 transition-all">
                <Image preview={false} src={label} className={'3xl:!w-56 2xl:!w-44 sm:!w-20'} alt={label}/>
              </div>
            </Radio>
          ))}
        </Radio.Group>
        <Radio.Group optionType="button" name="radiogroup" defaultValue={1}>
          <Radio value={1}>3 Месяца</Radio>
          <Radio value={2}>6 Месяца</Radio>
          <Radio value={3}>12 Месяца</Radio>
          <Radio value={4}>18 Месяца</Radio>
        </Radio.Group>
      </div>
    </Card>
  )
}