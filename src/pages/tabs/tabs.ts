import { Component } from '@angular/core';

import { ChannelPage } from '../channel/channel';
import { ChatPage } from '../chat/chat';
import { HomePage } from '../home/home';
import { ContactsPage } from '../contacts/contacts';
import { ToolsPage } from '../tools/tools';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ChannelPage;
  tab2Root = ChatPage;
  tab3Root = HomePage;
  tab4Root = ContactsPage;
  tab5Root = ToolsPage;

  constructor() {

  }
}
