import { Result } from 'antd-mobile'
import React from 'react'
import { Link } from 'react-router-dom'
import { SmileOutline } from 'antd-mobile-icons'
import style from './home.module.less'
function Home(props: any) {
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
        <div> tailwindCss </div>
        <Link to="/test">LINK其他页</Link>
      </div>
    </React.Fragment>
  )
}

export default Home
