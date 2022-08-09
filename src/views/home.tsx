import { Button, Result } from 'antd-mobile'
import React from 'react'
import { Link } from 'react-router-dom'
import { SmileOutline } from 'antd-mobile-icons'
import style from './home.module.less'
import { useAccountStore } from '@/store'
function Home(props: any) {
  const { count, addCount } = useAccountStore()
  console.log(count)
  return (
    <React.Fragment>
      <Result icon={<SmileOutline />} status="success" title="React-Mobile" />
      <div className={style.wrap}>
        <div> react 18</div>
        <div> react-router-dom 6</div>
        <div> typescript </div>
        <div> antd-mobile </div>
        <div> axios </div>
        <div> less </div>
        <div> postcss-px-to-viewport </div>
        <div> eslint/prettier </div>
        <Link to="/test">LINK其他页</Link>
      </div>
      <div className="text-green-600 text-[30px] w-[200px] mx-[auto] text-center">windiCss</div>
      <div className="text-xs text-gray-400 text-center">
        (tailwind3对低版本浏览器兼容性有问题,由windiCss代替)
      </div>
      <div className="text-green-600 text-[30px] w-[200px] mx-[auto] text-center">
        state:{count}
        <Button color="primary" fill="solid" size="mini" onClick={addCount}>
          add
        </Button>
      </div>
    </React.Fragment>
  )
}

export default Home
