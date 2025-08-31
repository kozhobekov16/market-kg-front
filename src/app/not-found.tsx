import {Result} from "@/shared";

export default function NotFound() {
  return (
    <div className={'py-0 sm:py-40'}>
      <Result btnText={'Вернуться в главную'} status={404} subTitle={'Страница не существет!'}/>
    </div>
  )
}