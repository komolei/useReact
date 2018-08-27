import React, { Component } from 'react';
import ReactDom from 'react-dom'
import { hot } from 'react-hot-loader';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import Test from '../container/test'
import '../scss/layout.scss';
const { SubMenu } = Menu;
export default hot(module)(class AppLayout extends React.Component {
  constructor (props) {
    super(props);
  }
  state = {
    // 顶部导航栏
    headerNavList: [
      {
        name: 'totalManageC',
        alias: '全局管理'
      }, {
        name: 'operationManageC',
        alias: '运营管理'
      }, {
        name: 'tempManageC',
        alias: '模板市场'
      }, {
        name: 'openSettingManageC',
        alias: '发布设置'
      }
    ],
    // 全部侧边栏
    totalAsideNavList: {
      totalManageC: [
        {
          name: "store",
          url: "/totalManageC/store",
          alias: "门店管理",
          component: Test
        }, {
          name: "brand",
          url: "/totalManageC/brand",
          alias: "品牌管理",
          component: Test

        }, {
          name: "reservation",
          url: "/totalManageC/reservation",
          alias: "预约订单",
          component: Test

        }, {
          name: "apply",
          url: "/totalManageC/apply",
          alias: "支付管理",
          component: Test

        }, {
          name: "userInfo",
          url: "/totalManageC/userInfo",
          alias: "用户信息",
          component: Test

        }, {
          name: "integral",
          url: "/totalManageC/integral",
          alias: "积分管理",
          component: Test

        }, {
          name: "coupon",
          url: "/totalManageC/coupon",
          alias: "优惠券管理",
          component: Test

        }, {
          name: "newsTemp",
          url: "/totalManageC/newsTemp",
          alias: "消息模板",
          component: Test

        }, {
          name: "message",
          url: "/totalManageC/message",
          alias: "短息服务管理",
          component: Test

        }, {
          name: "acconutSafety",
          url: "/totalManageC/acconutSafety",
          alias: "账号安全",
          component: Test

        }
      ],
      operationManageC: [
        {
          name: "technician",
          url: "/operationManageC/technician",
          alias: "技师管理",
          component: Test

        }, {
          name: "serviceM",
          url: "/operationManageC/serviceM",
          alias: "服务管理",
          component: Test

        }, {
          name: "imgManage",
          url: "/operationManageC/imgManage",
          alias: "图片管理",
          component: Test

        }, {
          name: "recommandService",
          url: "/operationManageC/recommandService",
          alias: "推荐设置",
          component: Test

        }
      ],
      tempManageC: [
        {
          name: "myTemp",
          url: "/templateMarketC/myTemp",
          alias: "我的模板",
          component: Test

        }, {
          name: "tempM",
          url: "/templateMarketC/tempM",
          alias: "模板市场",
          component: Test

        }
      ],
      openSettingManageC: [
        {
          name: "miniProgramBind",
          url: "/openSettingC/miniProgramBind",
          alias: "小程序绑定配置",
          component: Test

        }, {
          name: "tempCenter",
          url: "/openSettingC/tempCenter",
          alias: "模板中心",
          component: Test

        }, {
          name: "openSetting",
          url: "/openSettingC/openSetting",
          alias: "发布设置",
          component: Test

        }, {
          name: "storeInfoBind",
          url: "/openSettingC/storeInfoBind",
          alias: "商户信息配置",
          component: Test

        }
        /*{
          name: "accountSafe",
          url: "/openSettingC/accountSafe",
          alias: "账号安全"
        }*/
      ]
    },
    asideNavList: [] // 侧边栏
  }
  selected = ({ item, key, keyPath }) => {
    console.log(' this is selected is----', item, key, keyPath);
    this.setState({ asideNavList: this.state.totalAsideNavList[key] })
  }
  initAsideNavList = () => {
    this.setState({ asideNavList: this.state.totalAsideNavList.totalManageC })
  }
  // componentWillMount = () => { // 即将移除这个方法，所以要写到constructor那边
  // this.initAsideNavList();   console.log('1'); }

  render() {
    const { Header, Content, Footer, Sider } = Layout;
    const { headerNavList, asideNavList } = this.state;
    console.log('2');
    return (
      <Layout>
        <Header className="header">
          <div className="logo">
            <Icon
              type="question-circle"
              style={{
                fontSize: 32,
                color: '#08c',
                display: 'block'
              }} />
          </div>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['totalManageC']}
            style={{
              lineHeight: '64px'
            }}
            onClick={this.selected}>
            {headerNavList.map((item, index) => (
              <Menu.Item key={item.name}>{item.alias}</Menu.Item>
            ))}
          </Menu>
        </Header>
        <Layout>
          <Sider
            width={200}
            style={{
              background: '#fff',
              textAlign: 'center'
            }}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['0']}
              style={{
                height: '100%',
                borderRight: 0
              }}>
              {asideNavList.map((item, index) => (
                <Menu.Item key={index}>
                  <Link to={item.url}>
                    {item.alias}
                  </Link>
                </Menu.Item>
              ))}
            </Menu>
          </Sider>
          <Layout style={{
            padding: '0 24px 24px'
          }}>
            <Content
              style={{
                background: '#fff',
                padding: 24,
                margin: 0,
                minHeight: 280
              }}>
              {asideNavList.map((item, index) => (<Route key={index} path={item.url} component={item.component} />))}
            </Content>
          </Layout>
        </Layout>
      </Layout>

    )
  }
  componentDidMount = () => {
    this.initAsideNavList(); // 所以这个初始化写到这个生命周期中
    console.log(3);
  }

})