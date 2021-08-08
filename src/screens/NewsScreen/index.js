import React, { Component } from 'react';

import {
  // Container,
  Header,
  Content,
  Left,
  Body,
  Right,
  Title,
  Tab,
  Tabs,
  Text,
  View,
} from 'native-base';
//styles
import { Container } from './styles';
import Tab1 from './tabs/tab1';
import Tab2 from './tabs/tab2';
import Tab3 from './tabs/tab3';
import GoBack from '../../components/GoBack';
export default class TabsExample extends Component {
  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: '#fa6c30' }} hasTabs>
          <Left />
          <Body>
            <GoBack />
            <Title style={{ color: 'white', marginTop: 'auto' }}>
              Notícias
            </Title>
          </Body>
          <Right />
        </Header>
        <Tabs tabBarUnderlineStyle={{ backgroundColor: 'white' }}>
          <Tab
            tabStyle={{ backgroundColor: '#fa6c30' }}
            activeTabStyle={{ backgroundColor: '#fa6c30' }}
            textStyle={{ color: 'white' }}
            activeTextStyle={{ color: 'white' }}
            heading="Gerais"
          >
            <Tab1 />
          </Tab>
          <Tab
            tabStyle={{ backgroundColor: '#fa6c30' }}
            activeTabStyle={{ backgroundColor: '#fa6c30' }}
            textStyle={{ color: 'white' }}
            activeTextStyle={{ color: 'white' }}
            heading="Negócios"
          >
            <Tab2 />
          </Tab>
          <Tab
            tabStyle={{ backgroundColor: '#fa6c30' }}
            activeTabStyle={{ backgroundColor: '#fa6c30' }}
            textStyle={{ color: 'white' }}
            activeTextStyle={{ color: 'white' }}
            heading="Tecnologia"
          >
            <Tab3 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
