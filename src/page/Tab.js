import { Tabs } from 'antd';

const TabPane = Tabs.TabPane;

export default () => (
  <Tabs>
    <TabPane tab="Tab 1" key="1">
      Content of Tab Pane 1
    </TabPane>
    <TabPane tab="Tab 2" key="2">
      Content of Tab Pane 2
    </TabPane>
  </Tabs>
);
