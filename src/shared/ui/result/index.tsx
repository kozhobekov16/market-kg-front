import {Button, Result as ResultAnt} from "antd";
import {ResultProps} from "antd/es/result";
import Link from "next/link";
import '@ant-design/v5-patch-for-react-19';

interface Props extends ResultProps {
  btnText?: string
}

export const Result = ({subTitle, status, btnText}: Props) => {
  return (
    <ResultAnt
      status={status}
      subTitle={subTitle}
      extra={<Link href={'/'}><Button type="primary">{btnText}</Button></Link>}
    />
  )
}