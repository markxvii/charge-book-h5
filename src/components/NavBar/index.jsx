import PropTypes from 'prop-types'
import s from './style.module.less'
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {TabBar} from "zarm";

const NavBar = ({showNav}) => {
  const [activeKey, setActiveKey] = useState('/')
  const navigateTo = useNavigate()

  const changeTab = (path) => {
    setActiveKey(path)
    navigateTo(path)
  }

  return (
    <TabBar visible={showNav} className={s.tab} activeKey={activeKey} onChange={changeTab}>
      <TabBar.Item
        itemKey="/"
        title={'账单'}
      />
      <TabBar.Item
        itemKey="/data"
        title="统计"
      />
      <TabBar.Item
        itemKey="/user"
        title="我的"
      />
    </TabBar>
  );
}

NavBar.propTypes = {
  showNav: PropTypes.bool
}

export default NavBar
